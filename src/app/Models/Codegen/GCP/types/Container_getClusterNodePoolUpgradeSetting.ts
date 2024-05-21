import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNodePoolUpgradeSettingBlueGreenSetting,
  container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes,
} from "./container_getClusterNodePoolUpgradeSettingBlueGreenSetting";

export interface container_getClusterNodePoolUpgradeSetting {
  // Settings for BlueGreen node pool upgrade.
  blueGreenSettings?: Array<container_getClusterNodePoolUpgradeSettingBlueGreenSetting>;

  // The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  maxSurge?: number;

  // The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  maxUnavailable?: number;

  // Update strategy for the given nodepool.
  strategy?: string;
}

export function container_getClusterNodePoolUpgradeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "blueGreenSettings",
      "Settings for BlueGreen node pool upgrade.",
      container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSurge",
      "The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxUnavailable",
      "The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "strategy",
      "Update strategy for the given nodepool.",
      [],
      true,
      false,
    ),
  ];
}
