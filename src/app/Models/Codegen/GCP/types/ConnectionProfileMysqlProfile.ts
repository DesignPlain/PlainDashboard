import { ConnectionProfileMysqlProfileSslConfig } from "./ConnectionProfileMysqlProfileSslConfig";

export interface ConnectionProfileMysqlProfile {
  /*
SSL configuration for the MySQL connection.
Structure is documented below.
*/
  SslConfig?: ConnectionProfileMysqlProfileSslConfig;

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
}
