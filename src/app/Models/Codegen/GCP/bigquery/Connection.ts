import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectionCloudSql } from "../types/ConnectionCloudSql";
import { ConnectionAws } from "../types/ConnectionAws";
import { ConnectionCloudResource } from "../types/ConnectionCloudResource";
import { ConnectionSpark } from "../types/ConnectionSpark";
import { ConnectionAzure } from "../types/ConnectionAzure";
import { ConnectionCloudSpanner } from "../types/ConnectionCloudSpanner";

export interface ConnectionArgs {
  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  CloudSql?: ConnectionCloudSql;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  Aws?: ConnectionAws;

  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  CloudResource?: ConnectionCloudResource;

  // Optional connection id that should be assigned to the created connection.
  ConnectionId?: string;

  // A descriptive description for the connection
  Description?: string;

  // A descriptive name for the connection
  FriendlyName?: string;

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
  Spark?: ConnectionSpark;

  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  Azure?: ConnectionAzure;

  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  CloudSpanner?: ConnectionCloudSpanner;
}
export class Connection extends Resource {
  /*
The resource name of the connection in the form of:
"projects/{project_id}/locations/{location_id}/connections/{connectionId}"
*/
  public Name?: string;

  /*
Container for connection properties to execute stored procedures for Apache Spark. resources.
Structure is documented below.
*/
  public Spark?: ConnectionSpark;

  /*
Container for connection properties specific to Azure.
Structure is documented below.
*/
  public Azure?: ConnectionAzure;

  /*
Container for connection properties for delegation of access to GCP resources.
Structure is documented below.
*/
  public CloudResource?: ConnectionCloudResource;

  /*
Connection properties specific to Cloud Spanner
Structure is documented below.
*/
  public CloudSpanner?: ConnectionCloudSpanner;

  // A descriptive name for the connection
  public FriendlyName?: string;

  // True if the connection has credential assigned.
  public HasCredential?: boolean;

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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Connection properties specific to Amazon Web Services.
Structure is documented below.
*/
  public Aws?: ConnectionAws;

  /*
Connection properties specific to the Cloud SQL.
Structure is documented below.
*/
  public CloudSql?: ConnectionCloudSql;

  // Optional connection id that should be assigned to the created connection.
  public ConnectionId?: string;

  // A descriptive description for the connection
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Azure",
        "Container for connection properties specific to Azure.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudSpanner",
        "Connection properties specific to Cloud Spanner\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Aws",
        "Connection properties specific to Amazon Web Services.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A descriptive description for the connection",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the connection should reside.\nCloud SQL instance must be in the same location as the connection\nwith following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.\nExamples: US, EU, asia-northeast1, us-central1, europe-west1.\nSpanner Connections same as spanner region\nAWS allowed regions are aws-us-east-1\nAzure allowed regions are azure-eastus2",
      ),
      new DynamicUIProps(
        InputType.String,
        "Spark",
        "Container for connection properties to execute stored procedures for Apache Spark. resources.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudSql",
        "Connection properties specific to the Cloud SQL.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudResource",
        "Container for connection properties for delegation of access to GCP resources.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionId",
        "Optional connection id that should be assigned to the created connection.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FriendlyName",
        "A descriptive name for the connection",
      ),
    ];
  }
}
