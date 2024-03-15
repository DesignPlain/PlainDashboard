import { EdgeCacheServiceRoutingPathMatcherRouteRule } from "./EdgeCacheServiceRoutingPathMatcherRouteRule";

export interface EdgeCacheServiceRoutingPathMatcher {
  // A human-readable description of the resource.
  Description?: string;

  // The name to which this PathMatcher is referred by the HostRule.
  Name?: string;

  /*
The routeRules to match against. routeRules support advanced routing behaviour, and can match on paths, headers and query parameters, as well as status codes and HTTP methods.
Structure is documented below.
*/
  RouteRules?: Array<EdgeCacheServiceRoutingPathMatcherRouteRule>;
}
