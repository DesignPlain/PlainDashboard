import { ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings } from "./ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings";

export interface ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  // Settings for blue-green upgrade strategy. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.
  BlueGreenSettings?: ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;

  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  MaxSurge?: number;

  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  MaxUnavailable?: number;

  // Strategy used for node pool update. Strategy can only be one of BLUE_GREEN or SURGE. The default is value is SURGE.
  Strategy?: string;
}
