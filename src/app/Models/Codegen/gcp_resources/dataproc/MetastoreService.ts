import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_MetastoreServiceTelemetryConfig,
  dataproc_MetastoreServiceTelemetryConfig_GetTypes,
} from "../types/dataproc_MetastoreServiceTelemetryConfig";
import {
  dataproc_MetastoreServiceScalingConfig,
  dataproc_MetastoreServiceScalingConfig_GetTypes,
} from "../types/dataproc_MetastoreServiceScalingConfig";
import {
  dataproc_MetastoreServiceMetadataIntegration,
  dataproc_MetastoreServiceMetadataIntegration_GetTypes,
} from "../types/dataproc_MetastoreServiceMetadataIntegration";
import {
  dataproc_MetastoreServiceNetworkConfig,
  dataproc_MetastoreServiceNetworkConfig_GetTypes,
} from "../types/dataproc_MetastoreServiceNetworkConfig";
import {
  dataproc_MetastoreServiceEncryptionConfig,
  dataproc_MetastoreServiceEncryptionConfig_GetTypes,
} from "../types/dataproc_MetastoreServiceEncryptionConfig";
import {
  dataproc_MetastoreServiceHiveMetastoreConfig,
  dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes,
} from "../types/dataproc_MetastoreServiceHiveMetastoreConfig";
import {
  dataproc_MetastoreServiceMaintenanceWindow,
  dataproc_MetastoreServiceMaintenanceWindow_GetTypes,
} from "../types/dataproc_MetastoreServiceMaintenanceWindow";

export interface MetastoreServiceArgs {
  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  location?: string;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  metadataIntegration?: dataproc_MetastoreServiceMetadataIntegration;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  networkConfig?: dataproc_MetastoreServiceNetworkConfig;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  databaseType?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  encryptionConfig?: dataproc_MetastoreServiceEncryptionConfig;

  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  hiveMetastoreConfig?: dataproc_MetastoreServiceHiveMetastoreConfig;

  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  maintenanceWindow?: dataproc_MetastoreServiceMaintenanceWindow;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  releaseChannel?: string;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  telemetryConfig?: dataproc_MetastoreServiceTelemetryConfig;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  tier?: string;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  network?: string;

  // The TCP port at which the metastore service is reached. Default: 9083.
  port?: number;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  scalingConfig?: dataproc_MetastoreServiceScalingConfig;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  serviceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class MetastoreService extends Resource {
  /*
User-defined labels for the metastore service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location where the metastore service should reside.
The default value is `global`.
*/
  public location?: string;

  // The relative resource name of the metastore service.
  public name?: string;

  // Additional information about the current state of the metastore service, if available.
  public stateMessage?: string;

  /*
Configuration information specific to running Hive metastore software as the metastore service.
Structure is documented below.
*/
  public hiveMetastoreConfig?: dataproc_MetastoreServiceHiveMetastoreConfig;

  // The TCP port at which the metastore service is reached. Default: 9083.
  public port?: number;

  /*
The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.


- - -
*/
  public serviceId?: string;

  /*
The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
Structure is documented below.
*/
  public telemetryConfig?: dataproc_MetastoreServiceTelemetryConfig;

  // The globally unique resource identifier of the metastore service.
  public uid?: string;

  /*
Represents the scaling configuration of a metastore service.
Structure is documented below.
*/
  public scalingConfig?: dataproc_MetastoreServiceScalingConfig;

  // The current state of the metastore service.
  public state?: string;

  /*
The database type that the Metastore service stores its data.
Default value is `MYSQL`.
Possible values are: `MYSQL`, `SPANNER`.
*/
  public databaseType?: string;

  /*
Information used to configure the Dataproc Metastore service to encrypt
customer data at rest.
Structure is documented below.
*/
  public encryptionConfig?: dataproc_MetastoreServiceEncryptionConfig;

  /*
The setting that defines how metastore metadata should be integrated with external services and systems.
Structure is documented below.
*/
  public metadataIntegration?: dataproc_MetastoreServiceMetadataIntegration;

  /*
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".
*/
  public network?: string;

  /*
The configuration specifying the network settings for the Dataproc Metastore service.
Structure is documented below.
*/
  public networkConfig?: dataproc_MetastoreServiceNetworkConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The tier of the service.
Possible values are: `DEVELOPER`, `ENTERPRISE`.
*/
  public tier?: string;

  // A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.
  public artifactGcsUri?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
(Output)
The URI of the endpoint used to access the metastore service.
*/
  public endpointUri?: string;

  /*
The one hour maintenance window of the metastore service.
This specifies when the service can be restarted for maintenance purposes in UTC time.
Maintenance window is not needed for services with the `SPANNER` database type.
Structure is documented below.
*/
  public maintenanceWindow?: dataproc_MetastoreServiceMaintenanceWindow;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The release channel of the service. If unspecified, defaults to `STABLE`.
Default value is `STABLE`.
Possible values are: `CANARY`, `STABLE`.
*/
  public releaseChannel?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the metastore service should reside.\nThe default value is `global`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:\n"projects/{projectNumber}/global/networks/{network_id}".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scalingConfig",
        "Represents the scaling configuration of a metastore service.\nStructure is documented below.",
        dataproc_MetastoreServiceScalingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceId",
        "The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 63 characters.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadataIntegration",
        "The setting that defines how metastore metadata should be integrated with external services and systems.\nStructure is documented below.",
        dataproc_MetastoreServiceMetadataIntegration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "telemetryConfig",
        "The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.\nStructure is documented below.",
        dataproc_MetastoreServiceTelemetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tier",
        "The tier of the service.\nPossible values are: `DEVELOPER`, `ENTERPRISE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "releaseChannel",
        "The release channel of the service. If unspecified, defaults to `STABLE`.\nDefault value is `STABLE`.\nPossible values are: `CANARY`, `STABLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The TCP port at which the metastore service is reached. Default: 9083.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseType",
        "The database type that the Metastore service stores its data.\nDefault value is `MYSQL`.\nPossible values are: `MYSQL`, `SPANNER`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "Information used to configure the Dataproc Metastore service to encrypt\ncustomer data at rest.\nStructure is documented below.",
        dataproc_MetastoreServiceEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hiveMetastoreConfig",
        "Configuration information specific to running Hive metastore software as the metastore service.\nStructure is documented below.",
        dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for the metastore service.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "The configuration specifying the network settings for the Dataproc Metastore service.\nStructure is documented below.",
        dataproc_MetastoreServiceNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceWindow",
        "The one hour maintenance window of the metastore service.\nThis specifies when the service can be restarted for maintenance purposes in UTC time.\nMaintenance window is not needed for services with the `SPANNER` database type.\nStructure is documented below.",
        dataproc_MetastoreServiceMaintenanceWindow_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
