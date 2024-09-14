import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes,
} from "./container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy";

export interface container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting {
  /*
Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  nodePoolSoakDuration?: string;

  // Standard policy for the blue-green upgrade.
  standardRolloutPolicies?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nodePoolSoakDuration",
      "Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "standardRolloutPolicies",
      "Standard policy for the blue-green upgrade.",
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
