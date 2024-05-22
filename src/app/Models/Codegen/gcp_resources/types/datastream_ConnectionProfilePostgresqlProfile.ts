import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_ConnectionProfilePostgresqlProfile {
  // Database for the PostgreSQL connection.
  database?: string;

  // Hostname for the PostgreSQL connection.
  hostname?: string;

  /*
Password for the PostgreSQL connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Port for the PostgreSQL connection.
  port?: number;

  // Username for the PostgreSQL connection.
  username?: string;
}

export function datastream_ConnectionProfilePostgresqlProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "Database for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostname",
      "Hostname for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password for the PostgreSQL connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port for the PostgreSQL connection.",
      [],
      false,
      false,
    ),
  ];
}
