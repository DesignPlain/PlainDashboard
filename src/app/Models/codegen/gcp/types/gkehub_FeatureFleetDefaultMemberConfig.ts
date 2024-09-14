import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkehub_FeatureFleetDefaultMemberConfigMesh,
  gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigMesh";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontroller,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontroller";
import {
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagement,
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigConfigmanagement";

export interface gkehub_FeatureFleetDefaultMemberConfig {
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

  /*
Config Management spec
Structure is documented below.
*/
  configmanagement?: gkehub_FeatureFleetDefaultMemberConfigConfigmanagement;
}

export function gkehub_FeatureFleetDefaultMemberConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mesh",
      "Service Mesh spec\nStructure is documented below.",
      () => gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "policycontroller",
      "Policy Controller spec\nStructure is documented below.",
      () => gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configmanagement",
      "Config Management spec\nStructure is documented below.",
      () => gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes(),
      false,
      false,
    ),
  ];
}
