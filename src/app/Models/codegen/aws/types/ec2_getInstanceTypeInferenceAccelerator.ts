import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getInstanceTypeInferenceAccelerator {
  //
  count?: number;

  //
  manufacturer?: string;

  //
  name?: string;
}

export function ec2_getInstanceTypeInferenceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
    new DynamicUIProps(InputType.Number, 'count', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'manufacturer',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
