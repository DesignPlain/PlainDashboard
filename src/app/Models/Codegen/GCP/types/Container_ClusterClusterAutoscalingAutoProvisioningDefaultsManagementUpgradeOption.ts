import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption {
  // Description of the cluster.
  Description?: string;

  // This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.
  AutoUpgradeStartTime?: string;
}

export function Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AutoUpgradeStartTime",
      "This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.",
      [],
      false,
      false,
    ),
  ];
}
