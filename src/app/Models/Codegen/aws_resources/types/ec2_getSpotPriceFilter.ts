import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getSpotPriceFilter {
  // List of one or more values for the filter.
  values?: Array<string>;

  // Name of the filter.
  name?: string;
}

export function ec2_getSpotPriceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "List of one or more values for the filter.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter.",
      [],
      true,
      false,
    ),
  ];
}
