<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Role;
use Modules\admin\Models\Permission;

class RoleController extends BaseController
{
    public function index(Request $request, Response $response): Response
    {
        $roleModel = new Role($this->db);
        
        $page = (int) ($request->getQueryParams()['page'] ?? 1);
        $perPage = (int) ($request->getQueryParams()['per_page'] ?? 10);
        $search = $request->getQueryParams()['search'] ?? '';
        
        $where = $search ? ['name[~]' => $search] : [];
        $result = $roleModel->paginate($page, $perPage, '*', $where);
        
        // Attach permissions count for each role
        foreach ($result['data'] as &$role) {
            $permissions = $this->db->select('role_permissions', '*', ['role_id' => $role['id']]);
            $role['permissions_count'] = count($permissions);
        }
        
        return $this->render($response, 'roles/index.twig', [
            'pageTitle' => 'Roles',
            'roles' => $result['data'],
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
        $permissionModel = new Permission($this->db);
        $permissions = $permissionModel->all();
        
        return $this->render($response, 'roles/create.twig', [
            'pageTitle' => 'Create Role',
            'permissions' => $permissions,
            'adminFullPath' => $this->getAdminPath($request)
        ], $request);
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->getParsedBody($request);
        
        // Validate
        $errors = $this->validate($data, [
            'name' => 'required|min:2|max:50',
            'slug' => 'required|min:2|max:50'
        ]);
        
        if (!empty($errors)) {
            return $this->json($response, ['success' => false, 'errors' => $errors], 422);
        }
        
        $roleModel = new Role($this->db);
        
        // Check if slug already exists
        $existing = $roleModel->findBySlug($data['slug']);
        if ($existing) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists']]
            ], 422);
        }
        
        // Create role
        $roleId = $roleModel->create([
            'name' => $data['name'],
            'slug' => $data['slug'],
            'description' => $data['description'] ?? null
        ]);
        
        // Assign permissions
        if (isset($data['permissions']) && is_array($data['permissions'])) {
            $roleModel->syncPermissions($roleId, $data['permissions']);
        }
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Role created successfully',
            'id' => $roleId
        ]);
    }

    public function edit(Request $request, Response $response, array $args): Response
    {
        $roleModel = new Role($this->db);
        $permissionModel = new Permission($this->db);
        
        $role = $roleModel->getRoleWithPermissions($args['id']);
        
        if (!$role) {
            return $this->render($response, 'errors/404.twig', [], 404);
        }
        
        $allPermissions = $permissionModel->all();
        $rolePermissionIds = array_column($role['permissions'], 'id');
        
        return $this->render($response, 'roles/edit.twig', [
            'pageTitle' => 'Edit Role',
            'role' => $role,
            'permissions' => $allPermissions,
            'rolePermissionIds' => $rolePermissionIds,
            'adminFullPath' => $this->getAdminPath($request)
        ], $request);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $data = $this->getParsedBody($request);
        
        // Validate
        $errors = $this->validate($data, [
            'name' => 'required|min:2|max:50',
            'slug' => 'required|min:2|max:50'
        ]);
        
        if (!empty($errors)) {
            return $this->json($response, ['success' => false, 'errors' => $errors], 422);
        }
        
        $roleModel = new Role($this->db);
        $role = $roleModel->find($args['id']);
        
        if (!$role) {
            return $this->json($response, ['success' => false, 'message' => 'Role not found'], 404);
        }
        
        // Check if slug already exists (except for current role)
        $existing = $roleModel->findBySlug($data['slug']);
        if ($existing && $existing['id'] != $args['id']) {
            return $this->json($response, [
                'success' => false,
                'errors' => ['slug' => ['Slug already exists']]
            ], 422);
        }
        
        // Update role
        $roleModel->update($args['id'], [
            'name' => $data['name'],
            'slug' => $data['slug'],
            'description' => $data['description'] ?? null
        ]);
        
        // Sync permissions
        if (isset($data['permissions']) && is_array($data['permissions'])) {
            $roleModel->syncPermissions($args['id'], $data['permissions']);
        } else {
            $roleModel->syncPermissions($args['id'], []);
        }
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Role updated successfully'
        ]);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $roleModel = new Role($this->db);
        $role = $roleModel->find($args['id']);
        
        if (!$role) {
            return $this->json($response, ['success' => false, 'message' => 'Role not found'], 404);
        }
        
        // Prevent deleting admin role
        if ($role['slug'] === 'admin') {
            return $this->json($response, [
                'success' => false,
                'message' => 'Cannot delete admin role'
            ], 403);
        }
        
        // Check if role has users
        $userCount = $this->db->count('admins', ['role_id' => $args['id']]);
        if ($userCount > 0) {
            return $this->json($response, [
                'success' => false,
                'message' => "Cannot delete role with {$userCount} assigned users"
            ], 403);
        }
        
        $roleModel->delete($args['id']);
        
        return $this->json($response, [
            'success' => true,
            'message' => 'Role deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $roleModel = new Role($this->db);
        
        $page = (int) ($request->getQueryParams()['page'] ?? 1);
        $perPage = (int) ($request->getQueryParams()['per_page'] ?? 10);
        $search = $request->getQueryParams()['search'] ?? '';
        
        $where = $search ? ['name[~]' => $search] : [];
        $result = $roleModel->paginate($page, $perPage, '*', $where);
        
        // Attach permissions count for each role
        foreach ($result['data'] as &$role) {
            $permissions = $this->db->select('role_permissions', '*', ['role_id' => $role['id']]);
            $role['permissions_count'] = count($permissions);
        }
        
        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $roleModel = new Role($this->db);
        $role = $roleModel->getRoleWithPermissions($args['id']);
        
        if (!$role) {
            return $this->json($response, ['success' => false, 'message' => 'Role not found'], 404);
        }
        
        return $this->json($response, ['success' => true, 'data' => $role]);
    }
}
