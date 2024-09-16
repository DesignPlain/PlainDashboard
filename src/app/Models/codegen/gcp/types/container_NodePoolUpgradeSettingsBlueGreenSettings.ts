import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes,
} from './container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy';

export interface container_NodePoolUpgradeSettingsBlueGreenSettings {
  /*
Time needed after draining the entire blue pool.
After this period, the blue pool will be cleaned up.
*/
  nodePoolSoakDuration?: string;

  // Specifies the standard policy settings for blue-green upgrades.
  standardRolloutPolicy?: container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function container_NodePoolUpgradeSettingsBlueGreenSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nodePoolSoakDuration',
      'Time needed after draining the entire blue pool.\nAfter this period, the blue pool will be cleaned up.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'standardRolloutPolicy',
      'Specifies the standard policy settings for blue-green upgrades.',
      () =>
        container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
