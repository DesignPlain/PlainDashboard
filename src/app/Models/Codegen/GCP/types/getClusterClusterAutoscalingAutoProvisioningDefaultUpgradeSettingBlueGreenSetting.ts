import { getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy } from "./getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy";

export interface getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting {
  /*
Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  NodePoolSoakDuration?: string;

  // Standard policy for the blue-green upgrade.
  StandardRolloutPolicies?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}
