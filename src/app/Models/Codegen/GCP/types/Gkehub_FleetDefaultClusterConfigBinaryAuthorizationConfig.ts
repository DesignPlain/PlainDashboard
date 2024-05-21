import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding,
  gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding_GetTypes,
} from "./gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding";

export interface gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig {
  /*
Mode of operation for binauthz policy evaluation.
Possible values are: `DISABLED`, `POLICY_BINDINGS`.
*/
  evaluationMode?: string;

  /*
Binauthz policies that apply to this cluster.
Structure is documented below.
*/
  policyBindings?: Array<gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding>;
}

export function gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "Mode of operation for binauthz policy evaluation.\nPossible values are: `DISABLED`, `POLICY_BINDINGS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyBindings",
      "Binauthz policies that apply to this cluster.\nStructure is documented below.",
      gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding_GetTypes(),
      false,
      false,
    ),
  ];
}
