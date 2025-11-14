<?php

namespace Modules\admin\Models;

use Odan\Session\SessionInterface;
use PerSeo\DB;

class MLogin
{
	protected $db;
	protected $session;

	public function __construct(DB $database, SessionInterface $session)
	{
		$this->session = $session;
		$this->db = $database;
	}

	public function verify(string $user_email, string $pass)
	{
		try {
			if (empty($user_email) || empty($pass)) {
				throw new \Exception('MISSING_PARAMETERS', 001);
			}
			$login_info = $this->db->query("SELECT <admins.id> as id, <admins.ulid> as ulid, <admins.user> as user, <admins.pass> as pass, <admins.email> as email, CONCAT('[',perm.perms,']') as permissions FROM <admins>
INNER JOIN (SELECT <roles.id> as role_id, GROUP_CONCAT(JSON_OBJECT('id', <permissions.id>, 'slug', <permissions.slug>) ORDER BY <permissions.id> ASC) AS perms FROM <roles>
INNER JOIN <role_permissions> ON <roles.id> = <role_permissions.role_id>
INNER JOIN <permissions> ON <role_permissions.permission_id> = <permissions.id> GROUP BY <roles.id>) perm ON <admins.role_id> = perm.role_id WHERE <admins.status> = 1 AND (<admins.user> = :user OR <admins.email> = :email)", [
		":user" => $user_email,
		":email" => $user_email
	])->fetchAll(\PDO::FETCH_ASSOC);
				if (empty($login_info)) {
					throw new \Exception("USR_PASS_ERR", 004);
				}
				$error = isset($this->db->error) ? $this->db->error : null;
                if ($error != null) {
                    if (($error[1] != null) && ($error[2] != null)) {
                        throw new \Exception($error[2], 1);
                    }
                }
				if (password_verify($pass, $login_info[0]['pass'])) {
					$this->session->set('admin.login', true);
					$this->session->set('admin.id', (int) $login_info[0]['id']);
					$this->session->set('admin.ulid', (string) $login_info[0]['ulid']);
					$this->session->set('admin.user', (string) $login_info[0]['user']);
					$this->session->set('admin.permissions', (string) $login_info[0]['permissions']);
				} else {
					throw new \Exception("USR_PASS_ERR", 004);
				}

			$result = array(
				'success' => 1,
				'error' => 0,
				'code' => '0',
				'msg' => 'OK'
			);
		} catch (\Exception $e) {
			$result = array(
				'success' => 0,
				'error' => 1,
				'code' => $e->getCode(),
				'msg' => $e->getMessage()
			);
		}
		return json_encode($result);
	}
}