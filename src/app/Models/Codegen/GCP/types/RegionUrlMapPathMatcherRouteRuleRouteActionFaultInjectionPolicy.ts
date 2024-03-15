import { RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay } from "./RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";
import { RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort } from "./RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";

export interface RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;
}
