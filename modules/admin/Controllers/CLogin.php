<?php

namespace Modules\admin\Controllers;

use Slim\App;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Odan\Session\SessionInterface;
use Modules\admin\Models\MLogin;
use Modules\admin\Helpers\JWTHelper;
use Slim\Psr7\Cookies;

class CLogin
{
	protected $session;
	protected $login;
	protected $app;
	protected $container;
	protected $settingcookie;
	protected $settings;
	
	public function __construct(App $app, ContainerInterface $container, SessionInterface $session)
	{
		$this->app = $app;
		$this->container = $container;
	    $this->session = $session;
		$this->login = new MLogin($container->get('db'), $session);
		$this->settingcookie = $container->get('settings_cookie');
		$this->settings = $container->has('settings_global') ? $container->get('settings_global') : [];
	}
	
	public function __invoke(Request $request, Response $response): Response
	{
		$post = $request->getParsedBody();
		$username = (string) (!empty($post['username']) ? trim($post['username']) : '');
		$password = (string) (!empty($post['password']) ? trim($post['password']) : '');
		
		// Verify credentials using MLogin
		$result = $this->login->verify($username, $password);
		$resultData = json_decode($result, true);
		
		// If login successful, generate JWT and set cookie
		if ($resultData['success']) {
			// Get session data set by MLogin
			$userId = $this->session->get('admin.id');
			$ulid = $this->session->get('admin.ulid');
			$permissionsJson = $this->session->get('admin.permissions');
			
			// Parse permissions JSON to array
			$permissions = json_decode($permissionsJson, true) ?? [];
			$permissionSlugs = array_column($permissions, 'slug');
			
			// Generate JWT token with ulid and permissions
			$secureSettings = $this->container->has('settings_secure') ? $this->container->get('settings_secure') : [];
			$jwtHelper = new JWTHelper($secureSettings);
			$token = $jwtHelper->generateToken([
				'ulid' => $ulid,
				'permissions' => $permissionSlugs
			]);
			
			// Set JWT cookie using Slim PSR-7 Cookies
			$cookies = new Cookies();
			$cookies->set($this->settingcookie['admin'], [
				'value' => $token,
				'expires' => time() + $this->settingcookie['cookie_exp'],
				'path' => $this->settingcookie['cookie_path'],
				'secure' => $this->settingcookie['cookie_secure'],
				'httponly' => $this->settingcookie['cookie_http'],
				'samesite' => $this->settingcookie['cookie_samesite']
			]);
			
			// Apply cookies to response
			foreach ($cookies->toHeaders() as $header) {
				$response = $response->withAddedHeader('Set-Cookie', $header);
			}
			
			// Add redirect URL to response
			$basepath = (string) $this->app->getBasePath();
			$adminpath = $this->settings['adminpath'] ? ($this->settings['locale'] ? $request->getAttribute('language') .'/'. $this->settings['adminpath'] : $this->settings['adminpath']) : 'admin';
			$resultData['redirect'] = $basepath . '/' . $adminpath;
		}
		
		$response->getBody()->write(json_encode($resultData));
		return $response->withHeader('Content-Type', 'application/json');
	}
}