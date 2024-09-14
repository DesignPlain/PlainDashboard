import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getInstanceTypesFilter {
  // Name of the filter.
  name?: string;

  // List of one or more values for the filter.
  values?: Array<string>;
}

export function ec2_getInstanceTypesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "List of one or more values for the filter.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
