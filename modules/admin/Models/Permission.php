<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class Permission extends BaseModel
{
    protected $table = 'permissions';

    public function __construct(DB $db)
    {
        parent::__construct($db);
    }

    public function findBySlug($slug)
    {
        return $this->db->get($this->table, '*', ['slug' => $slug]);
    }
}
