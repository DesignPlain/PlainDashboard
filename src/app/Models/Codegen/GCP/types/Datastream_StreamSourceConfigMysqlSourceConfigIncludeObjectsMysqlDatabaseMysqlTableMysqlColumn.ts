import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn {
  /*
(Output)
Column length.
*/
  length?: number;

  // Whether or not the column can accept a null value.
  nullable?: boolean;

  // The ordinal position of the column in the table.
  ordinalPosition?: number;

  // Whether or not the column represents a primary key.
  primaryKey?: boolean;

  // Column collation.
  collation?: string;

  // Column name.
  column?: string;

  /*
The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
*/
  dataType?: string;
}

export function datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ordinalPosition",
      "The ordinal position of the column in the table.",
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
      InputType.String,
      "collation",
      "Column collation.",
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
      "The MySQL data type. Full data types list can be found here:\nhttps://dev.mysql.com/doc/refman/8.0/en/data-types.html",
      [],
      false,
      false,
    ),
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
  ];
}
