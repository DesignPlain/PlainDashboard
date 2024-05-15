import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_TableTableConstraintsForeignKeyColumnReferences,
  Bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes,
} from "./Bigquery_TableTableConstraintsForeignKeyColumnReferences";
import {
  Bigquery_TableTableConstraintsForeignKeyReferencedTable,
  Bigquery_TableTableConstraintsForeignKeyReferencedTable_GetTypes,
} from "./Bigquery_TableTableConstraintsForeignKeyReferencedTable";

export interface Bigquery_TableTableConstraintsForeignKey {
  /*
The pair of the foreign key column and primary key column.
Structure is documented below.
*/
  ColumnReferences?: Bigquery_TableTableConstraintsForeignKeyColumnReferences;

  // Set only if the foreign key constraint is named.
  Name?: string;

  /*
The table that holds the primary key
and is referenced by this foreign key.
Structure is documented below.
*/
  ReferencedTable?: Bigquery_TableTableConstraintsForeignKeyReferencedTable;
}

export function Bigquery_TableTableConstraintsForeignKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ColumnReferences",
      "The pair of the foreign key column and primary key column.\nStructure is documented below.",
      Bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Set only if the foreign key constraint is named.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReferencedTable",
      "The table that holds the primary key\nand is referenced by this foreign key.\nStructure is documented below.",
      Bigquery_TableTableConstraintsForeignKeyReferencedTable_GetTypes(),
      true,
      false,
    ),
  ];
}
