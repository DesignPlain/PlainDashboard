import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigquery_TableTableConstraintsForeignKeyColumnReferences {
  /*
The column in the primary key that are
referenced by the referencingColumn
*/
  referencedColumn?: string;

  // The column that composes the foreign key.
  referencingColumn?: string;
}

export function bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "referencingColumn",
      "The column that composes the foreign key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "referencedColumn",
      "The column in the primary key that are\nreferenced by the referencingColumn",
      () => [],
      true,
      false,
    ),
  ];
}
