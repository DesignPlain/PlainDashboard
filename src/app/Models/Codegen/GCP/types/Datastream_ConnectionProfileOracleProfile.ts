import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfileOracleProfile {
  // Hostname for the Oracle connection.
  Hostname?: string;

  /*
Password for the Oracle connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the Oracle connection.
  Port?: number;

  // Username for the Oracle connection.
  Username?: string;

  // Connection string attributes
  ConnectionAttributes?: Map<string, string>;

  // Database for the Oracle connection.
  DatabaseService?: string;
}

export function Datastream_ConnectionProfileOracleProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Hostname for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for the Oracle connection.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port for the Oracle connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ConnectionAttributes",
      "Connection string attributes",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatabaseService",
      "Database for the Oracle connection.",
      [],
      true,
      false,
    ),
  ];
}
