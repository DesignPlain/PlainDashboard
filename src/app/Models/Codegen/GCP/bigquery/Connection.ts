import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_ConnectionSpark,
  Bigquery_ConnectionSpark_GetTypes,
} from "../types/Bigquery_ConnectionSpark";
import {
  Bigquery_ConnectionAws,
  Bigquery_ConnectionAws_GetTypes,
} from "../types/Bigquery_ConnectionAws";
import {
  Bigquery_ConnectionAzure,
  Bigquery_ConnectionAzure_GetTypes,
} from "../types/Bigquery_ConnectionAzure";
import {
  Bigquery_ConnectionCloudResource,
  Bigquery_ConnectionCloudResource_GetTypes,
} from "../types/Bigquery_ConnectionCloudResource";
import {
  Bigquery_ConnectionCloudSpanner,
  Bigquery_ConnectionCloudSpanner_GetTypes,
} from "../types/Bigquery_ConnectionCloudSpanner";
import {
  Bigquery_ConnectionCloudSql,
  Bigquery_ConnectionCloudSql_GetTypes,
} from "../types/Bigquery_ConnectionCloudSql";

export interface ConnectionArgs {
  /*
The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2
*/
  Location?: string;

  /*
Container for connection properties to execute stored procedures for Apache Spark. resources.
Structure is documented below.
*/
  Spark?: Bigquery_ConnectionSpark;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  Aws?: Bigquery_ConnectionAws;

  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  Azure?: Bigquery_ConnectionAzure;

  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  CloudResource?: Bigquery_ConnectionCloudResource;

  // Optional connection id that should be assigned to the created connection.
  ConnectionId?: string;

  // A descriptive name for the connection
  FriendlyName?: string;

  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  CloudSpanner?: Bigquery_ConnectionCloudSpanner;

  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  CloudSql?: Bigquery_ConnectionCloudSql;

  // A descriptive description for the connection
  Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Connection extends Resource {
  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  public CloudResource?: Bigquery_ConnectionCloudResource;

  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  public CloudSpanner?: Bigquery_ConnectionCloudSpanner;

  // Optional connection id that should be assigned to the created connection.
  public ConnectionId?: string;

  // A descriptive description for the connection
  public Description?: string;

  // A descriptive name for the connection
  public FriendlyName?: string;

  // True if the connection has credential assigned.
  public HasCredential?: boolean;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  public Aws?: Bigquery_ConnectionAws;

  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  public Azure?: Bigquery_ConnectionAzure;

  /*
Container for connection properties to execute stored procedures for Apache Spark. resources.
Structure is documented below.
*/
  public Spark?: Bigquery_ConnectionSpark;

  /*
The resource name of the connection in the form of:
"projects/{project_id}/locations/{location_id}/connections/{connectionId}"
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  public CloudSql?: Bigquery_ConnectionCloudSql;

  /*
The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ConnectionId",
        "Optional connection id that should be assigned to the created connection.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A descriptive description for the connection",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Spark",
        "Container for connection properties to execute stored procedures for Apache Spark. resources.\nStructure is documented below.",
        Bigquery_ConnectionSpark_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Aws",
        "Connection properties specific to Amazon Web Services.\nStructure is documented below.",
        Bigquery_ConnectionAws_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Azure",
        "Container for connection properties specific to Azure.\nStructure is documented below.",
        Bigquery_ConnectionAzure_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudResource",
        "Container for connection properties for delegation of access to GCP resources.\nStructure is documented below.",
        Bigquery_ConnectionCloudResource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the connection should reside.\nCloud SQL instance must be in the same location as the connection\nwith following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.\nExamples: US, EU, asia-northeast1, us-central1, europe-west1.\nSpanner Connections same as spanner region\nAWS allowed regions are aws-us-east-1\nAzure allowed regions are azure-eastus2",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "FriendlyName",
        "A descriptive name for the connection",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudSpanner",
        "Connection properties specific to Cloud Spanner\nStructure is documented below.",
        Bigquery_ConnectionCloudSpanner_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudSql",
        "Connection properties specific to the Cloud SQL.\nStructure is documented below.",
        Bigquery_ConnectionCloudSql_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
