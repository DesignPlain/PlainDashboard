import { BackendServiceLocalityLbPolicyCustomPolicy } from "./BackendServiceLocalityLbPolicyCustomPolicy";
import { BackendServiceLocalityLbPolicyPolicy } from "./BackendServiceLocalityLbPolicyPolicy";

export interface BackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
Structure is documented below.
*/
  CustomPolicy?: BackendServiceLocalityLbPolicyCustomPolicy;

  /*
The configuration for a built-in load balancing policy.
Structure is documented below.
*/
  Policy?: BackendServiceLocalityLbPolicyPolicy;
}
