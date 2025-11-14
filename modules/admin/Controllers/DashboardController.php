<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Post;
use Modules\admin\Models\Page;
use Modules\admin\Models\User;

class DashboardController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $postModel = new Post($this->db);
        $pageModel = new Page($this->db);
        $userModel = new User($this->db);

        $stats = [
            'totalPosts' => $postModel->count(),
            'publishedPosts' => $postModel->count(['status' => 'published']),
            'draftPosts' => $postModel->count(['status' => 'draft']),
            'totalPages' => $pageModel->count(),
            'publishedPages' => $pageModel->count(['status' => 'published']),
            'draftPages' => $pageModel->count(['status' => 'draft']),
            'totalUsers' => $userModel->count(),
            'activeUsers' => $userModel->count(['status' => 'active'])
        ];

        // Recent posts
        $recentPosts = $postModel->getAllWithAuthor(1, 5);
        
        // Recent pages
        $recentPages = $pageModel->getAllWithAuthor(1, 5);

        return $this->render($response, 'dashboard.twig', [
            'pageTitle' => 'Dashboard',
            'stats' => $stats,
            'recentPosts' => $recentPosts['data'],
            'recentPages' => $recentPages['data']
        ], $request);
    }
}
