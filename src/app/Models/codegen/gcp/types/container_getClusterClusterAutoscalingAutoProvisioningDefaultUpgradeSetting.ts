import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes,
} from './container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting';

export interface container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting {
  // Update strategy of the node pool.
  strategy?: string;

  // Settings for blue-green upgrade strategy.
  blueGreenSettings?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting>;

  // The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  maxSurge?: number;

  // The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  maxUnavailable?: number;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'blueGreenSettings',
      'Settings for blue-green upgrade strategy.',
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxSurge',
      'The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxUnavailable',
      'The maximum number of nodes that can be simultaneously unavailable during the upgrade process.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'strategy',
      'Update strategy of the node pool.',
      () => [],
      true,
      false,
    ),
  ];
}
