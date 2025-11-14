<?php

use Slim\App;
use Slim\Routing\RouteCollectorProxy;
use Modules\admin\Controllers\LoginViewController;
use Modules\admin\Controllers\DashboardController;
use Modules\admin\Controllers\UserController;
use Modules\admin\Controllers\PageController;
use Modules\admin\Controllers\PostController;
use Modules\admin\Controllers\MediaController;
use Modules\admin\Controllers\RoleController;
use Modules\admin\Controllers\PermissionController;
use Modules\admin\Middleware\AuthMiddleware;
use Modules\admin\Controllers\CLogin;
use Modules\admin\Controllers\CLogout;

// Public routes (no authentication required)
$app->get('/admin/login', [LoginViewController::class, 'showLogin']);
$app->post('/admin/auth/login', CLogin::class);
$app->get('/admin/auth/check', [LoginViewController::class, 'checkAuth']);

// Protected routes (authentication required)
$app->group('/admin', function (RouteCollectorProxy $group) {
    // Dashboard
    $group->get('[/]', [DashboardController::class, 'index']);
    $group->get('/dashboard', [DashboardController::class, 'index']);
    
    // Auth
    $group->get('/logout', CLogout::class);
    
    // Users
    $group->get('/users', [UserController::class, 'index']);
    $group->get('/users/create', [UserController::class, 'create']);
    $group->post('/users', [UserController::class, 'store']);
    $group->get('/users/edit/{id}', [UserController::class, 'edit']);
    $group->post('/users/save/{id}', [UserController::class, 'update']);
    $group->delete('/users/{id}', [UserController::class, 'delete']);
    
    // API endpoints for users
    $group->get('/api/users', [UserController::class, 'getAll']);
    $group->get('/api/users/{id}', [UserController::class, 'getOne']);
    
    // Pages
    $group->get('/pages', [PageController::class, 'index']);
    $group->get('/pages/new', [PageController::class, 'create']);
    $group->get('/pages/create', [PageController::class, 'create']); // Backward compatibility
    $group->post('/pages', [PageController::class, 'store']);
    $group->post('/pages/save/{id}', [PageController::class, 'update']);
    $group->get('/pages/edit/{id}', [PageController::class, 'edit']);
    $group->get('/pages/{id}', [PageController::class, 'edit']); // Backward compatibility
    $group->put('/pages/{id}', [PageController::class, 'update']); // Backward compatibility
    $group->delete('/pages/delete/{id}', [PageController::class, 'delete']);
    $group->delete('/pages/{id}', [PageController::class, 'delete']); // Backward compatibility
    
    // API endpoints for pages
    $group->get('/api/pages', [PageController::class, 'getAll']);
    $group->get('/api/pages/{id}', [PageController::class, 'getOne']);
    
    // Posts
    $group->get('/posts', [PostController::class, 'index']);
    $group->get('/posts/create', [PostController::class, 'create']);
    $group->post('/posts', [PostController::class, 'store']);
    $group->get('/posts/edit/{id}', [PostController::class, 'edit']);
    $group->post('/posts/save/{id}', [PostController::class, 'update']);
    $group->put('/posts/{id}', [PostController::class, 'update']); // Backward compatibility
    $group->delete('/posts/{id}', [PostController::class, 'delete']);
    
    // API endpoints for posts
    $group->get('/api/posts', [PostController::class, 'getAll']);
    $group->get('/api/posts/{id}', [PostController::class, 'getOne']);
    
    // Media
    $group->get('/media', [MediaController::class, 'index']);
    $group->post('/media/upload', [MediaController::class, 'upload']);
    $group->delete('/media/{id}', [MediaController::class, 'delete']);
    
    // API endpoints for media
    $group->get('/api/media', [MediaController::class, 'getAll']);
    $group->get('/api/media/{id}', [MediaController::class, 'getOne']);
    
    // Roles
    $group->get('/roles', [RoleController::class, 'index']);
    $group->get('/roles/create', [RoleController::class, 'create']);
    $group->post('/roles', [RoleController::class, 'store']);
    $group->get('/roles/edit/{id}', [RoleController::class, 'edit']);
    $group->put('/roles/{id}', [RoleController::class, 'update']);
    $group->delete('/roles/{id}', [RoleController::class, 'delete']);
    
    // API endpoints for roles
    $group->get('/api/roles', [RoleController::class, 'getAll']);
    $group->get('/api/roles/{id}', [RoleController::class, 'getOne']);
    
    // Permissions
    $group->get('/permissions', [PermissionController::class, 'index']);
    $group->get('/permissions/create', [PermissionController::class, 'create']);
    $group->post('/permissions', [PermissionController::class, 'store']);
    $group->get('/permissions/{id}', [PermissionController::class, 'edit']);
    $group->put('/permissions/{id}', [PermissionController::class, 'update']);
    $group->delete('/permissions/{id}', [PermissionController::class, 'delete']);
    
    // API endpoints for permissions
    $group->get('/api/permissions', [PermissionController::class, 'getAll']);
    $group->get('/api/permissions/{id}', [PermissionController::class, 'getOne']);
    
})->add(AuthMiddleware::class);