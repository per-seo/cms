<?php

namespace Modules\admin\Helpers;

use Odan\Session\SessionInterface;
use Modules\admin\Models\User;
use PerSeo\DB;

class AuthHelper
{
    private $session;
    private $db;

    public function __construct(SessionInterface $session, DB $db)
    {
        $this->session = $session;
        $this->db = $db;
    }

    public function login($user): void
    {
        $this->session->set('user', $user);
        $this->session->set('authenticated', true);
    }

    public function logout(): void
    {
        $this->session->destroy();
    }

    public function isAuthenticated(): bool
    {
        return $this->session->has('user') && $this->session->get('authenticated') === true;
    }

    public function getUser(): ?array
    {
        return $this->session->get('user');
    }

    public function getUserId(): ?int
    {
        $user = $this->getUser();
        return $user ? (int)$user['id'] : null;
    }

    public function hasPermission(string $permission): bool
    {
        if (!$this->isAuthenticated()) {
            return false;
        }

        $user = $this->getUser();
        $userModel = new User($this->db);
        
        return $userModel->hasPermission($user['id'], $permission);
    }

    public function isAdmin(): bool
    {
        if (!$this->isAuthenticated()) {
            return false;
        }

        $user = $this->getUser();
        return isset($user['role_id']) && $user['role_id'] == 1;
    }

    public function hasRole(string $roleSlug): bool
    {
        if (!$this->isAuthenticated()) {
            return false;
        }

        $user = $this->getUser();
        return isset($user['role_slug']) && $user['role_slug'] === $roleSlug;
    }
}
