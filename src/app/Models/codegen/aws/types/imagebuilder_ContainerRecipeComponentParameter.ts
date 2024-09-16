import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_ContainerRecipeComponentParameter {
  // The value for the named component parameter.
  value?: string;

  // The name of the component parameter.
  name?: string;
}

export function imagebuilder_ContainerRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the component parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value for the named component parameter.',
      () => [],
      true,
      false,
    ),
  ];
}
