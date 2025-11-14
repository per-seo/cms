<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Category extends BaseModel
{
    protected $table = 'categories';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findBySlug($slug)
    {
        return $this->db->get($this->table, '*', ['slug' => $slug]);
    }

    public function getChildren($parentId)
    {
        return $this->all('*', [
            'parent_id' => $parentId,
            'ORDER' => ['name' => 'ASC']
        ]);
    }

    public function getAllHierarchical()
    {
        $categories = $this->all('*', [
            'ORDER' => ['name' => 'ASC']
        ]);

        $tree = [];
        $lookup = [];

        foreach ($categories as $category) {
            $category['children'] = [];
            $lookup[$category['id']] = $category;
        }

        foreach ($lookup as $id => $category) {
            if ($category['parent_id'] === null) {
                $tree[] = &$lookup[$id];
            } else {
                if (isset($lookup[$category['parent_id']])) {
                    $lookup[$category['parent_id']]['children'][] = &$lookup[$id];
                }
            }
        }

        return $tree;
    }
}
