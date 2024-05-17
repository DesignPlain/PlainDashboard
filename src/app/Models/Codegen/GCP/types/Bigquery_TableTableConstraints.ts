import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_TableTableConstraintsForeignKey,
  Bigquery_TableTableConstraintsForeignKey_GetTypes,
} from "./Bigquery_TableTableConstraintsForeignKey";
import {
  Bigquery_TableTableConstraintsPrimaryKey,
  Bigquery_TableTableConstraintsPrimaryKey_GetTypes,
} from "./Bigquery_TableTableConstraintsPrimaryKey";

export interface Bigquery_TableTableConstraints {
  /*
Present only if the table has a foreign key.
The foreign key is not enforced.
Structure is documented below.
*/
  ForeignKeys?: Array<Bigquery_TableTableConstraintsForeignKey>;

  /*
Represents the primary key constraint
on a table's columns. Present only if the table has a primary key.
The primary key is not enforced.
Structure is documented below.
*/
  PrimaryKey?: Bigquery_TableTableConstraintsPrimaryKey;
}

export function Bigquery_TableTableConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ForeignKeys",
      "Present only if the table has a foreign key.\nThe foreign key is not enforced.\nStructure is documented below.",
      Bigquery_TableTableConstraintsForeignKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrimaryKey",
      "Represents the primary key constraint\non a table's columns. Present only if the table has a primary key.\nThe primary key is not enforced.\nStructure is documented below.",
      Bigquery_TableTableConstraintsPrimaryKey_GetTypes(),
      false,
      false,
    ),
  ];
}
