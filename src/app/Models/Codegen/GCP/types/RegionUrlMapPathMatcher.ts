import { RegionUrlMapPathMatcherPathRule } from "./RegionUrlMapPathMatcherPathRule";
import { RegionUrlMapPathMatcherRouteRule } from "./RegionUrlMapPathMatcherRouteRule";
import { RegionUrlMapPathMatcherDefaultUrlRedirect } from "./RegionUrlMapPathMatcherDefaultUrlRedirect";

export interface RegionUrlMapPathMatcher {
  /*
The list of path rules. Use this list instead of routeRules when routing based
on simple path matching is all that's required. The order by which path rules
are specified does not matter. Matches are always done on the longest-path-first
basis. For example: a pathRule with a path /a/b/c/- will match before /a/b/-
irrespective of the order in which those paths appear in this list. Within a
given pathMatcher, only one of pathRules or routeRules must be set.
Structure is documented below.
*/
  PathRules?: Array<RegionUrlMapPathMatcherPathRule>;

  /*
The list of ordered HTTP route rules. Use this list instead of pathRules when
advanced route matching and routing actions are desired. The order of specifying
routeRules matters: the first rule that matches will cause its specified routing
action to take effect. Within a given pathMatcher, only one of pathRules or
routeRules must be set. routeRules are not supported in UrlMaps intended for
External load balancers.
Structure is documented below.
*/
  RouteRules?: Array<RegionUrlMapPathMatcherRouteRule>;

  /*
A reference to a RegionBackendService resource. This will be used if
none of the pathRules defined by this PathMatcher is matched by
the URL's path portion.
*/
  DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: RegionUrlMapPathMatcherDefaultUrlRedirect;

  // An optional description of this resource.
  Description?: string;

  // The name to which this PathMatcher is referred by the HostRule.
  Name?: string;
}
