export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures {
  /*
The duration the token is valid starting from the moment the token is first generated.
Defaults to `86400s` (1 day).
The TTL must be >= 0 and <= 604,800 seconds (1 week).
This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  TokenTtl?: string;

  /*
The actions to take to add signatures to responses.
Each value may be one of: `GENERATE_COOKIE`, `GENERATE_TOKEN_HLS_COOKIELESS`, `PROPAGATE_TOKEN_HLS_COOKIELESS`.
*/
  Actions?: string;

  /*
The parameters to copy from the verified token to the generated token.
Only the following parameters may be copied:
*/
  CopiedParameters?: Array<string>;

  /*
The keyset to use for signature generation.
The following are both valid paths to an EdgeCacheKeyset resource:
- `projects/project/locations/global/edgeCacheKeysets/yourKeyset`
*/
  Keyset?: string;

  /*
The query parameter in which to put the generated token.
If not specified, defaults to `edge-cache-token`.
If specified, the name must be 1-64 characters long and match the regular expression `a-zA-Z-` which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
This field may only be set when the GENERATE_TOKEN_HLS_COOKIELESS or PROPAGATE_TOKEN_HLS_COOKIELESS actions are specified.
*/
  TokenQueryParameter?: string;
}
