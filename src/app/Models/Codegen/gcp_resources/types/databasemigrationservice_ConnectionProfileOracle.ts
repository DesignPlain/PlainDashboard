import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  databasemigrationservice_ConnectionProfileOraclePrivateConnectivity,
  databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes,
} from "./databasemigrationservice_ConnectionProfileOraclePrivateConnectivity";
import {
  databasemigrationservice_ConnectionProfileOracleSsl,
  databasemigrationservice_ConnectionProfileOracleSsl_GetTypes,
} from "./databasemigrationservice_ConnectionProfileOracleSsl";
import {
  databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity,
  databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity_GetTypes,
} from "./databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity";
import {
  databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity,
  databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes,
} from "./databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity";

export interface databasemigrationservice_ConnectionProfileOracle {
  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  forwardSshConnectivity?: databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity;

  /*
Configuration for using a private network to communicate with the source database
Structure is documented below.
*/
  privateConnectivity?: databasemigrationservice_ConnectionProfileOraclePrivateConnectivity;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  ssl?: databasemigrationservice_ConnectionProfileOracleSsl;

  /*
This object has no nested fields.
Static IP address connectivity configured on service project.
*/
  staticServiceIpConnectivity?: databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity;

  // Required. Database service for the Oracle connection.
  databaseService?: string;

  // Required. The IP or hostname of the source Oracle database.
  host?: string;

  /*
Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  /*
(Output)
Output only. Indicates If this connection profile password is stored.
*/
  passwordSet?: boolean;

  // Required. The network port of the source Oracle database.
  port?: number;

  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  username?: string;
}

export function databasemigrationservice_ConnectionProfileOracle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "forwardSshConnectivity",
      "SSL configuration for the destination to connect to the source database.\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "privateConnectivity",
      "Configuration for using a private network to communicate with the source database\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "staticServiceIpConnectivity",
      "This object has no nested fields.\nStatic IP address connectivity configured on service project.",
      databasemigrationservice_ConnectionProfileOracleStaticServiceIpConnectivity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Required. The network port of the source Oracle database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "passwordSet",
      "(Output)\nOutput only. Indicates If this connection profile password is stored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssl",
      "SSL configuration for the destination to connect to the source database.\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileOracleSsl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseService",
      "Required. Database service for the Oracle connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "Required. The IP or hostname of the source Oracle database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.\nThis field is not returned on request, and the value is encrypted when stored in Database Migration Service.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      true,
    ),
  ];
}
