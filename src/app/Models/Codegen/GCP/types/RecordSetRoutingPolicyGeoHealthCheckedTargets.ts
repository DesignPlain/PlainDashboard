import { RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer } from "./RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer";

export interface RecordSetRoutingPolicyGeoHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer>;
}
