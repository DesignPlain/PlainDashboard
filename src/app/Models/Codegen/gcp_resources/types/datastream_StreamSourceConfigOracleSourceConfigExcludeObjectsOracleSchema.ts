import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable,
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable";

export interface datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  oracleTables?: Array<datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable>;

  // Schema name.
  schema?: string;
}

export function datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oracleTables",
      "Tables in the database.\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "Schema name.",
      [],
      true,
      false,
    ),
  ];
}
