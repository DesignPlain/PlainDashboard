import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface datastream_ConnectionProfileOracleProfile {
  // Connection string attributes
  connectionAttributes?: Map<string, string>;

  // Database for the Oracle connection.
  databaseService?: string;

  // Hostname for the Oracle connection.
  hostname?: string;

  /*
Password for the Oracle connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Port for the Oracle connection.
  port?: number;

  // Username for the Oracle connection.
  username?: string;
}

export function datastream_ConnectionProfileOracleProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "connectionAttributes",
      "Connection string attributes",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseService",
      "Database for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostname",
      "Hostname for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password for the Oracle connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port for the Oracle connection.",
      [],
      false,
      false,
    ),
  ];
}
