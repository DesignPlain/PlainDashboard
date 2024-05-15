import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable,
  Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable_GetTypes,
} from "./Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable";

export interface Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  PostgresqlTables?: Array<Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  Schema?: string;
}

export function Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PostgresqlTables",
      "Tables in the schema.\nStructure is documented below.",
      Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable_GetTypes(),
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
