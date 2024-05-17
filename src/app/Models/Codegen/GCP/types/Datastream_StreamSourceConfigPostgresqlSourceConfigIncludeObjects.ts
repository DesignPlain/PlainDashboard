import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema,
  Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema";

export interface Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema>;
}

export function Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PostgresqlSchemas",
      "PostgreSQL schemas on the server\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
