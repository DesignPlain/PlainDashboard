import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_ConnectionCloudSqlCredential,
  Bigquery_ConnectionCloudSqlCredential_GetTypes,
} from "./Bigquery_ConnectionCloudSqlCredential";

export interface Bigquery_ConnectionCloudSql {
  /*
Cloud SQL properties.
Structure is documented below.
*/
  Credential?: Bigquery_ConnectionCloudSqlCredential;

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

export function Bigquery_ConnectionCloudSql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Credential",
      "Cloud SQL properties.\nStructure is documented below.",
      Bigquery_ConnectionCloudSqlCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Database",
      "Database name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceId",
      "Cloud SQL instance ID in the form project:location:instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountId",
      "(Output)\nWhen the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of the Cloud SQL database.\nPossible values are: `DATABASE_TYPE_UNSPECIFIED`, `POSTGRES`, `MYSQL`.",
      [],
      true,
      false,
    ),
  ];
}
