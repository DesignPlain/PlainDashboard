import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn {
  /*
(Output)
Column length.
*/
  length?: number;

  /*
(Output)
Whether or not the column can accept a null value.
*/
  nullable?: boolean;

  /*
(Output)
Whether or not the column represents a primary key.
*/
  primaryKey?: boolean;

  // Column name.
  column?: string;

  /*
The Oracle data type. Full data types list can be found here:
https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
*/
  dataType?: string;

  /*
(Output)
Column precision.
*/
  precision?: number;

  /*
(Output)
Column scale.
*/
  scale?: number;

  /*
(Output)
Column encoding.
*/
  encoding?: string;

  /*
(Output)
The ordinal position of the column in the table.
*/
  ordinalPosition?: number;
}

export function datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes(): DynamicUIProps[] {
  return [
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
      "The Oracle data type. Full data types list can be found here:\nhttps://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ordinalPosition",
      "(Output)\nThe ordinal position of the column in the table.",
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
      "(Output)\nWhether or not the column can accept a null value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "primaryKey",
      "(Output)\nWhether or not the column represents a primary key.",
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
      InputType.Number,
      "scale",
      "(Output)\nColumn scale.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encoding",
      "(Output)\nColumn encoding.",
      [],
      false,
      false,
    ),
  ];
}
