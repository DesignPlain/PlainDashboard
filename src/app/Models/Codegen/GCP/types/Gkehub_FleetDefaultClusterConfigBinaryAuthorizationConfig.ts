import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding,
  Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding_GetTypes,
} from "./Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding";

export interface Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig {
  /*
Mode of operation for binauthz policy evaluation.
Possible values are: `DISABLED`, `POLICY_BINDINGS`.
*/
  EvaluationMode?: string;

  /*
Binauthz policies that apply to this cluster.
Structure is documented below.
*/
  PolicyBindings?: Array<Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding>;
}

export function Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EvaluationMode",
      "Mode of operation for binauthz policy evaluation.\nPossible values are: `DISABLED`, `POLICY_BINDINGS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyBindings",
      "Binauthz policies that apply to this cluster.\nStructure is documented below.",
      Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding_GetTypes(),
      false,
      false,
    ),
  ];
}
