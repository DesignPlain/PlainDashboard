import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema,
  datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes,
} from "./datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema";

export interface datastream_StreamBackfillAllPostgresqlExcludedObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  postgresqlSchemas?: Array<datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema>;
}

export function datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlSchemas",
      "PostgreSQL schemas on the server\nStructure is documented below.",
      datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
