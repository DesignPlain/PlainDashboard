import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_getContainerRecipeComponentParameter,
  imagebuilder_getContainerRecipeComponentParameter_GetTypes,
} from './imagebuilder_getContainerRecipeComponentParameter';

export interface imagebuilder_getContainerRecipeComponent {
  // Set of parameters that are used to configure the component.
  parameters?: Array<imagebuilder_getContainerRecipeComponentParameter>;

  // ARN of the Image Builder Component.
  componentArn?: string;
}

export function imagebuilder_getContainerRecipeComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'componentArn',
      'ARN of the Image Builder Component.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'Set of parameters that are used to configure the component.',
      () => imagebuilder_getContainerRecipeComponentParameter_GetTypes(),
      true,
      false,
    ),
  ];
}
