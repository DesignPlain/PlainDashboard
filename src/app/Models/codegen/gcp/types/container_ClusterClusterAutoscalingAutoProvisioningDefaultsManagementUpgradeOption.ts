import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption {
  // This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.
  autoUpgradeStartTime?: string;

  // Description of the cluster.
  description?: string;
}

export function container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoUpgradeStartTime",
      "This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the cluster.",
      () => [],
      false,
      false,
    ),
  ];
}
