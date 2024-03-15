import { URLMapPathMatcherPathRule } from "./URLMapPathMatcherPathRule";
import { URLMapPathMatcherRouteRule } from "./URLMapPathMatcherRouteRule";
import { URLMapPathMatcherDefaultRouteAction } from "./URLMapPathMatcherDefaultRouteAction";
import { URLMapPathMatcherDefaultUrlRedirect } from "./URLMapPathMatcherDefaultUrlRedirect";
import { URLMapPathMatcherHeaderAction } from "./URLMapPathMatcherHeaderAction";

export interface URLMapPathMatcher {
  /*
The list of path rules. Use this list instead of routeRules when routing based
on simple path matching is all that's required. The order by which path rules
are specified does not matter. Matches are always done on the longest-path-first
basis. For example: a pathRule with a path /a/b/c/- will match before /a/b/-
irrespective of the order in which those paths appear in this list. Within a
given pathMatcher, only one of pathRules or routeRules must be set.
Structure is documented below.
*/
  PathRules?: Array<URLMapPathMatcherPathRule>;

  /*
The list of ordered HTTP route rules. Use this list instead of pathRules when
advanced route matching and routing actions are desired. The order of specifying
routeRules matters: the first rule that matches will cause its specified routing
action to take effect. Within a given pathMatcher, only one of pathRules or
routeRules must be set. routeRules are not supported in UrlMaps intended for
External load balancers.
Structure is documented below.
*/
  RouteRules?: Array<URLMapPathMatcherRouteRule>;

  /*
defaultRouteAction takes effect when none of the pathRules or routeRules match. The load balancer performs
advanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request
to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set.
Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  DefaultRouteAction?: URLMapPathMatcherDefaultRouteAction;

  // The backend service or backend bucket to use when none of the given paths match.
  DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: URLMapPathMatcherDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  Description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. HeaderAction specified here are applied after the
matching HttpRouteRule HeaderAction and before the HeaderAction in the UrlMap
Structure is documented below.
*/
  HeaderAction?: URLMapPathMatcherHeaderAction;

  // The name to which this PathMatcher is referred by the HostRule.
  Name?: string;
}
