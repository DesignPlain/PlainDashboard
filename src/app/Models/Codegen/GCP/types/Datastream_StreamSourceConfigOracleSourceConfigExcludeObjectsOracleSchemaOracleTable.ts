import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn,
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn";

export interface Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable {
  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  OracleColumns?: Array<Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn>;

  // Table name.
  Table?: string;
}

export function Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleColumns",
      "Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Table",
      "Table name.",
      [],
      true,
      false,
    ),
  ];
}
