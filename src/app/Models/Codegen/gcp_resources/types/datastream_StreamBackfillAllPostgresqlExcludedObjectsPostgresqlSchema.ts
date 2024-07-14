import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable,
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable_GetTypes,
} from "./datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable";

export interface datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  postgresqlTables?: Array<datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  schema?: string;
}

export function datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlTables",
      "Tables in the schema.\nStructure is documented below.",
      datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable_GetTypes(),
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
