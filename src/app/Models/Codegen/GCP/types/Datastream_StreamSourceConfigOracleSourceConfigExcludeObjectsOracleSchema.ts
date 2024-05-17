import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable,
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable";

export interface Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  OracleTables?: Array<Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable>;

  // Schema name.
  Schema?: string;
}

export function Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleTables",
      "Tables in the database.\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schema",
      "Schema name.",
      [],
      true,
      false,
    ),
  ];
}
