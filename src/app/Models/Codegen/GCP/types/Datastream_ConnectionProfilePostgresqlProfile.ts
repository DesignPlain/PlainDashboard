import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfilePostgresqlProfile {
  // Port for the PostgreSQL connection.
  Port?: number;

  // Username for the PostgreSQL connection.
  Username?: string;

  // Database for the PostgreSQL connection.
  Database?: string;

  // Hostname for the PostgreSQL connection.
  Hostname?: string;

  /*
Password for the PostgreSQL connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;
}

export function Datastream_ConnectionProfilePostgresqlProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port for the PostgreSQL connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Database",
      "Database for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Hostname for the PostgreSQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for the PostgreSQL connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
  ];
}
