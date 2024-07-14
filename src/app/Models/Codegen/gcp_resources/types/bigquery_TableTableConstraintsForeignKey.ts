import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigquery_TableTableConstraintsForeignKeyColumnReferences,
  bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes,
} from "./bigquery_TableTableConstraintsForeignKeyColumnReferences";
import {
  bigquery_TableTableConstraintsForeignKeyReferencedTable,
  bigquery_TableTableConstraintsForeignKeyReferencedTable_GetTypes,
} from "./bigquery_TableTableConstraintsForeignKeyReferencedTable";

export interface bigquery_TableTableConstraintsForeignKey {
  /*
The pair of the foreign key column and primary key column.
Structure is documented below.
*/
  columnReferences?: bigquery_TableTableConstraintsForeignKeyColumnReferences;

  // Set only if the foreign key constraint is named.
  name?: string;

  /*
The table that holds the primary key
and is referenced by this foreign key.
Structure is documented below.
*/
  referencedTable?: bigquery_TableTableConstraintsForeignKeyReferencedTable;
}

export function bigquery_TableTableConstraintsForeignKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Set only if the foreign key constraint is named.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "referencedTable",
      "The table that holds the primary key\nand is referenced by this foreign key.\nStructure is documented below.",
      bigquery_TableTableConstraintsForeignKeyReferencedTable_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "columnReferences",
      "The pair of the foreign key column and primary key column.\nStructure is documented below.",
      bigquery_TableTableConstraintsForeignKeyColumnReferences_GetTypes(),
      true,
      false,
    ),
  ];
}
