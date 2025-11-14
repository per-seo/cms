<?php

namespace Modules\admin\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Modules\admin\Models\Media;
use Psr\Container\ContainerInterface;
use Odan\Session\SessionInterface;
use Slim\Views\Twig;
use Slim\App;

class MediaController extends BaseController
{
    private $uploadPath;
    private $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
    private $maxFileSize = 5242880; // 5MB

    public function __construct(App $app, ContainerInterface $container, SessionInterface $session, Twig $twig)
    {
        parent::__construct($app, $container, $session, $twig);
        $this->uploadPath = $container->get('settings_root') . '/public/uploads';
        
        if (!is_dir($this->uploadPath)) {
            mkdir($this->uploadPath, 0755, true);
        }
    }

    public function index(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 30;

        $mediaModel = new Media($this->db);
        $result = $mediaModel->getAllWithUploader($page, $perPage);

        return $this->render($response, 'media/index.twig', [
            'pageTitle' => 'Media Library',
            'media' => $result['data'],
            'pagination' => [
                'page' => $result['page'],
                'perPage' => $result['perPage'],
                'total' => $result['total'],
                'totalPages' => $result['totalPages']
            ]
        ], $request);
    }

    public function upload(Request $request, Response $response): Response
    {
        $uploadedFiles = $request->getUploadedFiles();
        
        if (!isset($uploadedFiles['file'])) {
            return $this->json($response, [
                'success' => false,
                'message' => 'No file uploaded'
            ], 400);
        }

        $uploadedFile = $uploadedFiles['file'];

        if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
            return $this->json($response, [
                'success' => false,
                'message' => 'Upload error'
            ], 400);
        }

        $mimeType = $uploadedFile->getClientMediaType();
        if (!in_array($mimeType, $this->allowedTypes)) {
            return $this->json($response, [
                'success' => false,
                'message' => 'File type not allowed'
            ], 400);
        }

        $fileSize = $uploadedFile->getSize();
        if ($fileSize > $this->maxFileSize) {
            return $this->json($response, [
                'success' => false,
                'message' => 'File size exceeds maximum allowed size'
            ], 400);
        }

        $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
        $filename = bin2hex(random_bytes(16)) . '.' . $extension;
        
        $yearMonth = date('Y/m');
        $targetPath = $this->uploadPath . '/' . $yearMonth;
        
        if (!is_dir($targetPath)) {
            mkdir($targetPath, 0755, true);
        }

        $uploadedFile->moveTo($targetPath . '/' . $filename);

        $fileData = [
            'filename' => $filename,
            'original_name' => $uploadedFile->getClientFilename(),
            'path' => '/uploads/' . $yearMonth . '/' . $filename,
            'mime_type' => $mimeType,
            'size' => $fileSize
        ];

        // Get image dimensions if it's an image
        if (strpos($mimeType, 'image/') === 0) {
            $imagePath = $targetPath . '/' . $filename;
            $imageInfo = getimagesize($imagePath);
            if ($imageInfo) {
                $fileData['width'] = $imageInfo[0];
                $fileData['height'] = $imageInfo[1];
            }
        }

        $mediaModel = new Media($this->db);
        $mediaId = $mediaModel->upload($fileData, $this->getAuthUserId());

        $media = $mediaModel->find($mediaId);

        return $this->json($response, [
            'success' => true,
            'message' => 'File uploaded successfully',
            'media' => $media
        ], 201);
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        $mediaId = (int) $args['id'];

        $mediaModel = new Media($this->db);
        $media = $mediaModel->find($mediaId);

        if (!$media) {
            return $this->json($response, [
                'success' => false,
                'message' => 'Media not found'
            ], 404);
        }

        // Delete physical file
        $filePath = $this->container->get('settings_root') . '/public' . $media['path'];
        if (file_exists($filePath)) {
            unlink($filePath);
        }

        $mediaModel->delete($mediaId);

        return $this->json($response, [
            'success' => true,
            'message' => 'Media deleted successfully'
        ]);
    }

    public function getAll(Request $request, Response $response): Response
    {
        $params = $this->getQueryParams($request);
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $perPage = isset($params['per_page']) ? (int) $params['per_page'] : 30;

        $mediaModel = new Media($this->db);
        $result = $mediaModel->getAllWithUploader($page, $perPage);

        return $this->json($response, $result);
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        $mediaId = (int) $args['id'];
        
        $mediaModel = new Media($this->db);
        $media = $mediaModel->find($mediaId);

        if (!$media) {
            return $this->json($response, [
                'success' => false,
                'message' => 'Media not found'
            ], 404);
        }

        return $this->json($response, $media);
    }
}
