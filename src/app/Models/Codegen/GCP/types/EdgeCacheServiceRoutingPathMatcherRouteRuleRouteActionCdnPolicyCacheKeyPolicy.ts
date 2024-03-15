export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
  /*
If true, exclude query string parameters from the cache key
If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.
*/
  ExcludeQueryString?: boolean;

  /*
Names of query string parameters to exclude from cache keys. All other parameters will be included.
Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
*/
  ExcludedQueryParameters?: Array<string>;

  // If true, http and https requests will be cached separately.
  IncludeProtocol?: boolean;

  /*
Names of Cookies to include in cache keys.  The cookie name and cookie value of each cookie named will be used as part of the cache key.
Cookie names:
- must be valid RFC 6265 "cookie-name" tokens
- are case sensitive
- cannot start with "Edge-Cache-" (case insensitive)
Note that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.
You may specify up to three cookie names.
*/
  IncludedCookieNames?: Array<string>;

  /*
Names of HTTP request headers to include in cache keys. The value of the header field will be used as part of the cache key.
- Header names must be valid HTTP RFC 7230 header field values.
- Header field names are case insensitive
- To include the HTTP method, use ":method"
Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.
*/
  IncludedHeaderNames?: Array<string>;

  /*
Names of query string parameters to include in cache keys. All other parameters will be excluded.
Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
*/
  IncludedQueryParameters?: Array<string>;

  /*
If true, requests to different hosts will be cached separately.
Note: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.
*/
  ExcludeHost?: boolean;
}
