import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_TableTableConstraintsPrimaryKey {
  // The columns that are composed of the primary key constraint.
  columns?: Array<string>;
}

export function bigquery_TableTableConstraintsPrimaryKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "The columns that are composed of the primary key constraint.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
