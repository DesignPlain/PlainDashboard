import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getContainerRecipeComponentParameter {
  // Value of the component parameter.
  value?: string;

  // Name of the container recipe.
  name?: string;
}

export function imagebuilder_getContainerRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the component parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the container recipe.",
      [],
      true,
      false,
    ),
  ];
}
