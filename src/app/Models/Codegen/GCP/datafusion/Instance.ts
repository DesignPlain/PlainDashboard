import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceEventPublishConfig } from "../types/InstanceEventPublishConfig";
import { InstanceCryptoKeyConfig } from "../types/InstanceCryptoKeyConfig";
import { InstanceNetworkConfig } from "../types/InstanceNetworkConfig";
import { InstanceAccelerator } from "../types/InstanceAccelerator";

export interface InstanceArgs {
  // Option to enable Stackdriver Logging.
  EnableStackdriverLogging?: boolean;

  /*
Option to enable and pass metadata for event publishing.
Structure is documented below.
*/
  EventPublishConfig?: InstanceEventPublishConfig;

  /*
The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  Name?: string;

  // Map of additional options used to configure the behavior of Data Fusion instance.
  Options?: Map<string, string>;

  /*
Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.
*/
  PrivateInstance?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
Structure is documented below.
*/
  CryptoKeyConfig?: InstanceCryptoKeyConfig;

  // User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  DataprocServiceAccount?: string;

  // An optional description of the instance.
  Description?: string;

  // Option to enable Stackdriver Monitoring.
  EnableStackdriverMonitoring?: boolean;

  /*
Network configuration options. These are required when a private Data Fusion instance is to be created.
Structure is documented below.
*/
  NetworkConfig?: InstanceNetworkConfig;

  // Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  Zone?: string;

  // Option to enable granular role-based access control.
  EnableRbac?: boolean;

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
  Type?: string;

  // Current version of the Data Fusion.
  Version?: string;

  /*
List of accelerators enabled for this CDF instance.
If accelerators are enabled it is possible a permadiff will be created with the Options field.
Users will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.
Structure is documented below.
*/
  Accelerators?: Array<InstanceAccelerator>;

  // Display name for an instance.
  DisplayName?: string;

  // The region of the Data Fusion instance.
  Region?: string;
}
export class Instance extends Resource {
  // The name of the tenant project.
  public TenantProjectId?: string;

  // Additional information about the current state of this Data Fusion instance if available.
  public StateMessage?: string;

  // Option to enable Stackdriver Monitoring.
  public EnableStackdriverMonitoring?: boolean;

  // Endpoint on which the Data Fusion UI and REST APIs are accessible.
  public ServiceEndpoint?: string;

  // The time the instance was created in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
  public CreateTime?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public Name?: string;

  // Display name for an instance.
  public DisplayName?: string;

  // Option to enable Stackdriver Logging.
  public EnableStackdriverLogging?: boolean;

  /*
Option to enable and pass metadata for event publishing.
Structure is documented below.
*/
  public EventPublishConfig?: InstanceEventPublishConfig;

  /*
Network configuration options. These are required when a private Data Fusion instance is to be created.
Structure is documented below.
*/
  public NetworkConfig?: InstanceNetworkConfig;

  // Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  public Zone?: string;

  /*
The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
Structure is documented below.
*/
  public CryptoKeyConfig?: InstanceCryptoKeyConfig;

  // Service account which will be used to access resources in the customer project.
  public ServiceAccount?: string;

  // User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  public DataprocServiceAccount?: string;

  // Cloud Storage bucket generated by Data Fusion in the customer project.
  public GcsBucket?: string;

  // P4 service account for the customer project.
  public P4ServiceAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Current version of the Data Fusion.
  public Version?: string;

  // Endpoint on which the REST APIs is accessible.
  public ApiEndpoint?: string;

  // An optional description of the instance.
  public Description?: string;

  /*
The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Map of additional options used to configure the behavior of Data Fusion instance.
  public Options?: Map<string, string>;

  /*
Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.
*/
  public PrivateInstance?: boolean;

  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public State?: string;

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
  public Type?: string;

  // The time the instance was last updated in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
  public UpdateTime?: string;

  /*
List of accelerators enabled for this CDF instance.
If accelerators are enabled it is possible a permadiff will be created with the Options field.
Users will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.
Structure is documented below.
*/
  public Accelerators?: Array<InstanceAccelerator>;

  // Option to enable granular role-based access control.
  public EnableRbac?: boolean;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The region of the Data Fusion instance.
  public Region?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CryptoKeyConfig",
        "The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Represents the type of Data Fusion instance. Each type is configured with\nthe default settings for processing and memory.\n- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines\nusing point and click UI. However, there are certain limitations, such as fewer number\nof concurrent pipelines, no support for streaming pipelines, etc.\n- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features\navailable, such as support for streaming pipelines, higher number of concurrent pipelines, etc.\n- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but\nwith restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration\npipelines at low cost.\nPossible values are: `BASIC`, `ENTERPRISE`, `DEVELOPER`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "Current version of the Data Fusion.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name for an instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the Data Fusion instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableStackdriverLogging",
        "Option to enable Stackdriver Logging.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventPublishConfig",
        "Option to enable and pass metadata for event publishing.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the instance or a fully qualified identifier for the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Options",
        "Map of additional options used to configure the behavior of Data Fusion instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "PrivateInstance",
        "Specifies whether the Data Fusion instance should be private. If set to\ntrue, all Data Fusion nodes will have private IP addresses and will not be\nable to access the public internet.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableStackdriverMonitoring",
        "Option to enable Stackdriver Monitoring.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configuration options. These are required when a private Data Fusion instance is to be created.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The resource labels for instance to use to annotate any related underlying resources,\nsuch as Compute Engine VMs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataprocServiceAccount",
        "User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableRbac",
        "Option to enable granular role-based access control.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Accelerators",
        "List of accelerators enabled for this CDF instance.\nIf accelerators are enabled it is possible a permadiff will be created with the Options field.\nUsers will need to either manually update their state file to include these diffed options, or include the field in a lifecycle ignore changes block.\nStructure is documented below.",
      ),
    ];
  }
}
