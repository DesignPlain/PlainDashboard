import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_ConnectionProfileMysqlProfileSslConfig,
  Datastream_ConnectionProfileMysqlProfileSslConfig_GetTypes,
} from "./Datastream_ConnectionProfileMysqlProfileSslConfig";

export interface Datastream_ConnectionProfileMysqlProfile {
  // Username for the MySQL connection.
  Username?: string;

  // Hostname for the MySQL connection.
  Hostname?: string;

  /*
Password for the MySQL connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the MySQL connection.
  Port?: number;

  /*
SSL configuration for the MySQL connection.
Structure is documented below.
*/
  SslConfig?: Datastream_ConnectionProfileMysqlProfileSslConfig;
}

export function Datastream_ConnectionProfileMysqlProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for the MySQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Hostname for the MySQL connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for the MySQL connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port for the MySQL connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SslConfig",
      "SSL configuration for the MySQL connection.\nStructure is documented below.",
      Datastream_ConnectionProfileMysqlProfileSslConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
