import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema,
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema";

export interface datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  postgresqlSchemas?: Array<datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema>;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "postgresqlSchemas",
      "PostgreSQL schemas on the server\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
