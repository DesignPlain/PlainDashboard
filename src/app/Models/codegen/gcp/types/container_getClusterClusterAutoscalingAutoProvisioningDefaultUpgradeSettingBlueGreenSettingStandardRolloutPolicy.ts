import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  batchNodeCount?: number;

  // Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  batchPercentage?: number;

  /*
Soak time after each batch gets drained.

																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  batchSoakDuration?: string;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'batchPercentage',
      'Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'batchSoakDuration',
      'Soak time after each batch gets drained.\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tA duration in seconds with up to nine fractional digits, ending with \'s\'. Example: "3.5s".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchNodeCount',
      'Number of blue nodes to drain in a batch.',
      () => [],
      true,
      false,
    ),
  ];
}
