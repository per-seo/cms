<?php

namespace Modules\admin\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\MiddlewareInterface as Middleware;
use Psr\Container\ContainerInterface;
use Slim\App;
use Slim\Psr7\Response as SlimResponse;
use Modules\admin\Helpers\JWTHelper;

class AuthMiddleware implements Middleware
{
    protected $app;
    protected $container;
    protected $session;
    protected $settings;
    protected $db;
    protected $settingcookie;

    public function __construct(App $app, ContainerInterface $container)
    {
        $this->app = $app;
        $this->container = $container;
        $this->session = $container->get(\Odan\Session\SessionInterface::class);
        $this->settings = $container->get('settings_global');
        $this->db = $container->get('db');
        $this->settingcookie = $container->get('settings_cookie');
    }

    public function process(Request $request, RequestHandler $handler): Response
    {
        $uri = $request->getUri()->getPath();
        $basepath = (string) $this->app->getBasePath();
        if ($this->settings['locale']) {
            $basepath = $basepath .'/'. $request->getAttribute('locale');
        }
        // Remove basepath from URI
        $path = substr($uri, strlen($basepath));
        
        // Allow login page and auth endpoints
        if (strpos($path, '/'. $this->settings['adminpath'] .'/login') === 0 || strpos($path, '/'. $this->settings['adminpath'] .'/auth') === 0) {
            return $handler->handle($request);
        }

        // Check if session is not set but JWT cookie exists - restore session from JWT
        if (!$this->session->has('admin.login') || !$this->session->get('admin.login')) {
            // Try to restore session from JWT
            $settings = $this->container->has('settings_secure') ? $this->container->get('settings_secure') : [];
            $jwtHelper = new JWTHelper($settings);
            $token = $jwtHelper->extractTokenFromRequest($request, $this->settingcookie['admin']);
            
            if ($token) {
                $userData = $jwtHelper->getUserFromToken($token);
                
                if ($userData && !empty($userData['ulid'])) {
                    // JWT is valid, restore session from database using ulid
                    $adminData = $this->db->query("SELECT <admins.id> as id, <admins.ulid> as ulid, <admins.user> as user, <admins.pass> as pass, <admins.email> as email, CONCAT('[',perm.perms,']') as permissions FROM <admins>
                        INNER JOIN (SELECT <roles.id> as role_id, GROUP_CONCAT(JSON_OBJECT('id', <permissions.id>, 'slug', <permissions.slug>) ORDER BY <permissions.id> ASC) AS perms FROM <roles>
                        INNER JOIN <role_permissions> ON <roles.id> = <role_permissions.role_id>
                        INNER JOIN <permissions> ON <role_permissions.permission_id> = <permissions.id> GROUP BY <roles.id>) perm ON <admins.role_id> = perm.role_id WHERE <admins.status> = 1 AND <admins.ulid> = :ulid", [
                        ':ulid' => $userData['ulid']
                    ])->fetchAll(\PDO::FETCH_ASSOC);

                    if (!empty($adminData)) {
                        $this->session->set('admin.login', true);
                        $this->session->set('admin.id', (int) $adminData[0]['id']);
                        $this->session->set('admin.ulid', (string) $adminData[0]['ulid']);
                        $this->session->set('admin.user', (string) $adminData[0]['user']);
                        $this->session->set('admin.permissions', (string) ($adminData[0]['permissions'] ?? '[]'));
                    }
                }
            }
        }

        // Check if user is authenticated using MLogin session vars
        // MLogin sets: admin.login, admin.id, admin.ulid, admin.user, admin.permissions
        if (!$this->session->has('admin.login') || $this->session->get('admin.login') !== true) {
            $response = new SlimResponse();
            
            // For AJAX requests, return JSON
            if ($request->getHeaderLine('X-Requested-With') === 'XMLHttpRequest' 
                || $request->getHeaderLine('Accept') === 'application/json') {
                $response->getBody()->write(json_encode([
                    'success' => false,
                    'message' => 'Unauthorized',
                    'redirect' => $basepath . '/'. $this->settings['adminpath'] .'/login'
                ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
            }
            
            // For regular requests, redirect to login
            return $response
                ->withHeader('Location', $basepath . '/'. $this->settings['adminpath'] .'/login')
                ->withStatus(302);
        }

        return $handler->handle($request);
    }
}
