import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync,
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync";

export interface Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement {
  /*
ConfigSync configuration for the cluster
Structure is documented below.
*/
  ConfigSync?: Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync;

  // Version of ACM installed
  Version?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigConfigmanagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ConfigSync",
      "ConfigSync configuration for the cluster\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of ACM installed",
      [],
      false,
      false,
    ),
  ];
}
