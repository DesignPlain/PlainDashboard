import { ConnectionProfileMysqlSsl } from "./ConnectionProfileMysqlSsl";

export interface ConnectionProfileMysql {
  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  Username?: string;

  // If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
  CloudSqlId?: string;

  // Required. The IP or hostname of the source MySQL database.
  Host?: string;

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

  // Required. The network port of the source MySQL database.
  Port?: number;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  Ssl?: ConnectionProfileMysqlSsl;
}
