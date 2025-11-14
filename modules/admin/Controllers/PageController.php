<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Page;

class PageController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $pageModel = new Page($this->db);
        $result = $pageModel->getAllWithAuthor($page, $perPage, [], $language);

        return $this->render($response, 'pages/index.twig', [
            'pageTitle' => 'Pages',
            'pages' => $result['data'],
            'pagination' => [
                'page' => $result['page'],
                'perPage' => $result['perPage'],
                'total' => $result['total'],
                'totalPages' => $result['totalPages']
            ]
        ], $request);
    }

    public function create(Request $request, Response $response): Response
    {
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';
        $pageModel = new Page($this->db);
        $pages = $pageModel->getAllWithAuthor(1, 1000, [], $language);
        
        // Get available languages from settings
        $availableLanguages = $this->settings['languages'] ?? ['en'];

        return $this->render($response, 'pages/editor.twig', [
            'pageTitle' => 'Create Page',
            'mode' => 'create',
            'page' => [],
            'pages' => $pages['data'],
            'language' => $language,
            'availableLanguages' => $availableLanguages,
            'pageLangs' => []
        ], $request);
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->getParsedBody($request);
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $errors = $this->validate($data, [
            'title' => 'required|max:255',
            'slug' => 'required|max:255'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $pageModel = new Page($this->db);

        // Check if slug exists for this language
        if ($pageModel->slugExists($data['slug'], $language)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists for this language']]
            ], 422);
        }

        // Prepare page data (main table)
        $pageData = [
            'status' => $data['status'] ?? 'draft',
            'author_id' => $this->getAuthUserId(),
            'parent_id' => $data['parent_id'] ?? null,
            'template' => $data['template'] ?? 'default',
            'order' => $data['order'] ?? 0,
            'published_at' => ($data['status'] ?? 'draft') === 'published' ? date('Y-m-d H:i:s') : null
        ];

        // Prepare language-specific data
        $langData = [
            'title' => $data['title'],
            'slug' => $data['slug'],
            'content' => $data['content'] ?? null,
            'excerpt' => $data['excerpt'] ?? null,
            'meta_title' => $data['meta_title'] ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'meta_keywords' => $data['meta_keywords'] ?? null
        ];

        $pageId = $pageModel->createPageWithLang($pageData, $langData, $language);

        return $this->json($response, [
            'success' => true,
            'message' => 'Page created successfully',
            'page_id' => $pageId
        ], 201);
    }

    public function edit(Request $request, Response $response, array $args): Response
    {
        $pageId = (int) $args['id'];
        $params = $this->getQueryParams($request);
        // Check for lang query parameter first, then fall back to request attribute
        $language = $params['lang'] ?? $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';
        
        $pageModel = new Page($this->db);
        $page = $pageModel->getPageWithAuthor($pageId, $language);

        if (!$page) {
            throw new \Slim\Exception\HttpNotFoundException($request);
        }

        // Get all language versions of this page
        $pageLangs = $pageModel->getAllPageLangs($pageId);
        $langData = [];
        foreach ($pageLangs as $lang) {
            $langData[$lang['language']] = $lang;
        }

        $pages = $pageModel->getAllWithAuthor(1, 1000, ['pages.id[!]' => $pageId], $language);
        
        // Get available languages from settings
        $availableLanguages = $this->settings['languages'] ?? ['en'];

        return $this->render($response, 'pages/editor.twig', [
            'pageTitle' => 'Edit Page',
            'mode' => 'edit',
            'page' => $page,
            'pages' => $pages['data'],
            'language' => $language,
            'availableLanguages' => $availableLanguages,
            'pageLangs' => $langData
        ], $request);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $pageId = (int) $args['id'];
        $data = $this->getParsedBody($request);
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $errors = $this->validate($data, [
            'title' => 'required|max:255',
            'slug' => 'required|max:255'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $pageModel = new Page($this->db);

        // Check if slug exists for this language (excluding current page)
        if ($pageModel->slugExists($data['slug'], $language, $pageId)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists for this language']]
            ], 422);
        }

        // Prepare page data (main table)
        $pageData = [
            'status' => $data['status'] ?? 'draft',
            'parent_id' => $data['parent_id'] ?? null,
            'template' => $data['template'] ?? 'default',
            'order' => $data['order'] ?? 0
        ];

        // Update published_at when status changes to published
        if ($data['status'] === 'published') {
            $currentPage = $pageModel->find($pageId);
            if ($currentPage['status'] !== 'published') {
                $pageData['published_at'] = date('Y-m-d H:i:s');
            }
        }

        // Prepare language-specific data
        $langData = [
            'title' => $data['title'],
            'slug' => $data['slug'],
            'content' => $data['content'] ?? null,
            'excerpt' => $data['excerpt'] ?? null,
            'meta_title' => $data['meta_title'] ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'meta_keywords' => $data['meta_keywords'] ?? null
        ];

        $pageModel->updatePageWithLang($pageId, $pageData, $langData, $language);

        return $this->json($response, [
            'success' => true,
            'message' => 'Page updated successfully'
        ]);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $pageId = (int) $args['id'];

        $pageModel = new Page($this->db);
        $pageModel->deletePage($pageId);

        return $this->json($response, [
            'success' => true,
            'message' => 'Page deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $pageModel = new Page($this->db);
        $result = $pageModel->getAllWithAuthor($page, $perPage, [], $language);

        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $pageId = (int) $args['id'];
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';
        
        $pageModel = new Page($this->db);
        $page = $pageModel->getPageWithAuthor($pageId, $language);

        if (!$page) {
            return $this->json($response, [
                'success' => false,
                'message' => 'Page not found'
            ], 404);
        }

        return $this->json($response, $page);
    }
}
