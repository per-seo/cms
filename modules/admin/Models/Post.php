<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Post extends BaseModel
{
    protected $table = 'posts';
    protected $langsTable = 'posts_langs';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findBySlug($slug, $language = 'en')
    {
        return $this->db->get($this->table, [
            '[>]' . $this->langsTable => ['id' => 'pid']
        ], [
            'posts.id',
            'posts.status',
            'posts.author_id',
            'posts.published_at',
            'posts.created_at',
            'posts.updated_at',
            'posts_langs.title',
            'posts_langs.slug',
            'posts_langs.content',
            'posts_langs.excerpt',
            'posts_langs.meta_title',
            'posts_langs.meta_description',
            'posts_langs.meta_keywords',
            'posts_langs.language'
        ], [
            'posts_langs.slug' => $slug,
            'posts_langs.language' => $language
        ]);
    }

    public function getPostWithAuthor($postId, $language = 'en')
    {
        $result = $this->db->get('posts', [
            '[>]admins' => ['author_id' => 'id'],
            '[>]posts_langs' => ['id' => 'pid']
        ], [
            'posts.id',
            'posts.status',
            'posts.author_id',
            'posts.featured_image',
            'posts.published_at',
            'posts.created_at',
            'posts.updated_at',
            'posts_langs.title',
            'posts_langs.slug',
            'posts_langs.content',
            'posts_langs.excerpt',
            'posts_langs.meta_title',
            'posts_langs.meta_description',
            'posts_langs.meta_keywords',
            'posts_langs.language',
            'admins.user(author_name)',
            'admins.email(author_email)'
        ], [
            'posts.id' => $postId,
            'posts_langs.language' => $language
        ]);
        
        // If no result for the requested language, try to get post with any language
        if (!$result) {
            $result = $this->db->get('posts', [
                '[>]admins' => ['author_id' => 'id']
            ], [
                'posts.id',
                'posts.status',
                'posts.author_id',
                'posts.featured_image',
                'posts.published_at',
                'posts.created_at',
                'posts.updated_at',
                'admins.user(author_name)',
                'admins.email(author_email)'
            ], [
                'posts.id' => $postId
            ]);
        }
        
        return $result;
    }

    public function getAllPostLangs($postId)
    {
        return $this->db->select($this->langsTable, '*', [
            'pid' => $postId
        ]);
    }

    public function slugExists($slug, $language = 'en', $excludePostId = null)
    {
        $where = [
            'slug' => $slug,
            'language' => $language
        ];
        
        if ($excludePostId) {
            $where['pid[!]'] = $excludePostId;
        }
        
        return $this->db->has($this->langsTable, $where);
    }

    public function getAllWithAuthor($page = 1, $perPage = 20, $where = [], $language = 'en')
    {
        $offset = ($page - 1) * $perPage;
        
        $whereConditions = array_merge($where, [
            'GROUP' => 'posts_langs.pid',
            'ORDER' => ['posts.created_at' => 'DESC'],
            'LIMIT' => [$offset, $perPage]
        ]);
        
        $data = $this->db->select($this->table, [
            '[>]admins' => ['author_id' => 'id'],
            '[>]' . $this->langsTable => ['id' => 'pid']
        ], [
            'posts.id',
            'posts.status',
            'posts.featured_image',
            'posts.published_at',
            'posts.created_at',
            'posts.updated_at',
            'posts_langs.title',
            'posts_langs.slug',
            'posts_langs.excerpt',
            'posts_langs.language',
            'admins.user(author_name)'
        ], $whereConditions);
        
        $total = $this->db->count($this->table, [
            '[>]' . $this->langsTable => ['id' => 'pid']
        ], 'posts.id', array_merge($where, [
            'posts_langs.language' => $language
        ]));
        
        return [
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'perPage' => $perPage,
            'totalPages' => ceil($total / $perPage)
        ];
    }

    public function getPublished($page = 1, $perPage = 10, $where = [])
    {
        $where['status'] = 'published';
        return $this->getAllWithAuthor($page, $perPage, $where);
    }

    public function getPostCategories($postId)
    {
        return $this->db->select('categories', [
            '[>]post_categories' => ['id' => 'category_id']
        ], [
            'categories.id',
            'categories.name',
            'categories.slug'
        ], [
            'post_categories.post_id' => $postId
        ]);
    }

    public function assignCategory($postId, $categoryId)
    {
        return $this->db->insert('post_categories', [
            'post_id' => $postId,
            'category_id' => $categoryId
        ]);
    }

    public function removeCategory($postId, $categoryId)
    {
        return $this->db->delete('post_categories', [
            'post_id' => $postId,
            'category_id' => $categoryId
        ]);
    }

    public function syncCategories($postId, $categoryIds)
    {
        // Remove all existing categories
        $this->db->delete('post_categories', ['post_id' => $postId]);

        // Add new categories
        foreach ($categoryIds as $categoryId) {
            $this->assignCategory($postId, $categoryId);
        }

        return true;
    }

    public function createPostWithLang($postData, $langData, $language = 'en')
    {
        // Insert into posts table
        $postId = $this->create($postData);
        
        if ($postId) {
            // Insert into posts_langs table
            $langData['pid'] = $postId;
            $langData['language'] = $language;
            $langData['id'] = $postId; // id in posts_langs matches pid
            
            $this->db->insert($this->langsTable, $langData);
        }
        
        return $postId;
    }

    public function updatePostWithLang($postId, $postData, $langData, $language = 'en')
    {
        // Update posts table
        if (!empty($postData)) {
            $this->update($postId, $postData);
        }
        
        // Update or insert language data
        $existingLang = $this->db->get($this->langsTable, '*', [
            'pid' => $postId,
            'language' => $language
        ]);
        
        if ($existingLang) {
            // Update existing language entry
            $this->db->update($this->langsTable, $langData, [
                'pid' => $postId,
                'language' => $language
            ]);
        } else {
            // Insert new language entry
            $langData['pid'] = $postId;
            $langData['id'] = $postId;
            $langData['language'] = $language;
            $this->db->insert($this->langsTable, $langData);
        }
        
        return true;
    }

    public function deletePost($postId)
    {
        // Delete from posts_langs (will cascade)
        $this->db->delete($this->langsTable, ['pid' => $postId]);
        
        // Delete from posts
        return $this->delete($postId);
    }
}
