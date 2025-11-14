<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Role extends BaseModel
{
    protected $table = 'roles';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findBySlug($slug)
    {
        return $this->db->get($this->table, '*', ['slug' => $slug]);
    }

    public function getRoleWithPermissions($roleId)
    {
        $role = $this->find($roleId);
        if (!$role) {
            return null;
        }

        $permissions = $this->db->select('permissions', [
            '[>]role_permissions' => ['id' => 'permission_id']
        ], [
            'permissions.id',
            'permissions.slug',
            'permissions.description'
        ], [
            'role_permissions.role_id' => $roleId
        ]);

        $role['permissions'] = $permissions;
        return $role;
    }

    public function getAllWithPermissions()
    {
        $roles = $this->all();
        foreach ($roles as &$role) {
            $permissions = $this->db->select('permissions', [
                '[>]role_permissions' => ['id' => 'permission_id']
            ], [
                'permissions.id',
                'permissions.slug'
            ], [
                'role_permissions.role_id' => $role['id']
            ]);
            $role['permissions'] = $permissions;
        }
        return $roles;
    }

    public function assignPermission($roleId, $permissionId)
    {
        return $this->db->insert('role_permissions', [
            'role_id' => $roleId,
            'permission_id' => $permissionId
        ]);
    }

    public function removePermission($roleId, $permissionId)
    {
        return $this->db->delete('role_permissions', [
            'role_id' => $roleId,
            'permission_id' => $permissionId
        ]);
    }

    public function syncPermissions($roleId, $permissionIds)
    {
        // Remove all existing permissions
        $this->db->delete('role_permissions', ['role_id' => $roleId]);

        // Add new permissions
        foreach ($permissionIds as $permissionId) {
            $this->assignPermission($roleId, $permissionId);
        }

        return true;
    }
}
