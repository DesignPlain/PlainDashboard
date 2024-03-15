export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions {
  /*
The allowed signature algorithms to use.
Defaults to using only ED25519.
You may specify up to 3 signature algorithms to use.
Each value may be one of: `ED25519`, `HMAC_SHA_256`, `HMAC_SHA1`.
*/
  AllowedSignatureAlgorithms?: Array<string>;

  /*
The query parameter in which to find the token.
The name must be 1-64 characters long and match the regular expression `a-zA-Z-` which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
Defaults to `edge-cache-token`.
*/
  TokenQueryParameter?: string;
}
