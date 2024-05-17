import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller,
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller";
import {
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement,
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement";
import {
  Gkehub_FeatureFleetDefaultMemberConfigMesh,
  Gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigMesh";

export interface Gkehub_FeatureFleetDefaultMemberConfig {
  /*
Policy Controller spec
Structure is documented below.
*/
  Policycontroller?: Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller;

  /*
Config Management spec
Structure is documented below.
*/
  Configmanagement?: Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement;

  /*
Service Mesh spec
Structure is documented below.
*/
  Mesh?: Gkehub_FeatureFleetDefaultMemberConfigMesh;
}

export function Gkehub_FeatureFleetDefaultMemberConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Mesh",
      "Service Mesh spec\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Policycontroller",
      "Policy Controller spec\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Configmanagement",
      "Config Management spec\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes(),
      false,
      false,
    ),
  ];
}
