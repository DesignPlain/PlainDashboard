import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redshift_ParameterGroupParameter {
  // The value of the Redshift parameter.
  value?: string;

  // The name of the Redshift parameter.
  name?: string;
}

export function redshift_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Redshift parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the Redshift parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
