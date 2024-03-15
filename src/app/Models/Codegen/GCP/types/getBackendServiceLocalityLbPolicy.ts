import { getBackendServiceLocalityLbPolicyPolicy } from "./getBackendServiceLocalityLbPolicyPolicy";
import { getBackendServiceLocalityLbPolicyCustomPolicy } from "./getBackendServiceLocalityLbPolicyCustomPolicy";

export interface getBackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
*/
  CustomPolicies?: Array<getBackendServiceLocalityLbPolicyCustomPolicy>;

  // The configuration for a built-in load balancing policy.
  Policies?: Array<getBackendServiceLocalityLbPolicyPolicy>;
}
