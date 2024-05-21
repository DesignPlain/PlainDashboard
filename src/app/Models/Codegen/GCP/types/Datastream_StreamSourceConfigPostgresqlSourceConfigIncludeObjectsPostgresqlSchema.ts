import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable,
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable";

export interface datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  postgresqlTables?: Array<datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  schema?: string;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlTables",
      "Tables in the schema.\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes(),
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
