import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshift_ParameterGroupParameter {
  // The name of the Redshift parameter.
  name?: string;

  // The value of the Redshift parameter.
  value?: string;
}

export function redshift_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the Redshift parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Redshift parameter.",
      [],
      true,
      false,
    ),
  ];
}
