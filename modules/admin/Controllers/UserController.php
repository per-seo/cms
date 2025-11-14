<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\User;
use Modules\admin\Models\Role;

class UserController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;

        $userModel = new User($this->db);
        $result = $userModel->getAllWithRoles($page, $perPage);

        return $this->render($response, 'users/index.twig', [
            'pageTitle' => 'Users',
            'users' => $result['data'],
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
        $roleModel = new Role($this->db);
        $roles = $roleModel->all();

        return $this->render($response, 'users/create.twig', [
            'pageTitle' => 'Create User',
            'roles' => $roles
        ], $request);
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->getParsedBody($request);

        $errors = $this->validate($data, [
            'username' => 'required|min:3|max:50',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'role_id' => 'required'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $userModel = new User($this->db);

        // Check if username exists (user field in admins table)
        if ($userModel->exists('user', $data['username'])) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['username' => ['Username already exists']]
            ], 422);
        }

        // Check if email exists
        if ($userModel->exists('email', $data['email'])) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['email' => ['Email already exists']]
            ], 422);
        }

        $userId = $userModel->createUser([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password'],
            'role_id' => $data['role_id'],
            'status' => $data['status'] ?? 'active'
        ]);

        return $this->json($response, [
            'success' => true,
            'message' => 'User created successfully',
            'user_id' => $userId
        ], 201);
    }

    public function edit(Request $request, Response $response, array $args): Response
    {
        $userId = (int) $args['id'];
        
        $userModel = new User($this->db);
        $user = $userModel->getUserWithRole($userId);

        if (!$user) {
            throw new \Slim\Exception\HttpNotFoundException($request);
        }

        $roleModel = new Role($this->db);
        $roles = $roleModel->all();
        return $this->render($response, 'users/edit.twig', [
            'pageTitle' => 'Edit User',
            'users' => $user,
            'roles' => $roles
        ], $request);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $userId = (int) $args['id'];
        $data = $this->getParsedBody($request);

        $errors = $this->validate($data, [
            'username' => 'required|min:3|max:50',
            'email' => 'required|email',
            'role_id' => 'required'
        ]);

        if (!empty($errors)) {
            return $this->json($response, [
                'success' => false,
                'errors' => $errors
            ], 422);
        }

        $userModel = new User($this->db);

        // Check if username exists (excluding current user) - user field in admins table
        if ($userModel->exists('user', $data['username'], $userId)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['username' => ['Username already exists']]
            ], 422);
        }

        // Check if email exists (excluding current user)
        if ($userModel->exists('email', $data['email'], $userId)) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['email' => ['Email already exists']]
            ], 422);
        }

        $updateData = [
            'username' => $data['username'],
            'email' => $data['email'],
            'role_id' => $data['role_id'],
            'status' => $data['status'] ?? 'active'
        ];

        if (!empty($data['password'])) {
            $updateData['password'] = $data['password'];
        }

        $userModel->updateUser($userId, $updateData);

        return $this->json($response, [
            'success' => true,
            'message' => 'User updated successfully'
        ]);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $userId = (int) $args['id'];

        // Prevent deleting own account
        if ($userId === $this->getAuthUserId()) {
            return $this->json($response, [
                'success' => false,
                'message' => 'You cannot delete your own account'
            ], 403);
        }

        $userModel = new User($this->db);
        $userModel->delete($userId);

        return $this->json($response, [
            'success' => true,
            'message' => 'User deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 20;

        $userModel = new User($this->db);
        $result = $userModel->getAllWithRoles($page, $perPage);

        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $userId = (int) $args['id'];
        
        $userModel = new User($this->db);
        $user = $userModel->getUserWithRole($userId);

        if (!$user) {
            return $this->json($response, [
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }

        return $this->json($response, $user);
    }
}
