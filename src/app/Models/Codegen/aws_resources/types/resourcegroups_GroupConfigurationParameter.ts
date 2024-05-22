import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface resourcegroups_GroupConfigurationParameter {
  // The name of the group configuration parameter.
  name?: string;

  // The value or values to be used for the specified parameter.
  values?: Array<string>;
}

export function resourcegroups_GroupConfigurationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the group configuration parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The value or values to be used for the specified parameter.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
