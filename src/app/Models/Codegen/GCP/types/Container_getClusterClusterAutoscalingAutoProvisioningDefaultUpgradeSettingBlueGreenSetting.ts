import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting {
  /*
Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  NodePoolSoakDuration?: string;

  // Standard policy for the blue-green upgrade.
  StandardRolloutPolicies?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodePoolSoakDuration",
      "Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StandardRolloutPolicies",
      "Standard policy for the blue-green upgrade.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
