export interface getBackendBucketCdnPolicyCacheKeyPolicy {
  /*
Allows HTTP request headers (by name) to be used in the
cache key.
*/
  IncludeHttpHeaders?: Array<string>;

  /*
Names of query string parameters to include in cache keys.
Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.
*/
  QueryStringWhitelists?: Array<string>;
}
