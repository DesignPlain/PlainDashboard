import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_getImageRecipeComponentParameter,
  imagebuilder_getImageRecipeComponentParameter_GetTypes,
} from './imagebuilder_getImageRecipeComponentParameter';

export interface imagebuilder_getImageRecipeComponent {
  // Set of parameters that are used to configure the component.
  parameters?: Array<imagebuilder_getImageRecipeComponentParameter>;

  // ARN of the Image Builder Component.
  componentArn?: string;
}

export function imagebuilder_getImageRecipeComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'Set of parameters that are used to configure the component.',
      () => imagebuilder_getImageRecipeComponentParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'componentArn',
      'ARN of the Image Builder Component.',
      () => [],
      true,
      false,
    ),
  ];
}
