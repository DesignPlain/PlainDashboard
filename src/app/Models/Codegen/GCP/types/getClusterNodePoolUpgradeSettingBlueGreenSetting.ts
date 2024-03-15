import { getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy } from "./getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy";

export interface getClusterNodePoolUpgradeSettingBlueGreenSetting {
  // Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  NodePoolSoakDuration?: string;

  // Standard rollout policy is the default policy for blue-green.
  StandardRolloutPolicies?: Array<getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}
