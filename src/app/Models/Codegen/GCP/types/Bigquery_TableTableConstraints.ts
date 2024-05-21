import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_TableTableConstraintsForeignKey,
  bigquery_TableTableConstraintsForeignKey_GetTypes,
} from "./bigquery_TableTableConstraintsForeignKey";
import {
  bigquery_TableTableConstraintsPrimaryKey,
  bigquery_TableTableConstraintsPrimaryKey_GetTypes,
} from "./bigquery_TableTableConstraintsPrimaryKey";

export interface bigquery_TableTableConstraints {
  /*
Present only if the table has a foreign key.
The foreign key is not enforced.
Structure is documented below.
*/
  foreignKeys?: Array<bigquery_TableTableConstraintsForeignKey>;

  /*
Represents the primary key constraint
on a table's columns. Present only if the table has a primary key.
The primary key is not enforced.
Structure is documented below.
*/
  primaryKey?: bigquery_TableTableConstraintsPrimaryKey;
}

export function bigquery_TableTableConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "foreignKeys",
      "Present only if the table has a foreign key.\nThe foreign key is not enforced.\nStructure is documented below.",
      bigquery_TableTableConstraintsForeignKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "primaryKey",
      "Represents the primary key constraint\non a table's columns. Present only if the table has a primary key.\nThe primary key is not enforced.\nStructure is documented below.",
      bigquery_TableTableConstraintsPrimaryKey_GetTypes(),
      false,
      false,
    ),
  ];
}
