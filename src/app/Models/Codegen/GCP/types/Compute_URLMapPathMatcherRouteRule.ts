import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleHeaderAction,
  Compute_URLMapPathMatcherRouteRuleHeaderAction_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleHeaderAction";
import {
  Compute_URLMapPathMatcherRouteRuleMatchRule,
  Compute_URLMapPathMatcherRouteRuleMatchRule_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleMatchRule";
import {
  Compute_URLMapPathMatcherRouteRuleRouteAction,
  Compute_URLMapPathMatcherRouteRuleRouteAction_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleRouteAction";
import {
  Compute_URLMapPathMatcherRouteRuleUrlRedirect,
  Compute_URLMapPathMatcherRouteRuleUrlRedirect_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleUrlRedirect";

export interface Compute_URLMapPathMatcherRouteRule {
  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here are applied before
the matching pathMatchers[].headerAction and after pathMatchers[].routeRules[].r
outeAction.weightedBackendService.backendServiceWeightAction[].headerAction
Structure is documented below.
*/
  HeaderAction?: Compute_URLMapPathMatcherRouteRuleHeaderAction;

  /*
The rules for determining a match.
Structure is documented below.
*/
  MatchRules?: Array<Compute_URLMapPathMatcherRouteRuleMatchRule>;

  /*
For routeRules within a given pathMatcher, priority determines the order
in which load balancer will interpret routeRules. RouteRules are evaluated
in order of priority, from the lowest to highest number. The priority of
a rule decreases as its number increases (1, 2, 3, N+1). The first rule
that matches the request is applied.
You cannot configure two or more routeRules with the same priority.
Priority for each rule must be set to a number between 0 and
2147483647 inclusive.
Priority numbers can have gaps, which enable you to add or remove rules
in the future without affecting the rest of the rules. For example,
1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
future without any impact on existing rules.
*/
  Priority?: number;

  /*
In response to a matching matchRule, the load balancer performs advanced routing
actions like URL rewrites, header transformations, etc. prior to forwarding the
request to the selected backend. If  routeAction specifies any
weightedBackendServices, service must not be set. Conversely if service is set,
routeAction cannot contain any  weightedBackendServices. Only one of routeAction
or urlRedirect must be set.
Structure is documented below.
*/
  RouteAction?: Compute_URLMapPathMatcherRouteRuleRouteAction;

  /*
The backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set.
*/
  Service?: string;

  /*
When this rule is matched, the request is redirected to a URL specified by
urlRedirect. If urlRedirect is specified, service or routeAction must not be
set.
Structure is documented below.
*/
  UrlRedirect?: Compute_URLMapPathMatcherRouteRuleUrlRedirect;
}

export function Compute_URLMapPathMatcherRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. The headerAction specified here are applied before\nthe matching pathMatchers[].headerAction and after pathMatchers[].routeRules[].r\nouteAction.weightedBackendService.backendServiceWeightAction[].headerAction\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MatchRules",
      "The rules for determining a match.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleMatchRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Priority",
      "For routeRules within a given pathMatcher, priority determines the order\nin which load balancer will interpret routeRules. RouteRules are evaluated\nin order of priority, from the lowest to highest number. The priority of\na rule decreases as its number increases (1, 2, 3, N+1). The first rule\nthat matches the request is applied.\nYou cannot configure two or more routeRules with the same priority.\nPriority for each rule must be set to a number between 0 and\n2147483647 inclusive.\nPriority numbers can have gaps, which enable you to add or remove rules\nin the future without affecting the rest of the rules. For example,\n1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which\nyou could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the\nfuture without any impact on existing rules.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RouteAction",
      "In response to a matching matchRule, the load balancer performs advanced routing\nactions like URL rewrites, header transformations, etc. prior to forwarding the\nrequest to the selected backend. If  routeAction specifies any\nweightedBackendServices, service must not be set. Conversely if service is set,\nrouteAction cannot contain any  weightedBackendServices. Only one of routeAction\nor urlRedirect must be set.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleRouteAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The backend service resource to which traffic is\ndirected if this rule is matched. If routeAction is additionally specified,\nadvanced routing actions like URL Rewrites, etc. take effect prior to sending\nthe request to the backend. However, if service is specified, routeAction cannot\ncontain any weightedBackendService s. Conversely, if routeAction specifies any\nweightedBackendServices, service must not be specified. Only one of urlRedirect,\nservice or routeAction.weightedBackendService must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRedirect",
      "When this rule is matched, the request is redirected to a URL specified by\nurlRedirect. If urlRedirect is specified, service or routeAction must not be\nset.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleUrlRedirect_GetTypes(),
      false,
      false,
    ),
  ];
}
