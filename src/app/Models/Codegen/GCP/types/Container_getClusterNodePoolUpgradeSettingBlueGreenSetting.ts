import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy,
  Container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes,
} from "./Container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy";

export interface Container_getClusterNodePoolUpgradeSettingBlueGreenSetting {
  // Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  NodePoolSoakDuration?: string;

  // Standard rollout policy is the default policy for blue-green.
  StandardRolloutPolicies?: Array<Container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}

export function Container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodePoolSoakDuration",
      "Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StandardRolloutPolicies",
      "Standard rollout policy is the default policy for blue-green.",
      Container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
