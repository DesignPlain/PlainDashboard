import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable,
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable_GetTypes,
} from "./Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable";

export interface Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  OracleTables?: Array<Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable>;

  // Schema name.
  Schema?: string;
}

export function Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleTables",
      "Tables in the database.\nStructure is documented below.",
      Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable_GetTypes(),
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
