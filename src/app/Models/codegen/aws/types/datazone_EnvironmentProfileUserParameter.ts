import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datazone_EnvironmentProfileUserParameter {
  // Name of the environment profile parameter.
  name?: string;

  // Value of the environment profile parameter.
  value?: string;
}

export function datazone_EnvironmentProfileUserParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the environment profile parameter.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the environment profile parameter.',
      () => [],
      false,
      false,
    ),
  ];
}
