import { URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay } from "./URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay";
import { URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort } from "./URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort";

export interface URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
}
