import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromMachineImageParams,
  Compute_InstanceFromMachineImageParams_GetTypes,
} from "../types/Compute_InstanceFromMachineImageParams";
import {
  Compute_InstanceFromMachineImageNetworkInterface,
  Compute_InstanceFromMachineImageNetworkInterface_GetTypes,
} from "../types/Compute_InstanceFromMachineImageNetworkInterface";
import {
  Compute_InstanceFromMachineImageBootDisk,
  Compute_InstanceFromMachineImageBootDisk_GetTypes,
} from "../types/Compute_InstanceFromMachineImageBootDisk";
import {
  Compute_InstanceFromMachineImageScheduling,
  Compute_InstanceFromMachineImageScheduling_GetTypes,
} from "../types/Compute_InstanceFromMachineImageScheduling";
import {
  Compute_InstanceFromMachineImageShieldedInstanceConfig,
  Compute_InstanceFromMachineImageShieldedInstanceConfig_GetTypes,
} from "../types/Compute_InstanceFromMachineImageShieldedInstanceConfig";
import {
  Compute_InstanceFromMachineImageConfidentialInstanceConfig,
  Compute_InstanceFromMachineImageConfidentialInstanceConfig_GetTypes,
} from "../types/Compute_InstanceFromMachineImageConfidentialInstanceConfig";
import {
  Compute_InstanceFromMachineImageNetworkPerformanceConfig,
  Compute_InstanceFromMachineImageNetworkPerformanceConfig_GetTypes,
} from "../types/Compute_InstanceFromMachineImageNetworkPerformanceConfig";
import {
  Compute_InstanceFromMachineImageScratchDisk,
  Compute_InstanceFromMachineImageScratchDisk_GetTypes,
} from "../types/Compute_InstanceFromMachineImageScratchDisk";
import {
  Compute_InstanceFromMachineImageAttachedDisk,
  Compute_InstanceFromMachineImageAttachedDisk_GetTypes,
} from "../types/Compute_InstanceFromMachineImageAttachedDisk";
import {
  Compute_InstanceFromMachineImageReservationAffinity,
  Compute_InstanceFromMachineImageReservationAffinity_GetTypes,
} from "../types/Compute_InstanceFromMachineImageReservationAffinity";
import {
  Compute_InstanceFromMachineImageServiceAccount,
  Compute_InstanceFromMachineImageServiceAccount_GetTypes,
} from "../types/Compute_InstanceFromMachineImageServiceAccount";
import {
  Compute_InstanceFromMachineImageGuestAccelerator,
  Compute_InstanceFromMachineImageGuestAccelerator_GetTypes,
} from "../types/Compute_InstanceFromMachineImageGuestAccelerator";
import {
  Compute_InstanceFromMachineImageAdvancedMachineFeatures,
  Compute_InstanceFromMachineImageAdvancedMachineFeatures_GetTypes,
} from "../types/Compute_InstanceFromMachineImageAdvancedMachineFeatures";

export interface InstanceFromMachineImageArgs {
  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  AllowStoppingForUpdate?: boolean;

  // A brief description of the resource.
  Description?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  DesiredStatus?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  // Specifies the reservations that this instance can consume from.
  ReservationAffinity?: Compute_InstanceFromMachineImageReservationAffinity;

  // Whether the instance has virtual displays enabled.
  EnableDisplay?: boolean;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  Labels?: Map<string, string>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  // The scheduling strategy being used by the instance.
  Scheduling?: Compute_InstanceFromMachineImageScheduling;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  Zone?: string;

  // The service account to attach to the instance.
  ServiceAccount?: Compute_InstanceFromMachineImageServiceAccount;

  // The shielded vm config being used by the instance.
  ShieldedInstanceConfig?: Compute_InstanceFromMachineImageShieldedInstanceConfig;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  CanIpForward?: boolean;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  ConfidentialInstanceConfig?: Compute_InstanceFromMachineImageConfidentialInstanceConfig;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<Compute_InstanceFromMachineImageGuestAccelerator>;

  // The machine type to create.
  MachineType?: string;

  // Metadata key/value pairs made available within the instance.
  Metadata?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  Project?: string;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  Hostname?: string;

  // The minimum CPU platform specified for the VM instance.
  MinCpuPlatform?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  NetworkPerformanceConfig?: Compute_InstanceFromMachineImageNetworkPerformanceConfig;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  Params?: Compute_InstanceFromMachineImageParams;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  SourceMachineImage?: string;

  // The list of tags attached to the instance.
  Tags?: Array<string>;

  // Controls for advanced machine-related behavior features.
  AdvancedMachineFeatures?: Compute_InstanceFromMachineImageAdvancedMachineFeatures;

  // Whether deletion protection is enabled on this instance.
  DeletionProtection?: boolean;

  // Metadata startup scripts made available within the instance.
  MetadataStartupScript?: string;

  // The networks attached to the instance.
  NetworkInterfaces?: Array<Compute_InstanceFromMachineImageNetworkInterface>;
}
export class InstanceFromMachineImage extends Resource {
  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Controls for advanced machine-related behavior features.
  public AdvancedMachineFeatures?: Compute_InstanceFromMachineImageAdvancedMachineFeatures;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public CanIpForward?: boolean;

  // Whether deletion protection is enabled on this instance.
  public DeletionProtection?: boolean;

  // List of the type and count of accelerator cards attached to the instance.
  public GuestAccelerators?: Array<Compute_InstanceFromMachineImageGuestAccelerator>;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public Hostname?: string;

  // Metadata startup scripts made available within the instance.
  public MetadataStartupScript?: string;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public Params?: Compute_InstanceFromMachineImageParams;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  // The scheduling strategy being used by the instance.
  public Scheduling?: Compute_InstanceFromMachineImageScheduling;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public AllowStoppingForUpdate?: boolean;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public Name?: string;

  // The scratch disks attached to the instance.
  public ScratchDisks?: Array<Compute_InstanceFromMachineImageScratchDisk>;

  // The URI of the created resource.
  public SelfLink?: string;

  // A brief description of the resource.
  public Description?: string;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  // The boot disk for the instance.
  public BootDisks?: Array<Compute_InstanceFromMachineImageBootDisk>;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public Labels?: Map<string, string>;

  // Specifies the reservations that this instance can consume from.
  public ReservationAffinity?: Compute_InstanceFromMachineImageReservationAffinity;

  // The shielded vm config being used by the instance.
  public ShieldedInstanceConfig?: Compute_InstanceFromMachineImageShieldedInstanceConfig;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  public SourceMachineImage?: string;

  // The list of tags attached to the instance.
  public Tags?: Array<string>;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public CurrentStatus?: string;

  // The machine type to create.
  public MachineType?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public NetworkPerformanceConfig?: Compute_InstanceFromMachineImageNetworkPerformanceConfig;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public Project?: string;

  // The service account to attach to the instance.
  public ServiceAccount?: Compute_InstanceFromMachineImageServiceAccount;

  // The CPU platform used by this instance.
  public CpuPlatform?: string;

  // The server-assigned unique identifier of this instance.
  public InstanceId?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  // The networks attached to the instance.
  public NetworkInterfaces?: Array<Compute_InstanceFromMachineImageNetworkInterface>;

  // Whether the instance has virtual displays enabled.
  public EnableDisplay?: boolean;

  // The unique fingerprint of the labels.
  public LabelFingerprint?: string;

  // Metadata key/value pairs made available within the instance.
  public Metadata?: Map<string, string>;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  public Zone?: string;

  // List of disks attached to the instance
  public AttachedDisks?: Array<Compute_InstanceFromMachineImageAttachedDisk>;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public ConfidentialInstanceConfig?: Compute_InstanceFromMachineImageConfidentialInstanceConfig;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public DesiredStatus?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // The minimum CPU platform specified for the VM instance.
  public MinCpuPlatform?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "Zone",
        'The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, most* arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the machine image. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.\n\n> **Warning:** *Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.',
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
        InputType.String,
        "ResourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.",
        Compute_InstanceFromMachineImageReservationAffinity_GetTypes(),
        false,
        true,
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
        InputType.Object,
        "NetworkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
        Compute_InstanceFromMachineImageNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
        Compute_InstanceFromMachineImageGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
        Compute_InstanceFromMachineImageParams_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceMachineImage",
        "Name or self link of a machine\nimage to create the instance based on.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
        Compute_InstanceFromMachineImageAdvancedMachineFeatures_GetTypes(),
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
        "Description",
        "A brief description of the resource.",
        [],
        false,
        false,
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
        Compute_InstanceFromMachineImageShieldedInstanceConfig_GetTypes(),
        false,
        false,
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
        "DesiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
        InputType_Map_GetTypes(),
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
        "NetworkInterfaces",
        "The networks attached to the instance.",
        Compute_InstanceFromMachineImageNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Scheduling",
        "The scheduling strategy being used by the instance.",
        Compute_InstanceFromMachineImageScheduling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ConfidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
        Compute_InstanceFromMachineImageConfidentialInstanceConfig_GetTypes(),
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
        InputType.String,
        "Hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServiceAccount",
        "The service account to attach to the instance.",
        Compute_InstanceFromMachineImageServiceAccount_GetTypes(),
        false,
        false,
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
        InputType.Array,
        "Tags",
        "The list of tags attached to the instance.",
        InputType_String_GetTypes(),
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
    ];
  }
}
