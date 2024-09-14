import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datafusion_InstanceAccelerator,
  datafusion_InstanceAccelerator_GetTypes,
} from "../types/datafusion_InstanceAccelerator";
import {
  datafusion_InstanceEventPublishConfig,
  datafusion_InstanceEventPublishConfig_GetTypes,
} from "../types/datafusion_InstanceEventPublishConfig";
import {
  datafusion_InstanceNetworkConfig,
  datafusion_InstanceNetworkConfig_GetTypes,
} from "../types/datafusion_InstanceNetworkConfig";
import {
  datafusion_InstanceCryptoKeyConfig,
  datafusion_InstanceCryptoKeyConfig_GetTypes,
} from "../types/datafusion_InstanceCryptoKeyConfig";

export interface InstanceArgs {
  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  /*
Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.
*/
  privateInstance?: boolean;

  // Map of additional options used to configure the behavior of Data Fusion instance.
  options?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the Data Fusion instance.
  region?: string;

  /*
List of accelerators enabled for this CDF instance.
If accelerators are enabled it is possible a permadiff will be created with the Options field.
Users will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.
Structure is documented below.
*/
  accelerators?: Array<datafusion_InstanceAccelerator>;

  // Display name for an instance.
  displayName?: string;

  // Option to enable Stackdriver Monitoring.
  enableStackdriverMonitoring?: boolean;

  /*
Option to enable and pass metadata for event publishing.
Structure is documented below.
*/
  eventPublishConfig?: datafusion_InstanceEventPublishConfig;

  /*
The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Network configuration options. These are required when a private Data Fusion instance is to be created.
Structure is documented below.
*/
  networkConfig?: datafusion_InstanceNetworkConfig;

  /*
Represents the type of Data Fusion instance. Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
pipelines at low cost.
Possible values are: `BASIC`, `ENTERPRISE`, `DEVELOPER`.


- - -
*/
  type?: string;

  // Current version of the Data Fusion.
  version?: string;

  /*
The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
Structure is documented below.
*/
  cryptoKeyConfig?: datafusion_InstanceCryptoKeyConfig;

  // User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  dataprocServiceAccount?: string;

  // Option to enable Stackdriver Logging.
  enableStackdriverLogging?: boolean;

  // An optional description of the instance.
  description?: string;

  // Option to enable granular role-based access control.
  enableRbac?: boolean;

  // Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  zone?: string;
}
export class Instance extends DS_Resource {
  // The region of the Data Fusion instance.
  public region?: string;

  /*
Represents the type of Data Fusion instance. Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
pipelines at low cost.
Possible values are: `BASIC`, `ENTERPRISE`, `DEVELOPER`.


- - -
*/
  public type?: string;

  // Option to enable Stackdriver Monitoring.
  public enableStackdriverMonitoring?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  // Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  public zone?: string;

  // The time the instance was created in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
  public createTime?: string;

  // An optional description of the instance.
  public description?: string;

  // Endpoint on which the Data Fusion UI and REST APIs are accessible.
  public serviceEndpoint?: string;

  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public state?: string;

  /*
List of accelerators enabled for this CDF instance.
If accelerators are enabled it is possible a permadiff will be created with the Options field.
Users will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.
Structure is documented below.
*/
  public accelerators?: Array<datafusion_InstanceAccelerator>;

  /*
Network configuration options. These are required when a private Data Fusion instance is to be created.
Structure is documented below.
*/
  public networkConfig?: datafusion_InstanceNetworkConfig;

  /*
Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.
*/
  public privateInstance?: boolean;

  // User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  public dataprocServiceAccount?: string;

  // Cloud Storage bucket generated by Data Fusion in the customer project.
  public gcsBucket?: string;

  // P4 service account for the customer project.
  public p4ServiceAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The time the instance was last updated in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
  public updateTime?: string;

  // Current version of the Data Fusion.
  public version?: string;

  // Endpoint on which the REST APIs is accessible.
  public apiEndpoint?: string;

  // Additional information about the current state of this Data Fusion instance if available.
  public stateMessage?: string;

  // Option to enable granular role-based access control.
  public enableRbac?: boolean;

  // Display name for an instance.
  public displayName?: string;

  // Option to enable Stackdriver Logging.
  public enableStackdriverLogging?: boolean;

  /*
Option to enable and pass metadata for event publishing.
Structure is documented below.
*/
  public eventPublishConfig?: datafusion_InstanceEventPublishConfig;

  // Map of additional options used to configure the behavior of Data Fusion instance.
  public options?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Service account which will be used to access resources in the customer project.
  public serviceAccount?: string;

  // The name of the tenant project.
  public tenantProjectId?: string;

  /*
The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
Structure is documented below.
*/
  public cryptoKeyConfig?: datafusion_InstanceCryptoKeyConfig;

  /*
The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cryptoKeyConfig",
        "The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.\nStructure is documented below.",
        () => datafusion_InstanceCryptoKeyConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of the instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "privateInstance",
        "Specifies whether the Data Fusion instance should be private. If set to\ntrue, all Data Fusion nodes will have private IP addresses and will not be\nable to access the public internet.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name for an instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStackdriverMonitoring",
        "Option to enable Stackdriver Monitoring.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataprocServiceAccount",
        "User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStackdriverLogging",
        "Option to enable Stackdriver Logging.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The resource labels for instance to use to annotate any related underlying resources,\nsuch as Compute Engine VMs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Represents the type of Data Fusion instance. Each type is configured with\nthe default settings for processing and memory.\n- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines\nusing point and click UI. However, there are certain limitations, such as fewer number\nof concurrent pipelines, no support for streaming pipelines, etc.\n- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features\navailable, such as support for streaming pipelines, higher number of concurrent pipelines, etc.\n- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but\nwith restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration\npipelines at low cost.\nPossible values are: `BASIC`, `ENTERPRISE`, `DEVELOPER`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableRbac",
        "Option to enable granular role-based access control.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "options",
        "Map of additional options used to configure the behavior of Data Fusion instance.",
        () => InputType_Map_GetTypes(),
        false,
        true,
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
        InputType.String,
        "region",
        "The region of the Data Fusion instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Network configuration options. These are required when a private Data Fusion instance is to be created.\nStructure is documented below.",
        () => datafusion_InstanceNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Current version of the Data Fusion.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the instance or a fully qualified identifier for the instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "accelerators",
        "List of accelerators enabled for this CDF instance.\nIf accelerators are enabled it is possible a permadiff will be created with the Options field.\nUsers will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.\nStructure is documented below.",
        () => datafusion_InstanceAccelerator_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventPublishConfig",
        "Option to enable and pass metadata for event publishing.\nStructure is documented below.",
        () => datafusion_InstanceEventPublishConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
