<?php

namespace Modules\admin\Controllers;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Odan\Session\SessionInterface;
use Slim\Views\Twig;
use Slim\App;

class BaseController
{
    protected $app;
    protected $container;
    protected $twig;
    protected $db;
    protected $session;
    protected $settings;
    protected $template = 'admin';

    public function __construct(App $app, ContainerInterface $container, SessionInterface $session, Twig $twig)
    {
        $this->app = $app;
        $this->container = $container;
        $this->twig = $twig;
        $this->db = $container->get('db');
        $this->session = $session;
        $this->settings = $container->has('settings_global') ? $container->get('settings_global') : [];
    }

    protected function render(Response $response, string $template, array $data = [], Request $request = null): Response
    {
        $data['basepath'] = (string) $this->app->getBasePath();
		$data['adminpath'] = $this->settings['adminpath'];
        $data['template'] = $this->template;
        $data['user'] = $this->getAuthUser();
        $basepath = (string) $this->app->getBasePath();
        if ($request !== null) {
            $adminpath = $this->settings['adminpath'] ? ($this->settings['locale'] ? $request->getAttribute('language') .'/'. $this->settings['adminpath'] : $this->settings['adminpath']) : 'admin';
        } else {
            $adminpath = $this->settings['adminpath'] ?? 'admin';
        }
		$data['adminFullPath'] = $basepath . '/' . $adminpath;
        return $this->twig->render($response, $this->template . DIRECTORY_SEPARATOR . $template, $data);
    }
    
    protected function getAdminPath($request): string
    {
        $basepath = (string) $this->app->getBasePath();
        $adminpath = $this->settings['adminpath'] ? ($this->settings['locale'] ? $request->getAttribute('language') .'/'. $this->settings['adminpath'] : $this->settings['adminpath']) : 'admin';
        return $basepath . '/' . $adminpath;
    }

    protected function json(Response $response, $data, int $status = 200): Response
    {
        $response->getBody()->write(json_encode($data));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($status);
    }

    protected function redirect(Response $response, string $url): Response
    {
        return $response
            ->withHeader('Location', $url)
            ->withStatus(302);
    }

    protected function getAuthUser()
    {
        // Use MLogin session vars
        if (!$this->session->has('admin.login') || !$this->session->get('admin.login')) {
            return null;
        }
        
        return [
            'id' => $this->session->get('admin.id'),
            'username' => $this->session->get('admin.user'),
            'ulid' => $this->session->get('admin.ulid'),
            'permissions' => json_decode($this->session->get('admin.permissions'), true) ?? []
        ];
    }

    protected function getAuthUserId()
    {
        $user = $this->getAuthUser();
        return $user ? $user['id'] : null;
    }

    protected function isAuthenticated(): bool
    {
        return $this->session->has('admin.login') && $this->session->get('admin.login') === true;
    }

    protected function hasPermission(string $permission): bool
    {
        $user = $this->getAuthUser();
        if (!$user) {
            return false;
        }

        // Check permissions from session (set by MLogin)
        $permissionsJson = $this->session->get('admin.permissions');
        if ($permissionsJson) {
            $permissions = json_decode($permissionsJson, true) ?? [];
            foreach ($permissions as $perm) {
                if (isset($perm['slug']) && $perm['slug'] === $permission) {
                    return true;
                }
            }
        }

        return false;
    }

    protected function isAdmin(): bool
    {
        $user = $this->getAuthUser();
        if (!$user) {
            return false;
        }

        return isset($user['role_id']) && $user['role_id'] == 1;
    }

    protected function getQueryParams(Request $request): array
    {
        return $request->getQueryParams();
    }

    protected function getParsedBody(Request $request): array
    {
        return (array) $request->getParsedBody();
    }

    protected function validate(array $data, array $rules): array
    {
        $errors = [];

        foreach ($rules as $field => $ruleString) {
            $ruleList = explode('|', $ruleString);
            
            foreach ($ruleList as $rule) {
                if ($rule === 'required' && (!isset($data[$field]) || empty($data[$field]))) {
                    $errors[$field][] = ucfirst($field) . ' is required';
                }

                if (strpos($rule, 'min:') === 0 && isset($data[$field])) {
                    $min = (int) substr($rule, 4);
                    if (strlen($data[$field]) < $min) {
                        $errors[$field][] = ucfirst($field) . " must be at least {$min} characters";
                    }
                }

                if (strpos($rule, 'max:') === 0 && isset($data[$field])) {
                    $max = (int) substr($rule, 4);
                    if (strlen($data[$field]) > $max) {
                        $errors[$field][] = ucfirst($field) . " must not exceed {$max} characters";
                    }
                }

                if ($rule === 'email' && isset($data[$field]) && !filter_var($data[$field], FILTER_VALIDATE_EMAIL)) {
                    $errors[$field][] = ucfirst($field) . ' must be a valid email';
                }

                if ($rule === 'unique' && isset($data[$field])) {
                    // This would need additional context for table/column
                    // Implement in child controllers as needed
                }
            }
        }

        return $errors;
    }
}
