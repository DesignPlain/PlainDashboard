import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_getImageRecipesFilter {
  // Name of the filter field. Valid values can be found in the [Image Builder ListImageRecipes API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html).
  name?: string;

  // Set of values that are accepted for the given filter field. Results will be selected if any given value matches.
  values?: Array<string>;
}

export function imagebuilder_getImageRecipesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the filter field. Valid values can be found in the [Image Builder ListImageRecipes API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Set of values that are accepted for the given filter field. Results will be selected if any given value matches.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
