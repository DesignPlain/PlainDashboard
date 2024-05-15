import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule {
  /*
The header actions, including adding & removing headers, for requests that match this route.
Structure is documented below.
*/
  HeaderAction?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;

  /*
The list of criteria for matching attributes of a request to this routeRule. This list has OR semantics: the request matches this routeRule when any of the matchRules are satisfied. However predicates
within a given matchRule have AND semantics. All predicates within a matchRule must match for the request to match the rule.
Structure is documented below.
*/
  MatchRules?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule>;

  /*
The Origin resource that requests to this route should fetch from when a matching response is not in cache. Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"
Only one of origin or urlRedirect can be set.
*/
  Origin?: string;

  /*
The priority of this route rule, where 1 is the highest priority.
You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.
Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers
to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.
*/
  Priority?: string;

  /*
In response to a matching path, the routeAction performs advanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request to the selected origin.
Structure is documented below.
*/
  RouteAction?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;

  /*
The URL redirect configuration for requests that match this route.
Structure is documented below.
*/
  UrlRedirect?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;

  // A human-readable description of the routeRule.
  Description?: string;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "UrlRedirect",
      "The URL redirect configuration for requests that match this route.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A human-readable description of the routeRule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "The header actions, including adding & removing headers, for requests that match this route.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MatchRules",
      "The list of criteria for matching attributes of a request to this routeRule. This list has OR semantics: the request matches this routeRule when any of the matchRules are satisfied. However predicates\nwithin a given matchRule have AND semantics. All predicates within a matchRule must match for the request to match the rule.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Origin",
      'The Origin resource that requests to this route should fetch from when a matching response is not in cache. Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"\nOnly one of origin or urlRedirect can be set.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Priority",
      "The priority of this route rule, where 1 is the highest priority.\nYou cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.\nPriority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers\nto which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RouteAction",
      "In response to a matching path, the routeAction performs advanced routing actions like URL rewrites, header transformations, etc. prior to forwarding the request to the selected origin.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction_GetTypes(),
      false,
      false,
    ),
  ];
}
