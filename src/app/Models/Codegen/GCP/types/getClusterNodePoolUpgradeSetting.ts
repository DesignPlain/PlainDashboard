import { getClusterNodePoolUpgradeSettingBlueGreenSetting } from "./getClusterNodePoolUpgradeSettingBlueGreenSetting";

export interface getClusterNodePoolUpgradeSetting {
  // Settings for BlueGreen node pool upgrade.
  BlueGreenSettings?: Array<getClusterNodePoolUpgradeSettingBlueGreenSetting>;

  // The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  MaxSurge?: number;

  // The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  MaxUnavailable?: number;

  // Update strategy for the given nodepool.
  Strategy?: string;
}
