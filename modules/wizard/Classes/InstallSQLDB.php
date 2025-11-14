<?php

namespace Modules\wizard\Classes;

use Exception;
use PerSeo\DB;

class InstallSQLDB
{
	protected string $fileconf;
	
	public function __construct(string $fileconf)
    {
		$this->fileconf = $fileconf;
    }
		
	public function createDB(string $driver, string $dbhost, string $dbname, string $dbuser, string $dbpass, string $prefix, string $charset, string $collation, int $dbport = 3306, string $admin, string $email, string $password): string {
		try {
			$configfile = (file_exists($this->fileconf) ? $this->fileconf : '');  
			$content = file_get_contents($configfile);
			$dbSettings = <<<PHP
			],
				'settings_db' => [
					'default' => [
					'type' => '$driver',
					'host' => '$dbhost',
					'database' => '$dbname',
					'username' => '$dbuser',
					'password' => '$dbpass',
					'prefix' => '$prefix',
					'charset' => '$charset',
					'collation' => '$collation',
					'port' => $dbport
					]\n\t
			PHP;
            $db = new DB([
                'database_type' => $driver,
                'database_name' => $dbname,
                'server' => $dbhost,
                'username' => $dbuser,
                'password' => $dbpass,
                'prefix' => $prefix,
                'charset' => $charset,
				'collation' => $collation
            ]);
			$db->query("DROP FUNCTION IF EXISTS ULID");
			$db->query("CREATE FUNCTION `ULID`() RETURNS char(26) CHARSET $charset COLLATE $collation
			DETERMINISTIC
			BEGIN
					DECLARE s_hex CHAR(32);
					DECLARE b BINARY(16);
					SET b = CONCAT(UNHEX(CONV(ROUND(UNIX_TIMESTAMP(CURTIME(4))*1000), 10, 16)), RANDOM_BYTES(10));
					SET s_hex = LPAD(HEX(b), 32, '0');
					RETURN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT(LPAD(CONV(SUBSTRING(s_hex, 1, 2), 16, 32), 2, '0'), LPAD(CONV(SUBSTRING(s_hex, 3, 15), 16, 32), 12, '0'), LPAD(CONV(SUBSTRING(s_hex, 18, 15), 16, 32), 12, '0')), 'V', 'Z'), 'U', 'Y'), 'T', 'X'), 'S', 'W'), 'R', 'V'), 'Q', 'T'), 'P', 'S'), 'O', 'R'), 'N', 'Q'), 'M', 'P'), 'L', 'N'), 'K', 'M'), 'J', 'K'), 'I', 'J');
			END");
            $db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "cookies (id int(100) UNSIGNED NOT NULL auto_increment, uid int(100) NOT NULL, ulid varchar(26) COLLATE ". $collation ." NOT NULL DEFAULT '0', auth_token varchar(255) COLLATE ". $collation ." NOT NULL, lastseen TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (id), UNIQUE KEY ulid (ulid)) ENGINE=MyISAM DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
            $db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "roles (id int(100) UNSIGNED NOT NULL auto_increment, ulid varchar(26) COLLATE ". $collation ." NOT NULL DEFAULT '0', slug varchar(100) COLLATE ". $collation ." NOT NULL, description varchar(255) COLLATE ". $collation ." NOT NULL, PRIMARY KEY (id), UNIQUE KEY ulid (ulid)) ENGINE=InnoDB DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
			$db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "permissions (id int(100) UNSIGNED NOT NULL auto_increment, slug varchar(100) COLLATE ". $collation ." NOT NULL, description varchar(255) COLLATE ". $collation ." NOT NULL, created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
			$db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "role_permissions (role_id int(100) UNSIGNED NOT NULL, permission_id int(100) UNSIGNED NOT NULL, PRIMARY KEY (`role_id`, `permission_id`), FOREIGN KEY (`role_id`) REFERENCES `" . $prefix . "roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (`permission_id`) REFERENCES `" . $prefix . "permissions`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION) ENGINE=InnoDB DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
            $db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "admins (id int(100) UNSIGNED NOT NULL auto_increment, role_id int(100) UNSIGNED NOT NULL, ulid varchar(26) COLLATE ". $collation ." NOT NULL DEFAULT '0', user varchar(100) COLLATE ". $collation ." NOT NULL, pass varchar(255) COLLATE ". $collation ." NOT NULL, email varchar(255) COLLATE ". $collation ." NOT NULL, status int(2) NOT NULL, PRIMARY KEY (id), UNIQUE KEY user (user), UNIQUE KEY email (email), FOREIGN KEY (`role_id`) REFERENCES `" . $prefix . "roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION) ENGINE=InnoDB DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
            // Note: 'users' table is not used in this project, only 'admins' table
            // $db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "users (id int(100) UNSIGNED NOT NULL auto_increment, user varchar(100) COLLATE ". $collation ." NOT NULL, pass varchar(255) COLLATE ". $collation ." NOT NULL, email varchar(255) COLLATE ". $collation ." NOT NULL, superuser varchar(255) COLLATE ". $collation ." DEFAULT NULL, type int(2) UNSIGNED DEFAULT NULL, stato int(2) NOT NULL, PRIMARY KEY (id), UNIQUE KEY user (user), UNIQUE KEY email (email)) ENGINE=InnoDB DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
            $db->query("CREATE TABLE IF NOT EXISTS " . $prefix . "routes (id int(100) UNSIGNED NOT NULL auto_increment, request varchar(255) COLLATE ". $collation ." NOT NULL, dest varchar(255) COLLATE ". $collation ." NOT NULL, type int(2) NOT NULL DEFAULT 1, redirect int(3) NOT NULL DEFAULT 301, canonical int(2) NOT NULL DEFAULT 0, PRIMARY KEY (id)) ENGINE=MyISAM DEFAULT CHARSET=". $charset ." COLLATE=". $collation .";");
			$db->query("CREATE TRIGGER `ulid_before_insert_admins` BEFORE INSERT ON `". $prefix ."admins`
				FOR EACH ROW BEGIN
				SET new.ulid = ULID();
			END");
			$db->query("CREATE TRIGGER `ulid_before_insert_roles` BEFORE INSERT ON `". $prefix ."roles`
				FOR EACH ROW BEGIN
				SET new.ulid = ULID();
			END");
			$db->insert("roles", [
				[
					"slug" => "Administrator",
					"description" => "Full system access"
				],
				[
					"slug" => "Editor",
					"description" => "Can create and edit content"
				]
			]);
			$db->insert("permissions", [
				[
					"slug" => "Manage Users",
					"description" => "Create, edit, delete users"
				],
				[
					"slug" => "Manage Roles",
					"description" => "Create, edit, delete roles"
				],
				[
					"slug" => "Manage Pages",
					"description" => "Create, edit, delete pages"
				],
				[
					"slug" => "Manage Posts",
					"description" => "Create, edit, delete posts"
				],
				[
					"slug" => "Publish Content",
					"description" => "Publish pages and posts"
				],
				[
					"slug" => "Delete Content",
					"description" => "Delete pages and posts"
				],
				[
					"slug" => "Edit Content",
					"description" => "Edit pages and posts"
				],
				[
					"slug" => "View Dashboard",
					"description" => "Access admin dashboard"
				]
			]);
			$db->query("INSERT INTO " . $prefix . "role_permissions (role_id, permission_id) 
            SELECT 1, id FROM " . $prefix . "permissions");
			$db->query("INSERT INTO " . $prefix . "role_permissions (role_id, permission_id) 
            SELECT 2, id FROM " . $prefix . "permissions WHERE slug IN ('Manage Pages', 'Manage Pages', 'Edit Content', 'Publish Content', 'View Dashboard')");
			$db->insert("admins", [
				"role_id" => 1,
				"user" => $admin,
				"pass" => password_hash($password, PASSWORD_BCRYPT, ['cost' => 13]),
				"email" => $email,
				"status" => 1
			]);
			if (preg_match_all('/\]\s*\];/s', $content, $matches, PREG_OFFSET_CAPTURE)) {
				$pos = end(end($matches[0]));
				$newContent = substr_replace($content, $dbSettings, $pos, 0);
				file_put_contents($configfile, $newContent);
			} else {
				throw new Exception("Error edit config file", 3);
			}
			$result = array(
                'code' => '0',
                'msg' => 'OK'
            );
        } catch (Exception $e) {
			unlink($configfile);
            $result = array(
                'code' => $e->getCode(),
                'msg' => $e->getMessage()
            );
        }
		return json_encode($result);
	}
}