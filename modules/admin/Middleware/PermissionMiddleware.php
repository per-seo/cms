<?php

namespace Modules\admin\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\MiddlewareInterface as Middleware;
use Psr\Container\ContainerInterface;
use Slim\App;
use Slim\Psr7\Response as SlimResponse;

class PermissionMiddleware implements Middleware
{
    protected $app;
    protected $container;
    protected $session;
    protected $permission;

    public function __construct(App $app, ContainerInterface $container, string $permission)
    {
        $this->app = $app;
        $this->container = $container;
        $this->session = $container->get(\Odan\Session\SessionInterface::class);
        $this->permission = $permission;
    }

    public function process(Request $request, RequestHandler $handler): Response
    {
        // Check if user is authenticated using MLogin session vars
        if (!$this->session->has('admin.login') || $this->session->get('admin.login') !== true) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Unauthorized'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }

        // Get permissions from MLogin session
        // MLogin sets admin.permissions as JSON string: '[{"id":1,"slug":"manage_users"},{"id":2,"slug":"edit_posts"}]'
        $permissionsJson = $this->session->get('admin.permissions');
        
        if (!$permissionsJson) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Forbidden: No permissions assigned'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(403);
        }

        // Parse permissions JSON
        $permissions = json_decode($permissionsJson, true) ?? [];
        
        // Check if user has the required permission
        $hasPermission = false;
        foreach ($permissions as $perm) {
            if (isset($perm['slug']) && $perm['slug'] === $this->permission) {
                $hasPermission = true;
                break;
            }
        }

        if (!$hasPermission) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Forbidden: You do not have permission to access this resource'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(403);
        }

        return $handler->handle($request);
    }
}
