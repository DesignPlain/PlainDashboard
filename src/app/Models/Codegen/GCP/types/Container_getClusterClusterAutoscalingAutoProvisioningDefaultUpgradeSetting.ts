import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting {
  // Settings for blue-green upgrade strategy.
  BlueGreenSettings?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting>;

  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  MaxSurge?: number;

  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  MaxUnavailable?: number;

  // Update strategy of the node pool.
  Strategy?: string;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxSurge",
      "The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailable",
      "The maximum number of nodes that can be simultaneously unavailable during the upgrade process.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Strategy",
      "Update strategy of the node pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BlueGreenSettings",
      "Settings for blue-green upgrade strategy.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes(),
      true,
      false,
    ),
  ];
}
