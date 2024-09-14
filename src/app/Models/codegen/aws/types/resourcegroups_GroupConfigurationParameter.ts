import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface resourcegroups_GroupConfigurationParameter {
  // The value or values to be used for the specified parameter.
  values?: Array<string>;

  // The name of the group configuration parameter.
  name?: string;
}

export function resourcegroups_GroupConfigurationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The value or values to be used for the specified parameter.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the group configuration parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
