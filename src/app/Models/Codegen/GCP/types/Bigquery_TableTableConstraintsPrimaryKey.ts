import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableTableConstraintsPrimaryKey {
  // The columns that are composed of the primary key constraint.
  Columns?: Array<string>;
}

export function Bigquery_TableTableConstraintsPrimaryKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Columns",
      "The columns that are composed of the primary key constraint.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
