<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class User extends BaseModel
{
    protected $table = 'admins';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findByUsername($username)
    {
        return $this->db->get($this->table, '*', ['user' => $username]);
    }

    public function findByEmail($email)
    {
        return $this->db->get($this->table, '*', ['email' => $email]);
    }

    public function getUserWithRole(int $userId)
    {
        return $this->db->get('admins', [
            '[>]roles' => ['role_id' => 'id']
        ], [
            'admins.id',
            'admins.user',
            'admins.email',
            'admins.ulid',
            'admins.status',
            'roles.id(role_id)',
            'roles.slug(role_slug)'
        ], [
            'admins.id' => $userId
        ]);
    }

    public function getAllWithRoles($page = 1, $perPage = 20, $where = [])
    {
        $offset = ($page - 1) * $perPage;
        
        $data = $this->db->select($this->table, [
            '[>]roles' => ['role_id' => 'id']
        ], [
            'admins.id',
            'admins.user',
            'admins.email',
            'admins.ulid',
            'admins.status',
            'roles.slug(role_slug)'
        ], array_merge($where, [
            'ORDER' => ['admins.id' => 'DESC'],
            'LIMIT' => [$offset, $perPage]
        ]));
        
        $total = $this->db->count($this->table, $where);
        
        return [
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'perPage' => $perPage,
            'totalPages' => ceil($total / $perPage)
        ];
    }

    public function createUser($data)
    {
        // Map username to user field
        if (isset($data['username'])) {
            $data['user'] = $data['username'];
            unset($data['username']);
        }
        
        // Map password to pass field
        if (isset($data['password'])) {
            $data['pass'] = password_hash($data['password'], PASSWORD_BCRYPT, ['cost' => 12]);
            unset($data['password']);
        }
        
        // Generate ulid if not provided
        if (!isset($data['ulid'])) {
            $data['ulid'] = rand(1000000, 9999999);
        }
        
        // Convert status to integer (1 = active, 0 = inactive)
        if (isset($data['status'])) {
            $data['status'] = ($data['status'] === 'active' || $data['status'] === 1) ? 1 : 0;
        } else {
            $data['status'] = 1;
        }
        
        // Remove fields that don't exist in admins table
        unset($data['first_name'], $data['last_name']);
        
        return $this->create($data);
    }

    public function updateUser($id, $data)
    {
        // Map username to user field
        if (isset($data['username'])) {
            $data['user'] = $data['username'];
            unset($data['username']);
        }
        
        // Map password to pass field
        if (isset($data['password']) && !empty($data['password'])) {
            $data['pass'] = password_hash($data['password'], PASSWORD_BCRYPT, ['cost' => 12]);
            unset($data['password']);
        } else {
            unset($data['password']);
        }
        
        // Convert status to integer
        if (isset($data['status'])) {
            $data['status'] = ($data['status'] === 'active' || $data['status'] === 1) ? 1 : 0;
        }
        
        // Remove fields that don't exist in admins table
        unset($data['first_name'], $data['last_name']);
        
        return $this->update($id, $data);
    }

    public function verifyPassword($username, $password)
    {
        $user = $this->findByUsername($username);
        if (!$user) {
            $user = $this->findByEmail($username);
        }
        
        if ($user && password_verify($password, $user['pass'])) {
            return $user;
        }
        
        return false;
    }

    public function updateLastLogin($userId)
    {
        // Admins table doesn't have last_login field
        // This functionality is handled by MLogin sessions
        return true;
    }

    public function getUserPermissions($userId)
    {
        $user = $this->find($userId);
        if (!$user) {
            return [];
        }

        return $this->db->select('permissions', [
            '[>]role_permissions' => ['id' => 'permission_id']
        ], [
            'permissions.slug'
        ], [
            'role_permissions.role_id' => $user['role_id']
        ]);
    }

    public function hasPermission($userId, $permissionSlug)
    {
        $permissions = $this->getUserPermissions($userId);
        foreach ($permissions as $permission) {
            if ($permission['slug'] === $permissionSlug) {
                return true;
            }
        }
        return false;
    }

    public function isAdmin($userId)
    {
        $user = $this->find($userId);
        return $user && $user['role_id'] == 1;
    }
}
