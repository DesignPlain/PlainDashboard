import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface resourcegroups_GroupResourceQuery {
  // The resource query as a JSON string.
  query?: string;

  // The type of the resource query. Defaults to `TAG_FILTERS_1_0`.
  type?: string;
}

export function resourcegroups_GroupResourceQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "query",
      "The resource query as a JSON string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the resource query. Defaults to `TAG_FILTERS_1_0`.",
      [],
      false,
      false,
    ),
  ];
}
