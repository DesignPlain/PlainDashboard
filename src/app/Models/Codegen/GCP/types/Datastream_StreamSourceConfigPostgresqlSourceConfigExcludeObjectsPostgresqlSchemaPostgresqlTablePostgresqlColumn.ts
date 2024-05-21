import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn {
  // The ordinal position of the column in the table.
  ordinalPosition?: number;

  /*
(Output)
Column precision.
*/
  precision?: number;

  // Whether or not the column represents a primary key.
  primaryKey?: boolean;

  /*
(Output)
Column scale.
*/
  scale?: number;

  // Column name.
  column?: string;

  /*
The PostgreSQL data type. Full data types list can be found here:
https://www.postgresql.org/docs/current/datatype.html
*/
  dataType?: string;

  /*
(Output)
Column length.
*/
  length?: number;

  // Whether or not the column can accept a null value.
  nullable?: boolean;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "length",
      "(Output)\nColumn length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "nullable",
      "Whether or not the column can accept a null value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ordinalPosition",
      "The ordinal position of the column in the table.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "precision",
      "(Output)\nColumn precision.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "primaryKey",
      "Whether or not the column represents a primary key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scale",
      "(Output)\nColumn scale.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "column",
      "Column name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataType",
      "The PostgreSQL data type. Full data types list can be found here:\nhttps://www.postgresql.org/docs/current/datatype.html",
      [],
      false,
      false,
    ),
  ];
}
