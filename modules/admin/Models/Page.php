<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Page extends BaseModel
{
    protected $table = 'pages';
    protected $langsTable = 'pages_langs';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findBySlug($slug, $language = 'en')
    {
        return $this->db->get('pages', [
            '[>]pages_langs' => ['id' => 'pid']
        ], [
            'pages.id',
            'pages.status',
            'pages.author_id',
            'pages.parent_id',
            'pages.template',
            'pages.order',
            'pages.published_at',
            'pages.created_at',
            'pages.updated_at',
            'pages_langs.title',
            'pages_langs.slug',
            'pages_langs.content',
            'pages_langs.excerpt',
            'pages_langs.meta_title',
            'pages_langs.meta_description',
            'pages_langs.meta_keywords',
            'pages_langs.language'
        ], [
            'pages_langs.slug' => $slug,
            'pages_langs.language' => $language
        ]);
    }

    public function getPageWithAuthor($pageId, $language = 'en')
    {
        $result = $this->db->get('pages', [
            '[>]admins' => ['author_id' => 'id'],
            '[>]pages_langs' => ['id' => 'pid']
        ], [
            'pages.id',
            'pages.status',
            'pages.author_id',
            'pages.parent_id',
            'pages.template',
            'pages.order',
            'pages.published_at',
            'pages.created_at',
            'pages.updated_at',
            'pages_langs.title',
            'pages_langs.slug',
            'pages_langs.content',
            'pages_langs.excerpt',
            'pages_langs.meta_title',
            'pages_langs.meta_description',
            'pages_langs.meta_keywords',
            'pages_langs.language',
            'admins.user(author_name)',
            'admins.email(author_email)'
        ], [
            'pages.id' => $pageId,
            'pages_langs.language' => $language
        ]);
        
        // If no language version exists, get page data without language fields
        if (!$result) {
            $result = $this->db->get('pages', [
                '[>]admins' => ['author_id' => 'id']
            ], [
                'pages.id',
                'pages.status',
                'pages.author_id',
                'pages.parent_id',
                'pages.template',
                'pages.order',
                'pages.published_at',
                'pages.created_at',
                'pages.updated_at',
                'admins.user(author_name)',
                'admins.email(author_email)'
            ], [
                'pages.id' => $pageId
            ]);
            
            if ($result) {
                // Add empty language fields
                $result['title'] = '';
                $result['slug'] = '';
                $result['content'] = '';
                $result['excerpt'] = '';
                $result['meta_title'] = '';
                $result['meta_description'] = '';
                $result['meta_keywords'] = '';
                $result['language'] = $language;
            }
        }
        
        return $result;
    }

    public function getAllPageLangs($pageId)
    {
        return $this->db->select($this->langsTable, '*', [
            'pid' => $pageId
        ]);
    }

    public function getAllWithAuthor($page = 1, $perPage = 20, $where = [])
    {
        $offset = ($page - 1) * $perPage;
        
        $whereConditions = array_merge($where, [
            'GROUP' => 'pages_langs.pid',
            'ORDER' => ['pages.order' => 'ASC', 'pages.created_at' => 'DESC'],
            'LIMIT' => [$offset, $perPage]
        ]);
        
        $data = $this->db->select('pages', [
            '[>]admins' => ['author_id' => 'id'],
            '[>]pages_langs' => ['id' => 'pid']
        ], [
            'pages.id',
            'pages.status',
            'pages.template',
            'pages.published_at',
            'pages.created_at',
            'pages.updated_at',
            'pages_langs.title',
            'pages_langs.slug',
            'pages_langs.excerpt',
            'pages_langs.language',
            'admins.user(author_name)'
        ], $whereConditions);
        
        $total = $this->db->count('pages', [
            '[>]pages_langs' => ['id' => 'pid']
        ], 'pages.id');
        
        return [
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'perPage' => $perPage,
            'totalPages' => ceil($total / $perPage)
        ];
    }

    public function getPublished($where = [])
    {
        $where['status'] = 'published';
        $where['ORDER'] = ['order' => 'ASC'];
        return $this->all('*', $where);
    }

    public function getChildren($parentId)
    {
        return $this->all('*', [
            'parent_id' => $parentId,
            'ORDER' => ['order' => 'ASC']
        ]);
    }

    public function updateOrder($pageId, $order)
    {
        return $this->db->update($this->table, [
            'order' => $order
        ], [
            'id' => $pageId
        ]);
    }

    public function createPageWithLang($pageData, $langData, $language = 'en')
    {
        // Insert into pages table
        $pageId = $this->create($pageData);
        
        if ($pageId) {
            // Insert into pages_langs table
            $langData['pid'] = $pageId;
            $langData['language'] = $language;
            $langData['id'] = $pageId; // id in pages_langs matches pid
            
            $this->db->insert($this->langsTable, $langData);
        }
        
        return $pageId;
    }

    public function updatePageWithLang($pageId, $pageData, $langData, $language = 'en')
    {
        // Update pages table
        if (!empty($pageData)) {
            $this->update($pageId, $pageData);
        }
        
        // Update or insert pages_langs table
        $existingLang = $this->db->get($this->langsTable, '*', [
            'pid' => $pageId,
            'language' => $language
        ]);
        
        if ($existingLang) {
            $this->db->update($this->langsTable, $langData, [
                'pid' => $pageId,
                'language' => $language
            ]);
        } else {
            $langData['pid'] = $pageId;
            $langData['language'] = $language;
            $langData['id'] = $pageId;
            $this->db->insert($this->langsTable, $langData);
        }
        
        return true;
    }

    public function deletePage($pageId)
    {
        // Delete from pages_langs first (due to foreign key)
        $this->db->delete($this->langsTable, ['pid' => $pageId]);
        
        // Delete from pages table
        return $this->delete($pageId);
    }

    public function slugExists($slug, $language = 'en', $excludeId = null)
    {
        $where = [
            'slug' => $slug,
            'language' => $language
        ];
        
        if ($excludeId) {
            $where['pid[!]'] = $excludeId;
        }
        
        return $this->db->has($this->langsTable, $where);
    }
}
