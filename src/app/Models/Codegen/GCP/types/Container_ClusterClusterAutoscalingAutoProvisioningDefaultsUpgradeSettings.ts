import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings,
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings";

export interface container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  maxUnavailable?: number;

  // Strategy used for node pool update. Strategy can only be one of BLUE_GREEN or SURGE. The default is value is SURGE.
  strategy?: string;

  // Settings for blue-green upgrade strategy. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.
  blueGreenSettings?: container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;

  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  maxSurge?: number;
}

export function container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "strategy",
      "Strategy used for node pool update. Strategy can only be one of BLUE_GREEN or SURGE. The default is value is SURGE.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "blueGreenSettings",
      "Settings for blue-green upgrade strategy. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSurge",
      "The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. To be used when strategy is set to SURGE. Default is 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxUnavailable",
      "The maximum number of nodes that can be simultaneously unavailable during the upgrade process. To be used when strategy is set to SURGE. Default is 0.",
      [],
      false,
      false,
    ),
  ];
}
