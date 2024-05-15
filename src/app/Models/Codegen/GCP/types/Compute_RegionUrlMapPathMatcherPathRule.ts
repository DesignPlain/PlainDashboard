import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapPathMatcherPathRuleRouteAction,
  Compute_RegionUrlMapPathMatcherPathRuleRouteAction_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleRouteAction";
import {
  Compute_RegionUrlMapPathMatcherPathRuleUrlRedirect,
  Compute_RegionUrlMapPathMatcherPathRuleUrlRedirect_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleUrlRedirect";

export interface Compute_RegionUrlMapPathMatcherPathRule {
  /*
The list of path patterns to match. Each must start with / and the only place a
\- is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here.
*/
  Paths?: Array<string>;

  /*
In response to a matching path, the load balancer performs advanced routing
actions like URL rewrites, header transformations, etc. prior to forwarding the
request to the selected backend. If routeAction specifies any
weightedBackendServices, service must not be set. Conversely if service is set,
routeAction cannot contain any  weightedBackendServices. Only one of routeAction
or urlRedirect must be set.
Structure is documented below.
*/
  RouteAction?: Compute_RegionUrlMapPathMatcherPathRuleRouteAction;

  /*
The region backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set.
*/
  Service?: string;

  /*
When a path pattern is matched, the request is redirected to a URL specified
by urlRedirect. If urlRedirect is specified, service or routeAction must not
be set.
Structure is documented below.
*/
  UrlRedirect?: Compute_RegionUrlMapPathMatcherPathRuleUrlRedirect;
}

export function Compute_RegionUrlMapPathMatcherPathRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Paths",
      "The list of path patterns to match. Each must start with / and the only place a\n\\* is allowed is at the end following a /. The string fed to the path matcher\ndoes not include any text after the first ? or #, and those chars are not\nallowed here.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RouteAction",
      "In response to a matching path, the load balancer performs advanced routing\nactions like URL rewrites, header transformations, etc. prior to forwarding the\nrequest to the selected backend. If routeAction specifies any\nweightedBackendServices, service must not be set. Conversely if service is set,\nrouteAction cannot contain any  weightedBackendServices. Only one of routeAction\nor urlRedirect must be set.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleRouteAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The region backend service resource to which traffic is\ndirected if this rule is matched. If routeAction is additionally specified,\nadvanced routing actions like URL Rewrites, etc. take effect prior to sending\nthe request to the backend. However, if service is specified, routeAction cannot\ncontain any weightedBackendService s. Conversely, if routeAction specifies any\nweightedBackendServices, service must not be specified. Only one of urlRedirect,\nservice or routeAction.weightedBackendService must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRedirect",
      "When a path pattern is matched, the request is redirected to a URL specified\nby urlRedirect. If urlRedirect is specified, service or routeAction must not\nbe set.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleUrlRedirect_GetTypes(),
      false,
      false,
    ),
  ];
}
