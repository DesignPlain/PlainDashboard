import { RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer } from "./RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer";

export interface RecordSetRoutingPolicyPrimaryBackupPrimary {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer>;
}
