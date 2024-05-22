import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable,
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable";

export interface datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  postgresqlTables?: Array<datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  schema?: string;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlTables",
      "Tables in the schema.\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "Database name.",
      [],
      true,
      false,
    ),
  ];
}
