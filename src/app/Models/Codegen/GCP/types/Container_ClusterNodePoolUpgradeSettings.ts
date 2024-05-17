import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings,
  Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings_GetTypes,
} from "./Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings";

export interface Container_ClusterNodePoolUpgradeSettings {
  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  MaxSurge?: number;

  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process. To be used when strategy is set to SURGE. Default is 0.
  MaxUnavailable?: number;

  // Strategy used for node pool update. Strategy can only be one of BLUE_GREEN or SURGE. The default is value is SURGE.
  Strategy?: string;

  // Settings for blue-green upgrade strategy. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.
  BlueGreenSettings?: Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings;
}

export function Container_ClusterNodePoolUpgradeSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Strategy",
      "Strategy used for node pool update. Strategy can only be one of BLUE_GREEN or SURGE. The default is value is SURGE.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BlueGreenSettings",
      "Settings for blue-green upgrade strategy. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.",
      Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSurge",
      "The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. To be used when strategy is set to SURGE. Default is 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailable",
      "The maximum number of nodes that can be simultaneously unavailable during the upgrade process. To be used when strategy is set to SURGE. Default is 0.",
      [],
      false,
      false,
    ),
  ];
}
