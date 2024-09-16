import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_ContainerRecipeComponentParameter,
  imagebuilder_ContainerRecipeComponentParameter_GetTypes,
} from './imagebuilder_ContainerRecipeComponentParameter';

export interface imagebuilder_ContainerRecipeComponent {
  // Amazon Resource Name (ARN) of the Image Builder Component to associate.
  componentArn?: string;

  // Configuration block(s) for parameters to configure the component. Detailed below.
  parameters?: Array<imagebuilder_ContainerRecipeComponentParameter>;
}

export function imagebuilder_ContainerRecipeComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'componentArn',
      'Amazon Resource Name (ARN) of the Image Builder Component to associate.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'Configuration block(s) for parameters to configure the component. Detailed below.',
      () => imagebuilder_ContainerRecipeComponentParameter_GetTypes(),
      false,
      true,
    ),
  ];
}
