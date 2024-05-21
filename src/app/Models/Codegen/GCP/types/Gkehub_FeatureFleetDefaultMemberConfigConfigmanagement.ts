import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync,
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync";

export interface gkehub_FeatureFleetDefaultMemberConfigConfigmanagement {
  // Version of ACM installed
  version?: string;

  /*
ConfigSync configuration for the cluster
Structure is documented below.
*/
  configSync?: gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync;
}

export function gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of ACM installed",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configSync",
      "ConfigSync configuration for the cluster\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes(),
      false,
      false,
    ),
  ];
}
