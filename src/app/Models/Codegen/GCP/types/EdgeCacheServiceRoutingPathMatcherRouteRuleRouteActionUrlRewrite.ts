export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite {
  // Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.
  PathPrefixRewrite?: string;

  /*
Prior to forwarding the request to the selected origin, if the
request matched a pathTemplateMatch, the matching portion of the
request's path is replaced re-written using the pattern specified
by pathTemplateRewrite.
pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.
pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.
Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.
*/
  PathTemplateRewrite?: string;

  // Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.
  HostRewrite?: string;
}
