import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn {
  // Column name.
  Column?: string;

  /*
The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
*/
  DataType?: string;

  /*
(Output)
Column length.
*/
  Length?: number;

  // Whether or not the column can accept a null value.
  Nullable?: boolean;

  // The ordinal position of the column in the table.
  OrdinalPosition?: number;

  // Whether or not the column represents a primary key.
  PrimaryKey?: boolean;

  // Column collation.
  Collation?: string;
}

export function Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataType",
      "The MySQL data type. Full data types list can be found here:\nhttps://dev.mysql.com/doc/refman/8.0/en/data-types.html",
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
      InputType.Bool,
      "PrimaryKey",
      "Whether or not the column represents a primary key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Collation",
      "Column collation.",
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
