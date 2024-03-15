import { RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer } from "./RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer";

export interface RecordSetRoutingPolicyWrrHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer>;
}
