import { getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting } from "./getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting";

export interface getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting {
  // Settings for blue-green upgrade strategy.
  BlueGreenSettings?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting>;

  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  MaxSurge?: number;

  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  MaxUnavailable?: number;

  // Update strategy of the node pool.
  Strategy?: string;
}
