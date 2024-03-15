import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MetastoreServiceHiveMetastoreConfig } from "../types/MetastoreServiceHiveMetastoreConfig";
import { MetastoreServiceMetadataIntegration } from "../types/MetastoreServiceMetadataIntegration";
import { MetastoreServiceEncryptionConfig } from "../types/MetastoreServiceEncryptionConfig";
import { MetastoreServiceMaintenanceWindow } from "../types/MetastoreServiceMaintenanceWindow";
import { MetastoreServiceScalingConfig } from "../types/MetastoreServiceScalingConfig";
import { MetastoreServiceNetworkConfig } from "../types/MetastoreServiceNetworkConfig";
import { MetastoreServiceTelemetryConfig } from "../types/MetastoreServiceTelemetryConfig";

export interface MetastoreServiceArgs {
  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  HiveMetastoreConfig?: MetastoreServiceHiveMetastoreConfig;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  MetadataIntegration?: MetastoreServiceMetadataIntegration;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  ServiceId?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  EncryptionConfig?: MetastoreServiceEncryptionConfig;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  MaintenanceWindow?: MetastoreServiceMaintenanceWindow;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  ReleaseChannel?: string;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  Tier?: string;

  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  Network?: string;

  // The TCP port at which the metastore service is reached. Default: 9083.
  Port?: number;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  ScalingConfig?: MetastoreServiceScalingConfig;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  DatabaseType?: string;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  NetworkConfig?: MetastoreServiceNetworkConfig;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  TelemetryConfig?: MetastoreServiceTelemetryConfig;

  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  Location?: string;
}
export class MetastoreService extends Resource {
  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  public MaintenanceWindow?: MetastoreServiceMaintenanceWindow;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The current state of the metastore service.
  public State?: string;

  // A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.
  public ArtifactGcsUri?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  public EncryptionConfig?: MetastoreServiceEncryptionConfig;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  public Tier?: string;

  // The TCP port at which the metastore service is reached. Default: 9083.
  public Port?: number;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  public ServiceId?: string;

  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  public Location?: string;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  public MetadataIntegration?: MetastoreServiceMetadataIntegration;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  public Network?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  public ScalingConfig?: MetastoreServiceScalingConfig;

  // Additional information about the current state of the metastore service, if available.
  public StateMessage?: string;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  public DatabaseType?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The relative resource name of the metastore service.
  public Name?: string;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  public NetworkConfig?: MetastoreServiceNetworkConfig;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  public ReleaseChannel?: string;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  public TelemetryConfig?: MetastoreServiceTelemetryConfig;

  // The globally unique resource identifier of the metastore service.
  public Uid?: string;

  /*
(Output)
The URI of the endpoint used to access the metastore service.
*/
  public EndpointUri?: string;

  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  public HiveMetastoreConfig?: MetastoreServiceHiveMetastoreConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The TCP port at which the metastore service is reached. Default: 9083.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseType",
        "The database type that the Metastore service stores its data.\nDefault value is `MYSQL`.\nPossible values are: `MYSQL`, `SPANNER`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 63 characters.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceWindow",
        "The one hour maintenance window of the metastore service.\nThis specifies when the service can be restarted for maintenance purposes in UTC time.\nMaintenance window is not needed for services with the `SPANNER` database type.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TelemetryConfig",
        "The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReleaseChannel",
        "The release channel of the service. If unspecified, defaults to `STABLE`.\nDefault value is `STABLE`.\nPossible values are: `CANARY`, `STABLE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The tier of the service.\nPossible values are: `DEVELOPER`, `ENTERPRISE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the metastore service.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HiveMetastoreConfig",
        "Configuration information specific to running Hive metastore software as the metastore service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataIntegration",
        "The setting that defines how metastore metadata should be integrated with external services and systems.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:\n"projects/{projectNumber}/global/networks/{network_id}".',
      ),
      new DynamicUIProps(
        InputType.String,
        "ScalingConfig",
        "Represents the scaling configuration of a metastore service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "The configuration specifying the network settings for the Dataproc Metastore service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the metastore service should reside.\nThe default value is `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EncryptionConfig",
        "Information used to configure the Dataproc Metastore service to encrypt\ncustomer data at rest.\nStructure is documented below.",
      ),
    ];
  }
}
