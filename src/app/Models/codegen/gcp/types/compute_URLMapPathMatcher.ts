import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_URLMapPathMatcherHeaderAction,
  compute_URLMapPathMatcherHeaderAction_GetTypes,
} from "./compute_URLMapPathMatcherHeaderAction";
import {
  compute_URLMapPathMatcherPathRule,
  compute_URLMapPathMatcherPathRule_GetTypes,
} from "./compute_URLMapPathMatcherPathRule";
import {
  compute_URLMapPathMatcherRouteRule,
  compute_URLMapPathMatcherRouteRule_GetTypes,
} from "./compute_URLMapPathMatcherRouteRule";
import {
  compute_URLMapPathMatcherDefaultRouteAction,
  compute_URLMapPathMatcherDefaultRouteAction_GetTypes,
} from "./compute_URLMapPathMatcherDefaultRouteAction";
import {
  compute_URLMapPathMatcherDefaultUrlRedirect,
  compute_URLMapPathMatcherDefaultUrlRedirect_GetTypes,
} from "./compute_URLMapPathMatcherDefaultUrlRedirect";

export interface compute_URLMapPathMatcher {
  // The backend service or backend bucket to use when none of the given paths match.
  defaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  defaultUrlRedirect?: compute_URLMapPathMatcherDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. HeaderAction specified here are applied after the
matching HttpRouteRule HeaderAction and before the HeaderAction in the UrlMap
Structure is documented below.
*/
  headerAction?: compute_URLMapPathMatcherHeaderAction;

  // The name to which this PathMatcher is referred by the HostRule.
  name?: string;

  /*
The list of path rules. Use this list instead of routeRules when routing based
on simple path matching is all that's required. The order by which path rules
are specified does not matter. Matches are always done on the longest-path-first
basis. For example: a pathRule with a path /a/b/c/- will match before /a/b/-
irrespective of the order in which those paths appear in this list. Within a
given pathMatcher, only one of pathRules or routeRules must be set.
Structure is documented below.
*/
  pathRules?: Array<compute_URLMapPathMatcherPathRule>;

  /*
The list of ordered HTTP route rules. Use this list instead of pathRules when
advanced route matching and routing actions are desired. The order of specifying
routeRules matters: the first rule that matches will cause its specified routing
action to take effect. Within a given pathMatcher, only one of pathRules or
routeRules must be set. routeRules are not supported in UrlMaps intended for
External load balancers.
Structure is documented below.
*/
  routeRules?: Array<compute_URLMapPathMatcherRouteRule>;

  /*
defaultRouteAction takes effect when none of the pathRules or routeRules match. The load balancer performs
advanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request
to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set.
Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  defaultRouteAction?: compute_URLMapPathMatcherDefaultRouteAction;
}

export function compute_URLMapPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "routeRules",
      "The list of ordered HTTP route rules. Use this list instead of pathRules when\nadvanced route matching and routing actions are desired. The order of specifying\nrouteRules matters: the first rule that matches will cause its specified routing\naction to take effect. Within a given pathMatcher, only one of pathRules or\nrouteRules must be set. routeRules are not supported in UrlMaps intended for\nExternal load balancers.\nStructure is documented below.",
      () => compute_URLMapPathMatcherRouteRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultRouteAction",
      "defaultRouteAction takes effect when none of the pathRules or routeRules match. The load balancer performs\nadvanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request\nto the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set.\nConversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nStructure is documented below.",
      () => compute_URLMapPathMatcherDefaultRouteAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultService",
      "The backend service or backend bucket to use when none of the given paths match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultUrlRedirect",
      "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
      () => compute_URLMapPathMatcherDefaultUrlRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this resource. Provide this property when you create\nthe resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headerAction",
      "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. HeaderAction specified here are applied after the\nmatching HttpRouteRule HeaderAction and before the HeaderAction in the UrlMap\nStructure is documented below.",
      () => compute_URLMapPathMatcherHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name to which this PathMatcher is referred by the HostRule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pathRules",
      "The list of path rules. Use this list instead of routeRules when routing based\non simple path matching is all that's required. The order by which path rules\nare specified does not matter. Matches are always done on the longest-path-first\nbasis. For example: a pathRule with a path /a/b/c/* will match before /a/b/*\nirrespective of the order in which those paths appear in this list. Within a\ngiven pathMatcher, only one of pathRules or routeRules must be set.\nStructure is documented below.",
      () => compute_URLMapPathMatcherPathRule_GetTypes(),
      false,
      false,
    ),
  ];
}
