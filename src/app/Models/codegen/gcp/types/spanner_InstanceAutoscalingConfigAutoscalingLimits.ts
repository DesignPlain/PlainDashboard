import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface spanner_InstanceAutoscalingConfigAutoscalingLimits {
  /*
Specifies number of nodes allocated to the instance. If set, this number
should be greater than or equal to 1.
*/
  minNodes?: number;

  /*
Specifies minimum number of processing units allocated to the instance.
If set, this number should be multiples of 1000.
*/
  minProcessingUnits?: number;

  /*
Specifies maximum number of nodes allocated to the instance. If set, this number
should be greater than or equal to min_nodes.
*/
  maxNodes?: number;

  /*
Specifies maximum number of processing units allocated to the instance.
If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.
*/
  maxProcessingUnits?: number;
}

export function spanner_InstanceAutoscalingConfigAutoscalingLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'minNodes',
      'Specifies number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to 1.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minProcessingUnits',
      'Specifies minimum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxNodes',
      'Specifies maximum number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to min_nodes.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxProcessingUnits',
      'Specifies maximum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000 and be greater than or equal to\nmin_processing_units.',
      () => [],
      false,
      false,
    ),
  ];
}
