import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn,
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn_GetTypes,
} from "./Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn";

export interface Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable {
  // Table name.
  Table?: string;

  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  OracleColumns?: Array<Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn>;
}

export function Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Table",
      "Table name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OracleColumns",
      "Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn_GetTypes(),
      false,
      false,
    ),
  ];
}
