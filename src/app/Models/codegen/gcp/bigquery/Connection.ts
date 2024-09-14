import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_ConnectionAzure,
  bigquery_ConnectionAzure_GetTypes,
} from "../types/bigquery_ConnectionAzure";
import {
  bigquery_ConnectionCloudResource,
  bigquery_ConnectionCloudResource_GetTypes,
} from "../types/bigquery_ConnectionCloudResource";
import {
  bigquery_ConnectionCloudSpanner,
  bigquery_ConnectionCloudSpanner_GetTypes,
} from "../types/bigquery_ConnectionCloudSpanner";
import {
  bigquery_ConnectionSpark,
  bigquery_ConnectionSpark_GetTypes,
} from "../types/bigquery_ConnectionSpark";
import {
  bigquery_ConnectionAws,
  bigquery_ConnectionAws_GetTypes,
} from "../types/bigquery_ConnectionAws";
import {
  bigquery_ConnectionCloudSql,
  bigquery_ConnectionCloudSql_GetTypes,
} from "../types/bigquery_ConnectionCloudSql";

export interface ConnectionArgs {
  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  azure?: bigquery_ConnectionAzure;

  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  cloudResource?: bigquery_ConnectionCloudResource;

  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  cloudSpanner?: bigquery_ConnectionCloudSpanner;

  // Optional connection id that should be assigned to the created connection.
  connectionId?: string;

  // A descriptive name for the connection
  friendlyName?: string;

  /*
The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2
*/
  location?: string;

  /*
Container for connection properties to execute stored procedures for Apache Spark. resources.
Structure is documented below.
*/
  spark?: bigquery_ConnectionSpark;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  aws?: bigquery_ConnectionAws;

  // A descriptive description for the connection
  description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  cloudSql?: bigquery_ConnectionCloudSql;
}
export class Connection extends DS_Resource {
  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  public cloudSpanner?: bigquery_ConnectionCloudSpanner;

  // A descriptive description for the connection
  public description?: string;

  // A descriptive name for the connection
  public friendlyName?: string;

  /*
The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Container for connection properties to execute stored procedures for Apache Spark. resources.
Structure is documented below.
*/
  public spark?: bigquery_ConnectionSpark;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  public aws?: bigquery_ConnectionAws;

  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  public azure?: bigquery_ConnectionAzure;

  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  public cloudResource?: bigquery_ConnectionCloudResource;

  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  public cloudSql?: bigquery_ConnectionCloudSql;

  // Optional connection id that should be assigned to the created connection.
  public connectionId?: string;

  // True if the connection has credential assigned.
  public hasCredential?: boolean;

  /*
The resource name of the connection in the form of:
"projects/{project_id}/locations/{location_id}/connections/{connectionId}"
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cloudResource",
        "Container for connection properties for delegation of access to GCP resources.\nStructure is documented below.",
        () => bigquery_ConnectionCloudResource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spark",
        "Container for connection properties to execute stored procedures for Apache Spark. resources.\nStructure is documented below.",
        () => bigquery_ConnectionSpark_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudSql",
        "Connection properties specific to the Cloud SQL.\nStructure is documented below.",
        () => bigquery_ConnectionCloudSql_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "azure",
        "Container for connection properties specific to Azure.\nStructure is documented below.",
        () => bigquery_ConnectionAzure_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudSpanner",
        "Connection properties specific to Cloud Spanner\nStructure is documented below.",
        () => bigquery_ConnectionCloudSpanner_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "Optional connection id that should be assigned to the created connection.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "friendlyName",
        "A descriptive name for the connection",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location where the connection should reside.\nCloud SQL instance must be in the same location as the connection\nwith following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.\nExamples: US, EU, asia-northeast1, us-central1, europe-west1.\nSpanner Connections same as spanner region\nAWS allowed regions are aws-us-east-1\nAzure allowed regions are azure-eastus2",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "aws",
        "Connection properties specific to Amazon Web Services.\nStructure is documented below.",
        () => bigquery_ConnectionAws_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A descriptive description for the connection",
        () => [],
        false,
        false,
      ),
    ];
  }
}
