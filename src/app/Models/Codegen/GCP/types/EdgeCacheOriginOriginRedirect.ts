export interface EdgeCacheOriginOriginRedirect {
  /*
The set of redirect response codes that the CDN
follows. Values of
[RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions)
are accepted.
*/
  RedirectConditions?: Array<string>;
}
