import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema,
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema";

export interface Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema>;
}

export function Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PostgresqlSchemas",
      "PostgreSQL schemas on the server\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
