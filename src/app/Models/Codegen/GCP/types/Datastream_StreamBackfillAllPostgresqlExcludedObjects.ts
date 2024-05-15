import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema,
  Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes,
} from "./Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema";

export interface Datastream_StreamBackfillAllPostgresqlExcludedObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema>;
}

export function Datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PostgresqlSchemas",
      "PostgreSQL schemas on the server\nStructure is documented below.",
      Datastream_StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
