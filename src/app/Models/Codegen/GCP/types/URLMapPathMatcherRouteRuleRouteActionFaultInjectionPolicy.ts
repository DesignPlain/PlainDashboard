import { URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort } from "./URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";
import { URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay } from "./URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";

export interface URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;
}
