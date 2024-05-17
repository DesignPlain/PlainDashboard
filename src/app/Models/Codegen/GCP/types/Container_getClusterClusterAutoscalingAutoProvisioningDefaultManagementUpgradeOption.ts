import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption {
  // This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.
  AutoUpgradeStartTime?: string;

  // This field is set when upgrades are about to commence with the description of the upgrade.
  Description?: string;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AutoUpgradeStartTime",
      "This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "This field is set when upgrades are about to commence with the description of the upgrade.",
      [],
      true,
      false,
    ),
  ];
}
