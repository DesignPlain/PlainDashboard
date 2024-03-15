import { ConnectionProfileOraclePrivateConnectivity } from "./ConnectionProfileOraclePrivateConnectivity";
import { ConnectionProfileOracleStaticServiceIpConnectivity } from "./ConnectionProfileOracleStaticServiceIpConnectivity";
import { ConnectionProfileOracleForwardSshConnectivity } from "./ConnectionProfileOracleForwardSshConnectivity";
import { ConnectionProfileOracleSsl } from "./ConnectionProfileOracleSsl";

export interface ConnectionProfileOracle {
  /*
Configuration for using a private network to communicate with the source database
Structure is documented below.
*/
  PrivateConnectivity?: ConnectionProfileOraclePrivateConnectivity;

  /*
This object has no nested fields.
Static IP address connectivity configured on service project.
*/
  StaticServiceIpConnectivity?: ConnectionProfileOracleStaticServiceIpConnectivity;

  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  Username?: string;

  // Required. Database service for the Oracle connection.
  DatabaseService?: string;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  ForwardSshConnectivity?: ConnectionProfileOracleForwardSshConnectivity;

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
  Ssl?: ConnectionProfileOracleSsl;

  // Required. The IP or hostname of the source Oracle database.
  Host?: string;

  /*
Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;
}
