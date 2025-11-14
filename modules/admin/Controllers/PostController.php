<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Post;
use Modules\admin\Models\Category;

class PostController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $postModel = new Post($this->db);
        $result = $postModel->getAllWithAuthor($page, $perPage, [], $language);

        return $this->render($response, 'posts/index.twig', [
            'pageTitle' => 'Posts',
            'posts' => $result['data'],
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
        $categoryModel = new Category($this->db);
        $categories = $categoryModel->all();
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';
        
        // Get available languages from settings
        $availableLanguages = $this->settings['languages'] ?? ['en'];

        return $this->render($response, 'posts/editor.twig', [
            'pageTitle' => 'Create Post',
            'mode' => 'create',
            'post' => [],
            'categories' => $categories,
            'language' => $language,
            'availableLanguages' => $availableLanguages,
            'postLangs' => []
        ], $request);
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->getParsedBody($request);
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $errors = $this->validate($data, [
            'title' => 'required|max:200',
            'slug' => 'required|max:200'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $postModel = new Post($this->db);

        // Check if slug exists for this language
        if ($postModel->slugExists($data['slug'], $language)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists for this language']]
            ], 422);
        }

        $postId = $postModel->createPostWithLang([
            'status' => $data['status'] ?? 'draft',
            'author_id' => $this->getAuthUserId(),
            'featured_image' => $data['featured_image'] ?? null,
            'published_at' => ($data['status'] ?? 'draft') === 'published' ? date('Y-m-d H:i:s') : null
        ], [
            'title' => $data['title'],
            'slug' => $data['slug'],
            'content' => $data['content'] ?? null,
            'excerpt' => $data['excerpt'] ?? null,
            'meta_title' => $data['meta_title'] ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'meta_keywords' => $data['meta_keywords'] ?? null
        ], $language);

        // Sync categories
        if (isset($data['categories']) && is_array($data['categories'])) {
            $postModel->syncCategories($postId, $data['categories']);
        }

        return $this->json($response, [
            'success' => true,
            'message' => 'Post created successfully',
            'post_id' => $postId
        ], 201);
    }

    public function edit(Request $request, Response $response, array $args): Response
    {
        $postId = (int) $args['id'];
        $params = $this->getQueryParams($request);
        // Check for lang query parameter first, then fall back to request attribute
        $language = $params['lang'] ?? $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';
        
        $postModel = new Post($this->db);
        $post = $postModel->getPostWithAuthor($postId, $language);

        if (!$post) {
            throw new \Slim\Exception\HttpNotFoundException($request);
        }

        $categoryModel = new Category($this->db);
        $categories = $categoryModel->all();
        
        $postCategories = $postModel->getPostCategories($postId);
        $post['categories'] = array_column($postCategories, 'id');
        
        // Get all language versions of this post
        $postLangs = $postModel->getAllPostLangs($postId);
        $langData = [];
        foreach ($postLangs as $lang) {
            $langData[$lang['language']] = $lang;
        }
        
        // Get available languages from settings
        $availableLanguages = $this->settings['languages'] ?? ['en'];

        return $this->render($response, 'posts/editor.twig', [
            'pageTitle' => 'Edit Post',
            'mode' => 'edit',
            'post' => $post,
            'categories' => $categories,
            'language' => $language,
            'availableLanguages' => $availableLanguages,
            'postLangs' => $langData
        ], $request);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $postId = (int) $args['id'];
        $data = $this->getParsedBody($request);
        $language = $request->getAttribute('language') ?? $this->settings['language'] ?? 'en';

        $errors = $this->validate($data, [
            'title' => 'required|max:200',
            'slug' => 'required|max:200'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $postModel = new Post($this->db);

        // Check if slug exists for this language (excluding current post)
        if ($postModel->slugExists($data['slug'], $language, $postId)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists for this language']]
            ], 422);
        }

        $postModel->updatePostWithLang($postId, [
            'status' => $data['status'] ?? 'draft',
            'featured_image' => $data['featured_image'] ?? null
        ], [
            'title' => $data['title'],
            'slug' => $data['slug'],
            'content' => $data['content'] ?? null,
            'excerpt' => $data['excerpt'] ?? null,
            'meta_title' => $data['meta_title'] ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'meta_keywords' => $data['meta_keywords'] ?? null
        ], $language);

        // Sync categories
        if (isset($data['categories']) && is_array($data['categories'])) {
            $postModel->syncCategories($postId, $data['categories']);
        }

        return $this->json($response, [
            'success' => true,
            'message' => 'Post updated successfully'
        ]);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $postId = (int) $args['id'];

        $postModel = new Post($this->db);
        $postModel->deletePost($postId);

        return $this->json($response, [
            'success' => true,
            'message' => 'Post deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;

        $postModel = new Post($this->db);
        $result = $postModel->getAllWithAuthor($page, $perPage);

        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $postId = (int) $args['id'];
        
        $postModel = new Post($this->db);
        $post = $postModel->getPostWithAuthor($postId);

        if (!$post) {
            return $this->json($response, [
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        }

        $postCategories = $postModel->getPostCategories($postId);
        $post['categories'] = $postCategories;

        return $this->json($response, $post);
    }
}
