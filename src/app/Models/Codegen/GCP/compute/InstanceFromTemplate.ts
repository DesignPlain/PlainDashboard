import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromTemplateGuestAccelerator,
  Compute_InstanceFromTemplateGuestAccelerator_GetTypes,
} from "../types/Compute_InstanceFromTemplateGuestAccelerator";
import {
  Compute_InstanceFromTemplateScheduling,
  Compute_InstanceFromTemplateScheduling_GetTypes,
} from "../types/Compute_InstanceFromTemplateScheduling";
import {
  Compute_InstanceFromTemplateAdvancedMachineFeatures,
  Compute_InstanceFromTemplateAdvancedMachineFeatures_GetTypes,
} from "../types/Compute_InstanceFromTemplateAdvancedMachineFeatures";
import {
  Compute_InstanceFromTemplateConfidentialInstanceConfig,
  Compute_InstanceFromTemplateConfidentialInstanceConfig_GetTypes,
} from "../types/Compute_InstanceFromTemplateConfidentialInstanceConfig";
import {
  Compute_InstanceFromTemplateNetworkInterface,
  Compute_InstanceFromTemplateNetworkInterface_GetTypes,
} from "../types/Compute_InstanceFromTemplateNetworkInterface";
import {
  Compute_InstanceFromTemplateNetworkPerformanceConfig,
  Compute_InstanceFromTemplateNetworkPerformanceConfig_GetTypes,
} from "../types/Compute_InstanceFromTemplateNetworkPerformanceConfig";
import {
  Compute_InstanceFromTemplateReservationAffinity,
  Compute_InstanceFromTemplateReservationAffinity_GetTypes,
} from "../types/Compute_InstanceFromTemplateReservationAffinity";
import {
  Compute_InstanceFromTemplateBootDisk,
  Compute_InstanceFromTemplateBootDisk_GetTypes,
} from "../types/Compute_InstanceFromTemplateBootDisk";
import {
  Compute_InstanceFromTemplateShieldedInstanceConfig,
  Compute_InstanceFromTemplateShieldedInstanceConfig_GetTypes,
} from "../types/Compute_InstanceFromTemplateShieldedInstanceConfig";
import {
  Compute_InstanceFromTemplateAttachedDisk,
  Compute_InstanceFromTemplateAttachedDisk_GetTypes,
} from "../types/Compute_InstanceFromTemplateAttachedDisk";
import {
  Compute_InstanceFromTemplateScratchDisk,
  Compute_InstanceFromTemplateScratchDisk_GetTypes,
} from "../types/Compute_InstanceFromTemplateScratchDisk";
import {
  Compute_InstanceFromTemplateServiceAccount,
  Compute_InstanceFromTemplateServiceAccount_GetTypes,
} from "../types/Compute_InstanceFromTemplateServiceAccount";
import {
  Compute_InstanceFromTemplateParams,
  Compute_InstanceFromTemplateParams_GetTypes,
} from "../types/Compute_InstanceFromTemplateParams";

export interface InstanceFromTemplateArgs {
  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  Labels?: Map<string, string>;

  // The machine type to create.
  MachineType?: string;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  SourceInstanceTemplate?: string;

  // Whether deletion protection is enabled on this instance.
  DeletionProtection?: boolean;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  DesiredStatus?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  NetworkPerformanceConfig?: Compute_InstanceFromTemplateNetworkPerformanceConfig;

  // Metadata key/value pairs made available within the instance.
  Metadata?: Map<string, string>;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  Params?: Compute_InstanceFromTemplateParams;

  // Specifies the reservations that this instance can consume from.
  ReservationAffinity?: Compute_InstanceFromTemplateReservationAffinity;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  // The boot disk for the instance.
  BootDisk?: Compute_InstanceFromTemplateBootDisk;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<Compute_InstanceFromTemplateGuestAccelerator>;

  // Metadata startup scripts made available within the instance.
  MetadataStartupScript?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  // The scheduling strategy being used by the instance.
  Scheduling?: Compute_InstanceFromTemplateScheduling;

  // The list of tags attached to the instance.
  Tags?: Array<string>;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  CanIpForward?: boolean;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  Hostname?: string;

  // The shielded vm config being used by the instance.
  ShieldedInstanceConfig?: Compute_InstanceFromTemplateShieldedInstanceConfig;

  // Controls for advanced machine-related behavior features.
  AdvancedMachineFeatures?: Compute_InstanceFromTemplateAdvancedMachineFeatures;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  ConfidentialInstanceConfig?: Compute_InstanceFromTemplateConfidentialInstanceConfig;

  // Whether the instance has virtual displays enabled.
  EnableDisplay?: boolean;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  Project?: string;

  // List of disks attached to the instance
  AttachedDisks?: Array<Compute_InstanceFromTemplateAttachedDisk>;

  // A brief description of the resource.
  Description?: string;

  // The networks attached to the instance.
  NetworkInterfaces?: Array<Compute_InstanceFromTemplateNetworkInterface>;

  // The scratch disks attached to the instance.
  ScratchDisks?: Array<Compute_InstanceFromTemplateScratchDisk>;

  // The service account to attach to the instance.
  ServiceAccount?: Compute_InstanceFromTemplateServiceAccount;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  Zone?: string;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  AllowStoppingForUpdate?: boolean;

  // The minimum CPU platform specified for the VM instance.
  MinCpuPlatform?: string;
}
export class InstanceFromTemplate extends Resource {
  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public CanIpForward?: boolean;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public Hostname?: string;

  // The unique fingerprint of the labels.
  public LabelFingerprint?: string;

  // The scheduling strategy being used by the instance.
  public Scheduling?: Compute_InstanceFromTemplateScheduling;

  // The machine type to create.
  public MachineType?: string;

  // The scratch disks attached to the instance.
  public ScratchDisks?: Array<Compute_InstanceFromTemplateScratchDisk>;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  // Controls for advanced machine-related behavior features.
  public AdvancedMachineFeatures?: Compute_InstanceFromTemplateAdvancedMachineFeatures;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public AllowStoppingForUpdate?: boolean;

  // Metadata startup scripts made available within the instance.
  public MetadataStartupScript?: string;

  // The networks attached to the instance.
  public NetworkInterfaces?: Array<Compute_InstanceFromTemplateNetworkInterface>;

  // The URI of the created resource.
  public SelfLink?: string;

  // A brief description of the resource.
  public Description?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // Whether the instance has virtual displays enabled.
  public EnableDisplay?: boolean;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public Name?: string;

  // Specifies the reservations that this instance can consume from.
  public ReservationAffinity?: Compute_InstanceFromTemplateReservationAffinity;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  public Zone?: string;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public CurrentStatus?: string;

  // The server-assigned unique identifier of this instance.
  public InstanceId?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public Labels?: Map<string, string>;

  // Metadata key/value pairs made available within the instance.
  public Metadata?: Map<string, string>;

  // The service account to attach to the instance.
  public ServiceAccount?: Compute_InstanceFromTemplateServiceAccount;

  // The list of tags attached to the instance.
  public Tags?: Array<string>;

  // List of disks attached to the instance
  public AttachedDisks?: Array<Compute_InstanceFromTemplateAttachedDisk>;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public ConfidentialInstanceConfig?: Compute_InstanceFromTemplateConfidentialInstanceConfig;

  // The CPU platform used by this instance.
  public CpuPlatform?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public Project?: string;

  // The boot disk for the instance.
  public BootDisk?: Compute_InstanceFromTemplateBootDisk;

  // Whether deletion protection is enabled on this instance.
  public DeletionProtection?: boolean;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  // The shielded vm config being used by the instance.
  public ShieldedInstanceConfig?: Compute_InstanceFromTemplateShieldedInstanceConfig;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  public SourceInstanceTemplate?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public DesiredStatus?: string;

  // List of the type and count of accelerator cards attached to the instance.
  public GuestAccelerators?: Array<Compute_InstanceFromTemplateGuestAccelerator>;

  // The minimum CPU platform specified for the VM instance.
  public MinCpuPlatform?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public NetworkPerformanceConfig?: Compute_InstanceFromTemplateNetworkPerformanceConfig;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public Params?: Compute_InstanceFromTemplateParams;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServiceAccount",
        "The service account to attach to the instance.",
        Compute_InstanceFromTemplateServiceAccount_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
        Compute_InstanceFromTemplateNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Metadata",
        "Metadata key/value pairs made available within the instance.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BootDisk",
        "The boot disk for the instance.",
        Compute_InstanceFromTemplateBootDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither\nself_link nor project are provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ScratchDisks",
        "The scratch disks attached to the instance.",
        Compute_InstanceFromTemplateScratchDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
        Compute_InstanceFromTemplateParams_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Tags",
        "The list of tags attached to the instance.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableDisplay",
        "Whether the instance has virtual displays enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceInstanceTemplate",
        "Name or self link of an instance\ntemplate to create the instance based on. It is recommended to reference\ninstance templates through their unique id (`self_link_unique` attribute).\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeletionProtection",
        "Whether deletion protection is enabled on this instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
        Compute_InstanceFromTemplateAdvancedMachineFeatures_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.",
        Compute_InstanceFromTemplateReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ShieldedInstanceConfig",
        "The shielded vm config being used by the instance.",
        Compute_InstanceFromTemplateShieldedInstanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AllowStoppingForUpdate",
        "If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires\nstopping the instance without setting this field, the update will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to create.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataStartupScript",
        "Metadata startup scripts made available within the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MinCpuPlatform",
        "The minimum CPU platform specified for the VM instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
        Compute_InstanceFromTemplateGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "CanIpForward",
        "Whether sending and receiving of packets with non-matching source or destination IPs is allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ConfidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
        Compute_InstanceFromTemplateConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "AttachedDisks",
        "List of disks attached to the instance",
        Compute_InstanceFromTemplateAttachedDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Scheduling",
        "The scheduling strategy being used by the instance.",
        Compute_InstanceFromTemplateScheduling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NetworkInterfaces",
        "The networks attached to the instance.",
        Compute_InstanceFromTemplateNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, all arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the template. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.",
        [],
        false,
        true,
      ),
    ];
  }
}
