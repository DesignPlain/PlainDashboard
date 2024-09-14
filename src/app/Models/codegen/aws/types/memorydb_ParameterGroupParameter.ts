import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface memorydb_ParameterGroupParameter {
  // The name of the parameter.
  name?: string;

  // The value of the parameter.
  value?: string;
}

export function memorydb_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
