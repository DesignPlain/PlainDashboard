import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getImageRecipeComponentParameter {
  // Name of the image recipe.
  name?: string;

  // Value of the component parameter.
  value?: string;
}

export function imagebuilder_getImageRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the image recipe.",
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
