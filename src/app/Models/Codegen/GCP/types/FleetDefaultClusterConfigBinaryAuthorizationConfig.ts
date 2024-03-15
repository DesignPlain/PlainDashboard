import { FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding } from "./FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding";

export interface FleetDefaultClusterConfigBinaryAuthorizationConfig {
  /*
Mode of operation for binauthz policy evaluation.
Possible values are: `DISABLED`, `POLICY_BINDINGS`.
*/
  EvaluationMode?: string;

  /*
Binauthz policies that apply to this cluster.
Structure is documented below.
*/
  PolicyBindings?: Array<FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding>;
}
