import { HttpRouteRuleActionFaultInjectionPolicyDelay } from "./HttpRouteRuleActionFaultInjectionPolicyDelay";
import { HttpRouteRuleActionFaultInjectionPolicyAbort } from "./HttpRouteRuleActionFaultInjectionPolicyAbort";

export interface HttpRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Abort?: HttpRouteRuleActionFaultInjectionPolicyAbort;

  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Delay?: HttpRouteRuleActionFaultInjectionPolicyDelay;
}
