import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_MetastoreServiceMetadataIntegration,
  Dataproc_MetastoreServiceMetadataIntegration_GetTypes,
} from "../types/Dataproc_MetastoreServiceMetadataIntegration";
import {
  Dataproc_MetastoreServiceHiveMetastoreConfig,
  Dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes,
} from "../types/Dataproc_MetastoreServiceHiveMetastoreConfig";
import {
  Dataproc_MetastoreServiceNetworkConfig,
  Dataproc_MetastoreServiceNetworkConfig_GetTypes,
} from "../types/Dataproc_MetastoreServiceNetworkConfig";
import {
  Dataproc_MetastoreServiceMaintenanceWindow,
  Dataproc_MetastoreServiceMaintenanceWindow_GetTypes,
} from "../types/Dataproc_MetastoreServiceMaintenanceWindow";
import {
  Dataproc_MetastoreServiceTelemetryConfig,
  Dataproc_MetastoreServiceTelemetryConfig_GetTypes,
} from "../types/Dataproc_MetastoreServiceTelemetryConfig";
import {
  Dataproc_MetastoreServiceEncryptionConfig,
  Dataproc_MetastoreServiceEncryptionConfig_GetTypes,
} from "../types/Dataproc_MetastoreServiceEncryptionConfig";
import {
  Dataproc_MetastoreServiceScalingConfig,
  Dataproc_MetastoreServiceScalingConfig_GetTypes,
} from "../types/Dataproc_MetastoreServiceScalingConfig";

export interface MetastoreServiceArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  Tier?: string;

  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  HiveMetastoreConfig?: Dataproc_MetastoreServiceHiveMetastoreConfig;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  NetworkConfig?: Dataproc_MetastoreServiceNetworkConfig;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  MaintenanceWindow?: Dataproc_MetastoreServiceMaintenanceWindow;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  ReleaseChannel?: string;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  TelemetryConfig?: Dataproc_MetastoreServiceTelemetryConfig;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  DatabaseType?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  EncryptionConfig?: Dataproc_MetastoreServiceEncryptionConfig;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  ScalingConfig?: Dataproc_MetastoreServiceScalingConfig;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  ServiceId?: string;

  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The TCP port at which the metastore service is reached. Default: 9083.
  Port?: number;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  Network?: string;

  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  Location?: string;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  MetadataIntegration?: Dataproc_MetastoreServiceMetadataIntegration;
}
export class MetastoreService extends Resource {
  // The TCP port at which the metastore service is reached. Default: 9083.
  public Port?: number;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  public ServiceId?: string;

  // Additional information about the current state of the metastore service, if available.
  public StateMessage?: string;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  public Tier?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
(Output)
The URI of the endpoint used to access the metastore service.
*/
  public EndpointUri?: string;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  public MaintenanceWindow?: Dataproc_MetastoreServiceMaintenanceWindow;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  public NetworkConfig?: Dataproc_MetastoreServiceNetworkConfig;

  // A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.
  public ArtifactGcsUri?: string;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  public MetadataIntegration?: Dataproc_MetastoreServiceMetadataIntegration;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  public Network?: string;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  public ReleaseChannel?: string;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  public ScalingConfig?: Dataproc_MetastoreServiceScalingConfig;

  // The current state of the metastore service.
  public State?: string;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  public DatabaseType?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  public EncryptionConfig?: Dataproc_MetastoreServiceEncryptionConfig;

  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  public Location?: string;

  // The relative resource name of the metastore service.
  public Name?: string;

  // The globally unique resource identifier of the metastore service.
  public Uid?: string;

  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  public HiveMetastoreConfig?: Dataproc_MetastoreServiceHiveMetastoreConfig;

  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  public TelemetryConfig?: Dataproc_MetastoreServiceTelemetryConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels for the metastore service.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The TCP port at which the metastore service is reached. Default: 9083.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MetadataIntegration",
        "The setting that defines how metastore metadata should be integrated with external services and systems.\nStructure is documented below.",
        Dataproc_MetastoreServiceMetadataIntegration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionConfig",
        "Information used to configure the Dataproc Metastore service to encrypt\ncustomer data at rest.\nStructure is documented below.",
        Dataproc_MetastoreServiceEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "The configuration specifying the network settings for the Dataproc Metastore service.\nStructure is documented below.",
        Dataproc_MetastoreServiceNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseType",
        "The database type that the Metastore service stores its data.\nDefault value is `MYSQL`.\nPossible values are: `MYSQL`, `SPANNER`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the metastore service should reside.\nThe default value is `global`.",
        [],
        false,
        true,
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
        "MaintenanceWindow",
        "The one hour maintenance window of the metastore service.\nThis specifies when the service can be restarted for maintenance purposes in UTC time.\nMaintenance window is not needed for services with the `SPANNER` database type.\nStructure is documented below.",
        Dataproc_MetastoreServiceMaintenanceWindow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 63 characters.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:\n"projects/{projectNumber}/global/networks/{network_id}".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The tier of the service.\nPossible values are: `DEVELOPER`, `ENTERPRISE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ReleaseChannel",
        "The release channel of the service. If unspecified, defaults to `STABLE`.\nDefault value is `STABLE`.\nPossible values are: `CANARY`, `STABLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TelemetryConfig",
        "The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.\nStructure is documented below.",
        Dataproc_MetastoreServiceTelemetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ScalingConfig",
        "Represents the scaling configuration of a metastore service.\nStructure is documented below.",
        Dataproc_MetastoreServiceScalingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HiveMetastoreConfig",
        "Configuration information specific to running Hive metastore software as the metastore service.\nStructure is documented below.",
        Dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
