import { ConnectionSparkSparkHistoryServerConfig } from "./ConnectionSparkSparkHistoryServerConfig";
import { ConnectionSparkMetastoreServiceConfig } from "./ConnectionSparkMetastoreServiceConfig";

export interface ConnectionSpark {
  /*
(Output)
The account ID of the service created for the purpose of this connection.
*/
  ServiceAccountId?: string;

  /*
Spark History Server configuration for the connection.
Structure is documented below.
*/
  SparkHistoryServerConfig?: ConnectionSparkSparkHistoryServerConfig;

  /*
Dataproc Metastore Service configuration for the connection.
Structure is documented below.
*/
  MetastoreServiceConfig?: ConnectionSparkMetastoreServiceConfig;
}
