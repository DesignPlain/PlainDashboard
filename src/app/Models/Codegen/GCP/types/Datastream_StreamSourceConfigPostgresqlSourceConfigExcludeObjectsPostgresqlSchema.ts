import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable,
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable";

export interface Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  PostgresqlTables?: Array<Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  Schema?: string;
}

export function Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PostgresqlTables",
      "Tables in the schema.\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schema",
      "Database name.",
      [],
      true,
      false,
    ),
  ];
}
