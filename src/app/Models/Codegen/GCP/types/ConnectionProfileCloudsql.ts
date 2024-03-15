import { ConnectionProfileCloudsqlSettings } from "./ConnectionProfileCloudsqlSettings";

export interface ConnectionProfileCloudsql {
  /*
(Output)
Output only. The Cloud SQL instance ID that this connection profile is associated with.
*/
  CloudSqlId?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's private IP.
*/
  PrivateIp?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's public IP.
*/
  PublicIp?: string;

  /*
Immutable. Metadata used to create the destination Cloud SQL database.
Structure is documented below.
*/
  Settings?: ConnectionProfileCloudsqlSettings;
}
