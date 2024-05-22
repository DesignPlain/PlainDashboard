import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_ContainerRecipeComponentParameter {
  // The name of the component parameter.
  name?: string;

  // The value for the named component parameter.
  value?: string;
}

export function imagebuilder_ContainerRecipeComponentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the component parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value for the named component parameter.",
      [],
      true,
      false,
    ),
  ];
}
