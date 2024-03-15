export interface BackendServiceCdnPolicyCacheKeyPolicy {
  // If true, http and https requests will be cached separately.
  IncludeProtocol?: boolean;

  /*
If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.
If false, the query string will be excluded from the cache
key entirely.
*/
  IncludeQueryString?: boolean;

  /*
Names of query string parameters to exclude in cache keys.
All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  QueryStringBlacklists?: Array<string>;

  /*
Names of query string parameters to include in cache keys.
All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  QueryStringWhitelists?: Array<string>;

  // If true requests to different hosts will be cached separately.
  IncludeHost?: boolean;

  /*
Allows HTTP request headers (by name) to be used in the
cache key.
*/
  IncludeHttpHeaders?: Array<string>;

  // Names of cookies to include in cache keys.
  IncludeNamedCookies?: Array<string>;
}
