import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption {
  // This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.
  autoUpgradeStartTime?: string;

  // This field is set when upgrades are about to commence with the description of the upgrade.
  description?: string;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoUpgradeStartTime",
      "This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "This field is set when upgrades are about to commence with the description of the upgrade.",
      [],
      true,
      false,
    ),
  ];
}
