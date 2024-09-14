import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datastream_ConnectionProfileMysqlProfileSslConfig,
  datastream_ConnectionProfileMysqlProfileSslConfig_GetTypes,
} from "./datastream_ConnectionProfileMysqlProfileSslConfig";

export interface datastream_ConnectionProfileMysqlProfile {
  // Hostname for the MySQL connection.
  hostname?: string;

  /*
Password for the MySQL connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Port for the MySQL connection.
  port?: number;

  /*
SSL configuration for the MySQL connection.
Structure is documented below.
*/
  sslConfig?: datastream_ConnectionProfileMysqlProfileSslConfig;

  // Username for the MySQL connection.
  username?: string;
}

export function datastream_ConnectionProfileMysqlProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for the MySQL connection.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostname",
      "Hostname for the MySQL connection.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password for the MySQL connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port for the MySQL connection.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sslConfig",
      "SSL configuration for the MySQL connection.\nStructure is documented below.",
      () => datastream_ConnectionProfileMysqlProfileSslConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
