<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class LoginViewController extends BaseController
{
    public function showLogin(Request $request, Response $response): Response
    {
        // If already authenticated via MLogin session, redirect to dashboard
        if ($this->isAuthenticated()) {
            return $this->redirect($response, $this->app->getBasePath() . '/admin/dashboard');
        }

        return $this->render($response, 'login.twig', [
            'pageTitle' => 'Login'
        ]);
    }

    public function checkAuth(Request $request, Response $response): Response
    {
        return $this->json($response, [
            'authenticated' => $this->isAuthenticated(),
            'user' => $this->getAuthUser()
        ]);
    }
}
