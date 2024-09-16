import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy,
  container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes,
} from './container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy';

export interface container_getClusterNodePoolUpgradeSettingBlueGreenSetting {
  // Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  nodePoolSoakDuration?: string;

  // Standard rollout policy is the default policy for blue-green.
  standardRolloutPolicies?: Array<container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy>;
}

export function container_getClusterNodePoolUpgradeSettingBlueGreenSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'standardRolloutPolicies',
      'Standard rollout policy is the default policy for blue-green.',
      () =>
        container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'nodePoolSoakDuration',
      'Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.',
      () => [],
      true,
      false,
    ),
  ];
}
