import { RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay } from "./RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay";

export interface RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /*
Specifies the value of the fixed delay interval.
Structure is documented below.
*/
  FixedDelay?: RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;

  /*
The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  Percentage?: number;
}