import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getContainerRecipeComponentParameter {
  // Name of the container recipe.
  name?: string;

  // Value of the component parameter.
  value?: string;
}

export function imagebuilder_getContainerRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the container recipe.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the component parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
