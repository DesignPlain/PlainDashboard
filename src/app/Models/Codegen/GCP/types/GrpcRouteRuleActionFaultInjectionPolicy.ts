import { GrpcRouteRuleActionFaultInjectionPolicyAbort } from "./GrpcRouteRuleActionFaultInjectionPolicyAbort";
import { GrpcRouteRuleActionFaultInjectionPolicyDelay } from "./GrpcRouteRuleActionFaultInjectionPolicyDelay";

export interface GrpcRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Abort?: GrpcRouteRuleActionFaultInjectionPolicyAbort;

  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Delay?: GrpcRouteRuleActionFaultInjectionPolicyDelay;
}
