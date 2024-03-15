import { RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay } from "./RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay";
import { RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort } from "./RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort";

export interface RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
}
