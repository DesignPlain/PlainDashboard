import { ConnectionCloudSqlCredential } from "./ConnectionCloudSqlCredential";

export interface ConnectionCloudSql {
  /*
Cloud SQL properties.
Structure is documented below.
*/
  Credential?: ConnectionCloudSqlCredential;

  // Database name.
  Database?: string;

  // Cloud SQL instance ID in the form project:location:instance.
  InstanceId?: string;

  /*
(Output)
When the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.
*/
  ServiceAccountId?: string;

  /*
Type of the Cloud SQL database.
Possible values are: `DATABASE_TYPE_UNSPECIFIED`, `POSTGRES`, `MYSQL`.
*/
  Type?: string;
}
