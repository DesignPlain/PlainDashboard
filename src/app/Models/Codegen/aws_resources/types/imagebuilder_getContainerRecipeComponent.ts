import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  imagebuilder_getContainerRecipeComponentParameter,
  imagebuilder_getContainerRecipeComponentParameter_GetTypes,
} from "./imagebuilder_getContainerRecipeComponentParameter";

export interface imagebuilder_getContainerRecipeComponent {
  // ARN of the Image Builder Component.
  componentArn?: string;

  // Set of parameters that are used to configure the component.
  parameters?: Array<imagebuilder_getContainerRecipeComponentParameter>;
}

export function imagebuilder_getContainerRecipeComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "componentArn",
      "ARN of the Image Builder Component.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Set of parameters that are used to configure the component.",
      imagebuilder_getContainerRecipeComponentParameter_GetTypes(),
      true,
      false,
    ),
  ];
}
