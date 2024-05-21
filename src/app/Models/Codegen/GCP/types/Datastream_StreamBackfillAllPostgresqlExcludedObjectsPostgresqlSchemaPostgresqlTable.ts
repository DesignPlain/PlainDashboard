import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn,
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn_GetTypes,
} from "./datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn";

export interface datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable {
  /*
PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  postgresqlColumns?: Array<datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn>;

  // Table name.
  table?: string;
}

export function datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlColumns",
      "PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "table",
      "Table name.",
      [],
      true,
      false,
    ),
  ];
}
