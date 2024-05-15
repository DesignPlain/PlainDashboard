import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity,
  Databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity";
import {
  Databasemigrationservice_ConnectionProfileOracleSsl,
  Databasemigrationservice_ConnectionProfileOracleSsl_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileOracleSsl";
import {
  Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity,
  Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity";
import {
  Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity,
  Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity";

export interface Databasemigrationservice_ConnectionProfileOracle {
  // Required. Database service for the Oracle connection.
  DatabaseService?: string;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  ForwardSshConnectivity?: Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity;

  // Required. The IP or hostname of the source Oracle database.
  Host?: string;

  /*
Configuration for using a private network to communicate with the source database
Structure is documented below.
*/
  PrivateConnectivity?: Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity;

  /*
This object has no nested fields.
Static IP address connectivity configured on service project.
*/
  StaticServiceIpConnectivity?: Databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity;

  /*
Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
(Output)
Output only. Indicates If this connection profile password is stored.
*/
  PasswordSet?: boolean;

  // Required. The network port of the source Oracle database.
  Port?: number;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  Ssl?: Databasemigrationservice_ConnectionProfileOracleSsl;

  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  Username?: string;
}

export function Databasemigrationservice_ConnectionProfileOracle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Required. The network port of the source Oracle database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Ssl",
      "SSL configuration for the destination to connect to the source database.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileOracleSsl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatabaseService",
      "Required. Database service for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "Required. The IP or hostname of the source Oracle database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrivateConnectivity",
      "Configuration for using a private network to communicate with the source database\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StaticServiceIpConnectivity",
      "This object has no nested fields.\nStatic IP address connectivity configured on service project.",
      Databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.\nThis field is not returned on request, and the value is encrypted when stored in Database Migration Service.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PasswordSet",
      "(Output)\nOutput only. Indicates If this connection profile password is stored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ForwardSshConnectivity",
      "SSL configuration for the destination to connect to the source database.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes(),
      false,
      false,
    ),
  ];
}
