<?php

namespace Modules\admin\Models;

use PerSeo\DB;

class BaseModel
{
    protected $db;
    protected $table;

    public function __construct(DB $db)
    {
        $this->db = $db;
    }

    public function find($id)
    {
        return $this->db->get($this->table, '*', ['id' => $id]);
    }

    public function findBy($column, $value)
    {
        return $this->db->get($this->table, '*', [$column => $value]);
    }

    public function all($columns = '*', $where = [])
    {
        return $this->db->select($this->table, $columns, $where);
    }

    public function paginate($page = 1, $perPage = 20, $columns = '*', $where = [])
    {
        $offset = ($page - 1) * $perPage;
        $data = $this->db->select($this->table, $columns, array_merge($where, [
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

    public function create($data)
    {
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        $this->db->insert($this->table, $data);
        return $this->db->id();
    }

    public function update($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        return $this->db->update($this->table, $data, ['id' => $id]);
    }

    public function delete($id)
    {
        return $this->db->delete($this->table, ['id' => $id]);
    }

    public function count($where = [])
    {
        return $this->db->count($this->table, $where);
    }

    public function exists($column, $value, $excludeId = null)
    {
        $where = [$column => $value];
        if ($excludeId) {
            $where['id[!]'] = $excludeId;
        }
        return $this->db->has($this->table, $where);
    }
}
