import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceFromTemplateBootDisk } from "../types/InstanceFromTemplateBootDisk";
import { InstanceFromTemplateNetworkInterface } from "../types/InstanceFromTemplateNetworkInterface";
import { InstanceFromTemplateAttachedDisk } from "../types/InstanceFromTemplateAttachedDisk";
import { InstanceFromTemplateParams } from "../types/InstanceFromTemplateParams";
import { InstanceFromTemplateGuestAccelerator } from "../types/InstanceFromTemplateGuestAccelerator";
import { InstanceFromTemplateConfidentialInstanceConfig } from "../types/InstanceFromTemplateConfidentialInstanceConfig";
import { InstanceFromTemplateServiceAccount } from "../types/InstanceFromTemplateServiceAccount";
import { InstanceFromTemplateShieldedInstanceConfig } from "../types/InstanceFromTemplateShieldedInstanceConfig";
import { InstanceFromTemplateNetworkPerformanceConfig } from "../types/InstanceFromTemplateNetworkPerformanceConfig";
import { InstanceFromTemplateReservationAffinity } from "../types/InstanceFromTemplateReservationAffinity";
import { InstanceFromTemplateScratchDisk } from "../types/InstanceFromTemplateScratchDisk";
import { InstanceFromTemplateScheduling } from "../types/InstanceFromTemplateScheduling";
import { InstanceFromTemplateAdvancedMachineFeatures } from "../types/InstanceFromTemplateAdvancedMachineFeatures";

export interface InstanceFromTemplateArgs {
  // Metadata key/value pairs made available within the instance.
  Metadata?: Map<string, string>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  SourceInstanceTemplate?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  Labels?: Map<string, string>;

  // The scheduling strategy being used by the instance.
  Scheduling?: InstanceFromTemplateScheduling;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  ConfidentialInstanceConfig?: InstanceFromTemplateConfidentialInstanceConfig;

  // A brief description of the resource.
  Description?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  DesiredStatus?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  // Controls for advanced machine-related behavior features.
  AdvancedMachineFeatures?: InstanceFromTemplateAdvancedMachineFeatures;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  CanIpForward?: boolean;

  // The minimum CPU platform specified for the VM instance.
  MinCpuPlatform?: string;

  // The service account to attach to the instance.
  ServiceAccount?: InstanceFromTemplateServiceAccount;

  // The shielded vm config being used by the instance.
  ShieldedInstanceConfig?: InstanceFromTemplateShieldedInstanceConfig;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  AllowStoppingForUpdate?: boolean;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  Hostname?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  NetworkPerformanceConfig?: InstanceFromTemplateNetworkPerformanceConfig;

  // Specifies the reservations that this instance can consume from.
  ReservationAffinity?: InstanceFromTemplateReservationAffinity;

  // The boot disk for the instance.
  BootDisk?: InstanceFromTemplateBootDisk;

  // Whether the instance has virtual displays enabled.
  EnableDisplay?: boolean;

  // The networks attached to the instance.
  NetworkInterfaces?: Array<InstanceFromTemplateNetworkInterface>;

  // List of disks attached to the instance
  AttachedDisks?: Array<InstanceFromTemplateAttachedDisk>;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  Params?: InstanceFromTemplateParams;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  Project?: string;

  // Whether deletion protection is enabled on this instance.
  DeletionProtection?: boolean;

  // The machine type to create.
  MachineType?: string;

  // Metadata startup scripts made available within the instance.
  MetadataStartupScript?: string;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  Zone?: string;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<InstanceFromTemplateGuestAccelerator>;

  // The scratch disks attached to the instance.
  ScratchDisks?: Array<InstanceFromTemplateScratchDisk>;

  // The list of tags attached to the instance.
  Tags?: Array<string>;
}
export class InstanceFromTemplate extends Resource {
  // The server-assigned unique identifier of this instance.
  public InstanceId?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public Labels?: Map<string, string>;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public Params?: InstanceFromTemplateParams;

  // Controls for advanced machine-related behavior features.
  public AdvancedMachineFeatures?: InstanceFromTemplateAdvancedMachineFeatures;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public ConfidentialInstanceConfig?: InstanceFromTemplateConfidentialInstanceConfig;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public CurrentStatus?: string;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public Project?: string;

  // The scratch disks attached to the instance.
  public ScratchDisks?: Array<InstanceFromTemplateScratchDisk>;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  public Zone?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public Hostname?: string;

  // The unique fingerprint of the labels.
  public LabelFingerprint?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  // The list of tags attached to the instance.
  public Tags?: Array<string>;

  // List of the type and count of accelerator cards attached to the instance.
  public GuestAccelerators?: Array<InstanceFromTemplateGuestAccelerator>;

  // Metadata key/value pairs made available within the instance.
  public Metadata?: Map<string, string>;

  // Metadata startup scripts made available within the instance.
  public MetadataStartupScript?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public Name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Specifies the reservations that this instance can consume from.
  public ReservationAffinity?: InstanceFromTemplateReservationAffinity;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public DesiredStatus?: string;

  // The service account to attach to the instance.
  public ServiceAccount?: InstanceFromTemplateServiceAccount;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public AllowStoppingForUpdate?: boolean;

  // List of disks attached to the instance
  public AttachedDisks?: Array<InstanceFromTemplateAttachedDisk>;

  // The boot disk for the instance.
  public BootDisk?: InstanceFromTemplateBootDisk;

  // Whether deletion protection is enabled on this instance.
  public DeletionProtection?: boolean;

  // A brief description of the resource.
  public Description?: string;

  // The networks attached to the instance.
  public NetworkInterfaces?: Array<InstanceFromTemplateNetworkInterface>;

  // The URI of the created resource.
  public SelfLink?: string;

  // The CPU platform used by this instance.
  public CpuPlatform?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  public SourceInstanceTemplate?: string;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public CanIpForward?: boolean;

  // Whether the instance has virtual displays enabled.
  public EnableDisplay?: boolean;

  // The machine type to create.
  public MachineType?: string;

  // The minimum CPU platform specified for the VM instance.
  public MinCpuPlatform?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public NetworkPerformanceConfig?: InstanceFromTemplateNetworkPerformanceConfig;

  // The scheduling strategy being used by the instance.
  public Scheduling?: InstanceFromTemplateScheduling;

  // The shielded vm config being used by the instance.
  public ShieldedInstanceConfig?: InstanceFromTemplateShieldedInstanceConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ConfidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataStartupScript",
        "Metadata startup scripts made available within the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "The list of tags attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MinCpuPlatform",
        "The minimum CPU platform specified for the VM instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account to attach to the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AttachedDisks",
        "List of disks attached to the instance",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to create.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AllowStoppingForUpdate",
        "If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires\nstopping the instance without setting this field, the update will fail.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "The shielded vm config being used by the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableDisplay",
        "Whether the instance has virtual displays enabled.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ScratchDisks",
        "The scratch disks attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata key/value pairs made available within the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CanIpForward",
        "Whether sending and receiving of packets with non-matching source or destination IPs is allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BootDisk",
        "The boot disk for the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeletionProtection",
        "Whether deletion protection is enabled on this instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NetworkInterfaces",
        "The networks attached to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceInstanceTemplate",
        "Name or self link of an instance\ntemplate to create the instance based on. It is recommended to reference\ninstance templates through their unique id (`self_link_unique` attribute).\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdvancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither\nself_link nor project are provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scheduling",
        "The scheduling strategy being used by the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, all arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the template. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.",
      ),
    ];
  }
}
