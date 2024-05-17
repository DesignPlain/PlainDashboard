import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherPathRuleRouteAction,
  Compute_URLMapPathMatcherPathRuleRouteAction_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteAction";
import {
  Compute_URLMapPathMatcherPathRuleUrlRedirect,
  Compute_URLMapPathMatcherPathRuleUrlRedirect_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleUrlRedirect";

export interface Compute_URLMapPathMatcherPathRule {
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
  RouteAction?: Compute_URLMapPathMatcherPathRuleRouteAction;

  // The backend service or backend bucket to use if any of the given paths match.
  Service?: string;

  /*
When a path pattern is matched, the request is redirected to a URL specified
by urlRedirect. If urlRedirect is specified, service or routeAction must not
be set.
Structure is documented below.
*/
  UrlRedirect?: Compute_URLMapPathMatcherPathRuleUrlRedirect;
}

export function Compute_URLMapPathMatcherPathRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The backend service or backend bucket to use if any of the given paths match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRedirect",
      "When a path pattern is matched, the request is redirected to a URL specified\nby urlRedirect. If urlRedirect is specified, service or routeAction must not\nbe set.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleUrlRedirect_GetTypes(),
      false,
      false,
    ),
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
      Compute_URLMapPathMatcherPathRuleRouteAction_GetTypes(),
      false,
      false,
    ),
  ];
}
