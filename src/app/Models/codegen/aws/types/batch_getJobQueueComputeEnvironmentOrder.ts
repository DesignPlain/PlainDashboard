import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobQueueComputeEnvironmentOrder {
  //
  computeEnvironment?: string;

  //
  order?: number;
}

export function batch_getJobQueueComputeEnvironmentOrder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'computeEnvironment',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'order', '', () => [], true, false),
  ];
}
