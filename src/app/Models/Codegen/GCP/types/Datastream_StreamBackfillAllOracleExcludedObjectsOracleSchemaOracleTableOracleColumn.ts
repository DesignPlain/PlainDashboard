import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn {
  /*
(Output)
The ordinal position of the column in the table.
*/
  OrdinalPosition?: number;

  /*
(Output)
Column precision.
*/
  Precision?: number;

  /*
(Output)
Whether or not the column represents a primary key.
*/
  PrimaryKey?: boolean;

  /*
(Output)
Column scale.
*/
  Scale?: number;

  // Column name.
  Column?: string;

  /*
(Output)
Whether or not the column can accept a null value.
*/
  Nullable?: boolean;

  /*
(Output)
Column length.
*/
  Length?: number;

  /*
The Oracle data type. Full data types list can be found here:
https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
*/
  DataType?: string;

  /*
(Output)
Column encoding.
*/
  Encoding?: string;
}

export function Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Encoding",
      "(Output)\nColumn encoding.",
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
      "(Output)\nWhether or not the column represents a primary key.",
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
      InputType.String,
      "DataType",
      "The Oracle data type. Full data types list can be found here:\nhttps://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "OrdinalPosition",
      "(Output)\nThe ordinal position of the column in the table.",
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
    new DynamicUIProps(
      InputType.Bool,
      "Nullable",
      "(Output)\nWhether or not the column can accept a null value.",
      [],
      false,
      false,
    ),
  ];
}
