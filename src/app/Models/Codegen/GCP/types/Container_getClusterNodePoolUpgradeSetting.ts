import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolUpgradeSettingBlueGreenSetting,
  Container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes,
} from "./Container_getClusterNodePoolUpgradeSettingBlueGreenSetting";

export interface Container_getClusterNodePoolUpgradeSetting {
  // Settings for BlueGreen node pool upgrade.
  BlueGreenSettings?: Array<Container_getClusterNodePoolUpgradeSettingBlueGreenSetting>;

  // The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  MaxSurge?: number;

  // The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  MaxUnavailable?: number;

  // Update strategy for the given nodepool.
  Strategy?: string;
}

export function Container_getClusterNodePoolUpgradeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "BlueGreenSettings",
      "Settings for BlueGreen node pool upgrade.",
      Container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSurge",
      "The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailable",
      "The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Strategy",
      "Update strategy for the given nodepool.",
      [],
      true,
      false,
    ),
  ];
}
