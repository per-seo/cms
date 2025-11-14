<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Permission;

class PermissionController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $permissionModel = new Permission($this->db);
        
        $page = (int) ($request->getQueryParams()['page'] ?? 1);
        $perPage = (int) ($request->getQueryParams()['per_page'] ?? 10);
        $search = $request->getQueryParams()['search'] ?? '';
        
        $where = $search ? ['slug[~]' => $search] : [];
        $result = $permissionModel->paginate($page, $perPage, '*', $where);
        
        // Count roles for each permission
        foreach ($result['data'] as &$permission) {
            $roles = $this->db->select('role_permissions', '*', ['permission_id' => $permission['id']]);
            $permission['roles_count'] = count($roles);
        }
        
        return $this->render($response, 'permissions/index.twig', [
            'pageTitle' => 'Permissions',
            'permissions' => $result['data'],
            'pagination' => [
                'page' => $result['page'],
                'perPage' => $result['perPage'],
                'total' => $result['total'],
                'totalPages' => $result['totalPages']
            ],
            'adminFullPath' => $this->getAdminPath($request)
        ], $request);
    }

    public function create(Request $request, Response $response): Response
    {
        return $this->render($response, 'permissions/create.twig', [
            'pageTitle' => 'Create Permission',
            'adminFullPath' => $this->getAdminPath($request)
        ], $request);
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->getParsedBody($request);
        
        // Validate
        $errors = $this->validate($data, [
            'slug' => 'required|min:2|max:100'
        ]);
        
        if (!empty($errors)) {
            return $this->json($response, ['success' => false, 'errors' => $errors], 422);
        }
        
        $permissionModel = new Permission($this->db);
        
        // Check if slug already exists
        $existing = $permissionModel->findBySlug($data['slug']);
        if ($existing) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists']]
            ], 422);
        }
        
        // Create permission
        $permissionId = $permissionModel->create([
            'slug' => $data['slug'],
            'description' => $data['description'] ?? null
        ]);
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Permission created successfully',
            'id' => $permissionId
        ]);
    }

    public function edit(Request $request, Response $response, array $args): Response
    {
        $permissionModel = new Permission($this->db);
        $permission = $permissionModel->find($args['id']);
        
        if (!$permission) {
            return $this->render($response, 'errors/404.twig', [], 404);
        }
        
        return $this->render($response, 'permissions/edit.twig', [
            'pageTitle' => 'Edit Permission',
            'permission' => $permission,
            'adminFullPath' => $this->getAdminPath($request)
        ], $request);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $data = $this->getParsedBody($request);
        
        // Validate
        $errors = $this->validate($data, [
            'slug' => 'required|min:2|max:100'
        ]);
        
        if (!empty($errors)) {
            return $this->json($response, ['success' => false, 'errors' => $errors], 422);
        }
        
        $permissionModel = new Permission($this->db);
        $permission = $permissionModel->find($args['id']);
        
        if (!$permission) {
            return $this->json($response, ['success' => false, 'message' => 'Permission not found'], 404);
        }
        
        // Check if slug already exists (except for current permission)
        $existing = $permissionModel->findBySlug($data['slug']);
        if ($existing && $existing['id'] != $args['id']) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists']]
            ], 422);
        }
        
        // Update permission
        $permissionModel->update($args['id'], [
            'slug' => $data['slug'],
            'description' => $data['description'] ?? null
        ]);
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Permission updated successfully'
        ]);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $permissionModel = new Permission($this->db);
        $permission = $permissionModel->find($args['id']);
        
        if (!$permission) {
            return $this->json($response, ['success' => false, 'message' => 'Permission not found'], 404);
        }
        
        // Check if permission is assigned to any roles
        $roleCount = $this->db->count('role_permissions', ['permission_id' => $args['id']]);
        if ($roleCount > 0) {
            return $this->json($response, [
                'success' => false,
                'message' => "Cannot delete permission assigned to {$roleCount} roles"
            ], 403);
        }
        
        $permissionModel->delete($args['id']);
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Permission deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $permissionModel = new Permission($this->db);
        
        $page = (int) ($request->getQueryParams()['page'] ?? 1);
        $perPage = (int) ($request->getQueryParams()['per_page'] ?? 10);
        $search = $request->getQueryParams()['search'] ?? '';
        
        $where = $search ? ['slug[~]' => $search] : [];
        $result = $permissionModel->paginate($page, $perPage, '*', $where);
        
        // Count roles for each permission
        foreach ($result['data'] as &$permission) {
            $roles = $this->db->select('role_permissions', '*', ['permission_id' => $permission['id']]);
            $permission['roles_count'] = count($roles);
        }
        
        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $permissionModel = new Permission($this->db);
        $permission = $permissionModel->find($args['id']);
        
        if (!$permission) {
            return $this->json($response, ['success' => false, 'message' => 'Permission not found'], 404);
        }
        
        return $this->json($response, ['success' => true, 'data' => $permission]);
    }
}
