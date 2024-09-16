import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mskconnect_ConnectorCapacityAutoscalingScaleInPolicy,
  mskconnect_ConnectorCapacityAutoscalingScaleInPolicy_GetTypes,
} from './mskconnect_ConnectorCapacityAutoscalingScaleInPolicy';
import {
  mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy,
  mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy_GetTypes,
} from './mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy';

export interface mskconnect_ConnectorCapacityAutoscaling {
  // The maximum number of workers allocated to the connector.
  maxWorkerCount?: number;

  // The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.
  mcuCount?: number;

  // The minimum number of workers allocated to the connector.
  minWorkerCount?: number;

  // The scale-in policy for the connector. See `scale_in_policy` Block for details.
  scaleInPolicy?: mskconnect_ConnectorCapacityAutoscalingScaleInPolicy;

  // The scale-out policy for the connector. See `scale_out_policy` Block for details.
  scaleOutPolicy?: mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy;
}

export function mskconnect_ConnectorCapacityAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxWorkerCount',
      'The maximum number of workers allocated to the connector.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'mcuCount',
      'The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minWorkerCount',
      'The minimum number of workers allocated to the connector.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'scaleInPolicy',
      'The scale-in policy for the connector. See `scale_in_policy` Block for details.',
      () => mskconnect_ConnectorCapacityAutoscalingScaleInPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'scaleOutPolicy',
      'The scale-out policy for the connector. See `scale_out_policy` Block for details.',
      () => mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
