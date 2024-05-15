import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn {
  /*
(Output)
Column length.
*/
  Length?: number;

  // Whether or not the column can accept a null value.
  Nullable?: boolean;

  // The ordinal position of the column in the table.
  OrdinalPosition?: number;

  /*
(Output)
Column precision.
*/
  Precision?: number;

  // Whether or not the column represents a primary key.
  PrimaryKey?: boolean;

  /*
(Output)
Column scale.
*/
  Scale?: number;

  // Column name.
  Column?: string;

  /*
The PostgreSQL data type. Full data types list can be found here:
https://www.postgresql.org/docs/current/datatype.html
*/
  DataType?: string;
}

export function Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataType",
      "The PostgreSQL data type. Full data types list can be found here:\nhttps://www.postgresql.org/docs/current/datatype.html",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Length",
      "(Output)\nColumn length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Nullable",
      "Whether or not the column can accept a null value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "OrdinalPosition",
      "The ordinal position of the column in the table.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Precision",
      "(Output)\nColumn precision.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PrimaryKey",
      "Whether or not the column represents a primary key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Scale",
      "(Output)\nColumn scale.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Column",
      "Column name.",
      [],
      false,
      false,
    ),
  ];
}
