import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeTargetParametersBatchJobParametersArrayProperties {
  // The size of the array, if this is an array batch job. Minimum value of 2. Maximum value of 10,000.
  size?: number;
}

export function pipes_PipeTargetParametersBatchJobParametersArrayProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'size',
      'The size of the array, if this is an array batch job. Minimum value of 2. Maximum value of 10,000.',
      () => [],
      false,
      false,
    ),
  ];
}
