<?php

namespace Modules\admin\Helpers;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTHelper
{
    protected $secretKey;
    protected $algorithm = 'HS256';
    protected $expirationTime = 86400; // 24 hours

    public function __construct(array $settings = [])
    {
        // Use a secret key from settings or generate a default one
        $this->secretKey = $settings['jwt_secret'] ?? bin2hex(random_bytes(32));
        
        if (isset($settings['jwt_expiration'])) {
            $this->expirationTime = (int) $settings['jwt_expiration'];
        }
		if (isset($settings['algorithm'])) {
            $this->algorithm = (string) $settings['algorithm'];
        }
    }

    /**
     * Generate JWT token with ULID and permissions
     */
    public function generateToken(array $userData): string
    {
        $now = time();

        $payload = [
            'iat' => $now,
            'exp' => $now + $this->expirationTime,
            'ulid' => $userData['ulid'] ?? '',
            'permissions' => $userData['permissions'] ?? []
        ];

        return JWT::encode($payload, $this->secretKey, $this->algorithm);
    }

    /**
     * Validate and decode JWT token
     */
    public function validateToken(string $token): ?\stdClass
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, $this->algorithm));
            
            // Check expiration
            if ($decoded->exp < time()) {
                return null;
            }
            
            return $decoded;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Get user data from token
     */
    public function getUserFromToken(string $token): ?array
    {
        $decoded = $this->validateToken($token);
        
        if (!$decoded) {
            return null;
        }

        return [
            'ulid' => $decoded->ulid ?? '',
            'id' => $decoded->user_id ?? 0,
            'permissions' => $decoded->permissions ?? []
        ];
    }

    /**
     * Extract token from request
     */
    public function extractTokenFromRequest(\Psr\Http\Message\ServerRequestInterface $request, string $cookieName = 'perseo_jwt'): ?string
    {
        $cookies = $request->getCookieParams();
        return $cookies[$cookieName] ?? null;
    }

    /**
     * Check if token is expired
     */
    public function isTokenExpired(string $token): bool
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, $this->algorithm));
            return $decoded->exp < time();
        } catch (\Exception $e) {
            return true;
        }
    }
}
