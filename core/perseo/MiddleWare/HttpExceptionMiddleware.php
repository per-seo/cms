<?php

namespace PerSeo\MiddleWare;

use Slim\App;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Exception\HttpException;
use Slim\Views\Twig;
use Psr\Container\ContainerInterface;

final class HttpExceptionMiddleware implements MiddlewareInterface
{
    /**
     * @var ResponseFactoryInterface
     */
    private $app;
    private $responseFactory;
    private $twig;
    private $settings;
    private $template;

    public function __construct(App $app, ResponseFactoryInterface $responseFactory, ContainerInterface $container, Twig $twig)
    {
        $this->app = $app;
        $this->responseFactory = $responseFactory;
        $this->twig = $twig;
        $this->settings = ($container->has('settings_global') ? $container->get('settings_global') : ['template' => 'default']);
        $this->template = $this->settings['template'];
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        try {
            return $handler->handle($request);
        } catch (HttpException $httpException) {
            $statusCode = $httpException->getCode();
            $response = $this->responseFactory->createResponse()->withStatus($statusCode);
            $errorMessage = sprintf('%s %s', $statusCode, $response->getReasonPhrase());
            $viewData = [
                'basepath' => (string) $this->app->getBasePath(),
                'template' => $this->template
            ];
            return $this->twig->render($response, $this->template . DIRECTORY_SEPARATOR .'404.twig', $viewData);
        }
    }
}
