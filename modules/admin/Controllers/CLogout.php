<?php

namespace Modules\admin\Controllers;

use Slim\App;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Odan\Session\SessionInterface;
use Slim\Psr7\Cookies;

class CLogout
{
	protected $session;
	protected $app;
	protected $settingcookie;
	
	public function __construct(App $app, ContainerInterface $container, SessionInterface $session)
	{
		$this->app = $app;
	    $this->session = $session;
		$this->settingcookie = $container->get('settings_cookie');
	}
	
	public function __invoke(Request $request, Response $response): Response
	{
		// Clear all admin session variables set by MLogin
		$this->session->delete('admin.login');
		$this->session->delete('admin.id');
		$this->session->delete('admin.ulid');
		$this->session->delete('admin.user');
		$this->session->delete('admin.permissions');
		
		// Destroy the entire session
		$this->session->destroy();
		
		// Clear JWT cookie using Slim PSR-7 Cookies
		$cookies = new Cookies();
		$cookies->set($this->settingcookie['admin'], [
			'value' => '',
			'expires' => time() - 3600, // Expire in the past
			'path' => $this->settingcookie['cookie_path']
		]);
		
		// Apply cookie deletion to response
		foreach ($cookies->toHeaders() as $header) {
			$response = $response->withAddedHeader('Set-Cookie', $header);
		}
		
		// Redirect to login page
		$basepath = (string) $this->app->getBasePath();
		return $response
			->withHeader('Location', $basepath . '/admin/login')
			->withStatus(302);
	}
}
