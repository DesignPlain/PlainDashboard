import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn,
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn";

export interface datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable {
  // Table name.
  table?: string;

  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  oracleColumns?: Array<datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn>;
}

export function datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "table",
      "Table name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oracleColumns",
      "Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes(),
      false,
      false,
    ),
  ];
}
