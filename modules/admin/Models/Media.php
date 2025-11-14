<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Media extends BaseModel
{
    protected $table = 'media';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function getAllWithUploader($page = 1, $perPage = 20, $where = [])
    {
        $offset = ($page - 1) * $perPage;
        
        $data = $this->db->select($this->table, [
            '[>]admins' => ['uploaded_by' => 'id']
        ], [
            'media.id',
            'media.filename',
            'media.original_name',
            'media.path',
            'media.mime_type',
            'media.size',
            'media.width',
            'media.height',
            'media.alt_text',
            'media.caption',
            'media.created_at',
            'admins.user(uploader_name)'
        ], array_merge($where, [
            'ORDER' => ['media.created_at' => 'DESC'],
            'LIMIT' => [$offset, $perPage]
        ]));
        
        $total = $this->db->count($this->table, $where);
        
        return [
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'perPage' => $perPage,
            'totalPages' => ceil($total / $perPage)
        ];
    }

    public function upload($fileData, $userId)
    {
        $data = [
            'filename' => $fileData['filename'],
            'original_name' => $fileData['original_name'],
            'path' => $fileData['path'],
            'mime_type' => $fileData['mime_type'],
            'size' => $fileData['size'],
            'uploaded_by' => $userId
        ];

        if (isset($fileData['width'])) {
            $data['width'] = $fileData['width'];
        }
        if (isset($fileData['height'])) {
            $data['height'] = $fileData['height'];
        }
        if (isset($fileData['alt_text'])) {
            $data['alt_text'] = $fileData['alt_text'];
        }
        if (isset($fileData['caption'])) {
            $data['caption'] = $fileData['caption'];
        }

        return $this->create($data);
    }
}
