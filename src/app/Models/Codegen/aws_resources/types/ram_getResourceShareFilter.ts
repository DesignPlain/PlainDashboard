import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ram_getResourceShareFilter {
  // Name of the tag key to filter on.
  name?: string;

  // Value of the tag key.
  values?: Array<string>;
}

export function ram_getResourceShareFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the tag key to filter on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Value of the tag key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
