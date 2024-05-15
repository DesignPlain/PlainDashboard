import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableTableConstraintsForeignKeyColumnReferences {
  /*
The column in the primary key that are
referenced by the referencingColumn
*/
  ReferencedColumn?: string;

  // The column that composes the foreign key.
  ReferencingColumn?: string;
}

export function Bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ReferencedColumn",
      "The column in the primary key that are\nreferenced by the referencingColumn",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReferencingColumn",
      "The column that composes the foreign key.",
      [],
      true,
      false,
    ),
  ];
}
