import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_ImageRecipeComponentParameter {
  // The name of the component parameter.
  name?: string;

  // The value for the named component parameter.
  value?: string;
}

export function imagebuilder_ImageRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the component parameter.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value for the named component parameter.',
      () => [],
      true,
      true,
    ),
  ];
}
