import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceFromMachineImageNetworkInterface } from "../types/InstanceFromMachineImageNetworkInterface";
import { InstanceFromMachineImageAttachedDisk } from "../types/InstanceFromMachineImageAttachedDisk";
import { InstanceFromMachineImageServiceAccount } from "../types/InstanceFromMachineImageServiceAccount";
import { InstanceFromMachineImageShieldedInstanceConfig } from "../types/InstanceFromMachineImageShieldedInstanceConfig";
import { InstanceFromMachineImageScheduling } from "../types/InstanceFromMachineImageScheduling";
import { InstanceFromMachineImageGuestAccelerator } from "../types/InstanceFromMachineImageGuestAccelerator";
import { InstanceFromMachineImageConfidentialInstanceConfig } from "../types/InstanceFromMachineImageConfidentialInstanceConfig";
import { InstanceFromMachineImageNetworkPerformanceConfig } from "../types/InstanceFromMachineImageNetworkPerformanceConfig";
import { InstanceFromMachineImageParams } from "../types/InstanceFromMachineImageParams";
import { InstanceFromMachineImageScratchDisk } from "../types/InstanceFromMachineImageScratchDisk";
import { InstanceFromMachineImageAdvancedMachineFeatures } from "../types/InstanceFromMachineImageAdvancedMachineFeatures";
import { InstanceFromMachineImageReservationAffinity } from "../types/InstanceFromMachineImageReservationAffinity";
import { InstanceFromMachineImageBootDisk } from "../types/InstanceFromMachineImageBootDisk";

export interface InstanceFromMachineImageArgs {
  // A brief description of the resource.
  Description?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  DesiredStatus?: string;

  // Controls for advanced machine-related behavior features.
  AdvancedMachineFeatures?: InstanceFromMachineImageAdvancedMachineFeatures;

  // Specifies the reservations that this instance can consume from.
  ReservationAffinity?: InstanceFromMachineImageReservationAffinity;

  // The service account to attach to the instance.
  ServiceAccount?: InstanceFromMachineImageServiceAccount;

  // Whether deletion protection is enabled on this instance.
  DeletionProtection?: boolean;

  // Metadata key/value pairs made available within the instance.
  Metadata?: Map<string, string>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  // The scheduling strategy being used by the instance.
  Scheduling?: InstanceFromMachineImageScheduling;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  Project?: string;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<InstanceFromMachineImageGuestAccelerator>;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  Hostname?: string;

  // The machine type to create.
  MachineType?: string;

  // Metadata startup scripts made available within the instance.
  MetadataStartupScript?: string;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  ConfidentialInstanceConfig?: InstanceFromMachineImageConfidentialInstanceConfig;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  NetworkPerformanceConfig?: InstanceFromMachineImageNetworkPerformanceConfig;

  // The list of tags attached to the instance.
  Tags?: Array<string>;

  // Whether the instance has virtual displays enabled.
  EnableDisplay?: boolean;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  Params?: InstanceFromMachineImageParams;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  SourceMachineImage?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  Labels?: Map<string, string>;

  // The minimum CPU platform specified for the VM instance.
  MinCpuPlatform?: string;

  // The shielded vm config being used by the instance.
  ShieldedInstanceConfig?: InstanceFromMachineImageShieldedInstanceConfig;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  AllowStoppingForUpdate?: boolean;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  CanIpForward?: boolean;

  // The networks attached to the instance.
  NetworkInterfaces?: Array<InstanceFromMachineImageNetworkInterface>;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  Zone?: string;
}
export class InstanceFromMachineImage extends Resource {
  // The CPU platform used by this instance.
  public CpuPlatform?: string;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public Hostname?: string;

  // The minimum CPU platform specified for the VM instance.
  public MinCpuPlatform?: string;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public Params?: InstanceFromMachineImageParams;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  public SourceMachineImage?: string;

  // The server-assigned unique identifier of this instance.
  public InstanceId?: string;

  // The networks attached to the instance.
  public NetworkInterfaces?: Array<InstanceFromMachineImageNetworkInterface>;

  // The service account to attach to the instance.
  public ServiceAccount?: InstanceFromMachineImageServiceAccount;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // List of the type and count of accelerator cards attached to the instance.
  public GuestAccelerators?: Array<InstanceFromMachineImageGuestAccelerator>;

  // Metadata key/value pairs made available within the instance.
  public Metadata?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public Project?: string;

  // Controls for advanced machine-related behavior features.
  public AdvancedMachineFeatures?: InstanceFromMachineImageAdvancedMachineFeatures;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public AllowStoppingForUpdate?: boolean;

  // List of disks attached to the instance
  public AttachedDisks?: Array<InstanceFromMachineImageAttachedDisk>;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public CurrentStatus?: string;

  // The machine type to create.
  public MachineType?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  // Metadata startup scripts made available within the instance.
  public MetadataStartupScript?: string;

  // Specifies the reservations that this instance can consume from.
  public ReservationAffinity?: InstanceFromMachineImageReservationAffinity;

  // The list of tags attached to the instance.
  public Tags?: Array<string>;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public Labels?: Map<string, string>;

  // The scheduling strategy being used by the instance.
  public Scheduling?: InstanceFromMachineImageScheduling;

  // The scratch disks attached to the instance.
  public ScratchDisks?: Array<InstanceFromMachineImageScratchDisk>;

  // The URI of the created resource.
  public SelfLink?: string;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public CanIpForward?: boolean;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public NetworkPerformanceConfig?: InstanceFromMachineImageNetworkPerformanceConfig;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  // The boot disk for the instance.
  public BootDisks?: Array<InstanceFromMachineImageBootDisk>;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public ConfidentialInstanceConfig?: InstanceFromMachineImageConfidentialInstanceConfig;

  // Whether the instance has virtual displays enabled.
  public EnableDisplay?: boolean;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The shielded vm config being used by the instance.
  public ShieldedInstanceConfig?: InstanceFromMachineImageShieldedInstanceConfig;

  // Whether deletion protection is enabled on this instance.
  public DeletionProtection?: boolean;

  // A brief description of the resource.
  public Description?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public DesiredStatus?: string;

  // The unique fingerprint of the labels.
  public LabelFingerprint?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public Name?: string;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ResourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to create.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AllowStoppingForUpdate",
        "If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires\nstopping the instance without setting this field, the update will fail.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata key/value pairs made available within the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataStartupScript",
        "Metadata startup scripts made available within the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdvancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "The shielded vm config being used by the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableDisplay",
        "Whether the instance has virtual displays enabled.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeletionProtection",
        "Whether deletion protection is enabled on this instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither\nself_link nor project are provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MinCpuPlatform",
        "The minimum CPU platform specified for the VM instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        'The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, most* arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the machine image. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.\n\n> **Warning:** *Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account to attach to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NetworkInterfaces",
        "The networks attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "The list of tags attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceMachineImage",
        "Name or self link of a machine\nimage to create the instance based on.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CanIpForward",
        "Whether sending and receiving of packets with non-matching source or destination IPs is allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scheduling",
        "The scheduling strategy being used by the instance.",
      ),
    ];
  }
}
