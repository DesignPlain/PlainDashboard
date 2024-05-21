import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagement,
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigConfigmanagement";
import {
  gkehub_FeatureFleetDefaultMemberConfigMesh,
  gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigMesh";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontroller,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontroller";

export interface gkehub_FeatureFleetDefaultMemberConfig {
  /*
Config Management spec
Structure is documented below.
*/
  configmanagement?: gkehub_FeatureFleetDefaultMemberConfigConfigmanagement;

  /*
Service Mesh spec
Structure is documented below.
*/
  mesh?: gkehub_FeatureFleetDefaultMemberConfigMesh;

  /*
Policy Controller spec
Structure is documented below.
*/
  policycontroller?: gkehub_FeatureFleetDefaultMemberConfigPolicycontroller;
}

export function gkehub_FeatureFleetDefaultMemberConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "policycontroller",
      "Policy Controller spec\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configmanagement",
      "Config Management spec\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mesh",
      "Service Mesh spec\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes(),
      false,
      false,
    ),
  ];
}
