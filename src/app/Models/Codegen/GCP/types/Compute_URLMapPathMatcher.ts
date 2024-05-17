import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherDefaultRouteAction,
  Compute_URLMapPathMatcherDefaultRouteAction_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteAction";
import {
  Compute_URLMapPathMatcherDefaultUrlRedirect,
  Compute_URLMapPathMatcherDefaultUrlRedirect_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultUrlRedirect";
import {
  Compute_URLMapPathMatcherHeaderAction,
  Compute_URLMapPathMatcherHeaderAction_GetTypes,
} from "./Compute_URLMapPathMatcherHeaderAction";
import {
  Compute_URLMapPathMatcherPathRule,
  Compute_URLMapPathMatcherPathRule_GetTypes,
} from "./Compute_URLMapPathMatcherPathRule";
import {
  Compute_URLMapPathMatcherRouteRule,
  Compute_URLMapPathMatcherRouteRule_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRule";

export interface Compute_URLMapPathMatcher {
  /*
defaultRouteAction takes effect when none of the pathRules or routeRules match. The load balancer performs
advanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request
to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set.
Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  DefaultRouteAction?: Compute_URLMapPathMatcherDefaultRouteAction;

  // The backend service or backend bucket to use when none of the given paths match.
  DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: Compute_URLMapPathMatcherDefaultUrlRedirect;

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
  HeaderAction?: Compute_URLMapPathMatcherHeaderAction;

  // The name to which this PathMatcher is referred by the HostRule.
  Name?: string;

  /*
The list of path rules. Use this list instead of routeRules when routing based
on simple path matching is all that's required. The order by which path rules
are specified does not matter. Matches are always done on the longest-path-first
basis. For example: a pathRule with a path /a/b/c/- will match before /a/b/-
irrespective of the order in which those paths appear in this list. Within a
given pathMatcher, only one of pathRules or routeRules must be set.
Structure is documented below.
*/
  PathRules?: Array<Compute_URLMapPathMatcherPathRule>;

  /*
The list of ordered HTTP route rules. Use this list instead of pathRules when
advanced route matching and routing actions are desired. The order of specifying
routeRules matters: the first rule that matches will cause its specified routing
action to take effect. Within a given pathMatcher, only one of pathRules or
routeRules must be set. routeRules are not supported in UrlMaps intended for
External load balancers.
Structure is documented below.
*/
  RouteRules?: Array<Compute_URLMapPathMatcherRouteRule>;
}

export function Compute_URLMapPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RouteRules",
      "The list of ordered HTTP route rules. Use this list instead of pathRules when\nadvanced route matching and routing actions are desired. The order of specifying\nrouteRules matters: the first rule that matches will cause its specified routing\naction to take effect. Within a given pathMatcher, only one of pathRules or\nrouteRules must be set. routeRules are not supported in UrlMaps intended for\nExternal load balancers.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DefaultRouteAction",
      "defaultRouteAction takes effect when none of the pathRules or routeRules match. The load balancer performs\nadvanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request\nto the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set.\nConversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultService",
      "The backend service or backend bucket to use when none of the given paths match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DefaultUrlRedirect",
      "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultUrlRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this resource. Provide this property when you create\nthe resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. HeaderAction specified here are applied after the\nmatching HttpRouteRule HeaderAction and before the HeaderAction in the UrlMap\nStructure is documented below.",
      Compute_URLMapPathMatcherHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name to which this PathMatcher is referred by the HostRule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PathRules",
      "The list of path rules. Use this list instead of routeRules when routing based\non simple path matching is all that's required. The order by which path rules\nare specified does not matter. Matches are always done on the longest-path-first\nbasis. For example: a pathRule with a path /a/b/c/* will match before /a/b/*\nirrespective of the order in which those paths appear in this list. Within a\ngiven pathMatcher, only one of pathRules or routeRules must be set.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRule_GetTypes(),
      false,
      false,
    ),
  ];
}
