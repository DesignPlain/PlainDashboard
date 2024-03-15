import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceTemplateAdvancedMachineFeatures } from "../types/InstanceTemplateAdvancedMachineFeatures";
import { InstanceTemplateConfidentialInstanceConfig } from "../types/InstanceTemplateConfidentialInstanceConfig";
import { InstanceTemplateGuestAccelerator } from "../types/InstanceTemplateGuestAccelerator";
import { InstanceTemplateServiceAccount } from "../types/InstanceTemplateServiceAccount";
import { InstanceTemplateNetworkInterface } from "../types/InstanceTemplateNetworkInterface";
import { InstanceTemplateShieldedInstanceConfig } from "../types/InstanceTemplateShieldedInstanceConfig";
import { InstanceTemplateDisk } from "../types/InstanceTemplateDisk";
import { InstanceTemplateReservationAffinity } from "../types/InstanceTemplateReservationAffinity";
import { InstanceTemplateScheduling } from "../types/InstanceTemplateScheduling";
import { InstanceTemplateNetworkPerformanceConfig } from "../types/InstanceTemplateNetworkPerformanceConfig";

export interface InstanceTemplateArgs {
  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  MachineType?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  NamePrefix?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  ReservationAffinity?: InstanceTemplateReservationAffinity;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  CanIpForward?: boolean;

  // A brief description of this resource.
  Description?: string;

  /*
A brief description to use for instances
created from this template.
*/
  InstanceDescription?: string;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  Scheduling?: InstanceTemplateScheduling;

  /*
(Optional, Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  NetworkPerformanceConfig?: InstanceTemplateNetworkPerformanceConfig;

  /*
An instance template is a global resource that is not
bound to a zone or a region. However, you can still specify some regional
resources in an instance template, which restricts the template to the
region where that resource resides. For example, a custom `subnetwork`
resource is tied to a specific region. Defaults to the region of the
Provider if no value is given.
*/
  Region?: string;

  // Service account to attach to the instance. Structure is documented below.
  ServiceAccount?: InstanceTemplateServiceAccount;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  MetadataStartupScript?: string;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  MinCpuPlatform?: string;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  Name?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  NetworkInterfaces?: Array<InstanceTemplateNetworkInterface>;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  ShieldedInstanceConfig?: InstanceTemplateShieldedInstanceConfig;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  AdvancedMachineFeatures?: InstanceTemplateAdvancedMachineFeatures;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  Disks?: Array<InstanceTemplateDisk>;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  EnableDisplay?: boolean;

  // A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  ResourceManagerTags?: Map<string, string>;

  // Tags to attach to the instance.
  Tags?: Array<string>;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  ConfidentialInstanceConfig?: InstanceTemplateConfidentialInstanceConfig;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  GuestAccelerators?: Array<InstanceTemplateGuestAccelerator>;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  Metadata?: Map<string, string>;
}
export class InstanceTemplate extends Resource {
  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  public AdvancedMachineFeatures?: InstanceTemplateAdvancedMachineFeatures;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  public ConfidentialInstanceConfig?: InstanceTemplateConfidentialInstanceConfig;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  public Metadata?: Map<string, string>;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  public Name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public NamePrefix?: string;

  // Service account to attach to the instance. Structure is documented below.
  public ServiceAccount?: InstanceTemplateServiceAccount;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The URI of the created resource.
  public SelfLink?: string;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  /*
(Optional, Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  public NetworkPerformanceConfig?: InstanceTemplateNetworkPerformanceConfig;

  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  public MachineType?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  public Scheduling?: InstanceTemplateScheduling;

  // A brief description of this resource.
  public Description?: string;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  public MinCpuPlatform?: string;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  public Disks?: Array<InstanceTemplateDisk>;

  /*
A brief description to use for instances
created from this template.
*/
  public InstanceDescription?: string;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // Tags to attach to the instance.
  public Tags?: Array<string>;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  public CanIpForward?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  public EnableDisplay?: boolean;

  /*
An instance template is a global resource that is not
bound to a zone or a region. However, you can still specify some regional
resources in an instance template, which restricts the template to the
region where that resource resides. For example, a custom `subnetwork`
resource is tied to a specific region. Defaults to the region of the
Provider if no value is given.
*/
  public Region?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  /*
A special URI of the created resource that uniquely identifies this instance template with the following format: `projects/{{project}}/global/instanceTemplates/{{name}}?uniqueId={{uniqueId}}`
Referencing an instance template via this attribute prevents Time of Check to Time of Use attacks when the instance template resides in a shared/untrusted environment.
*/
  public SelfLinkUnique?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  public ShieldedInstanceConfig?: InstanceTemplateShieldedInstanceConfig;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  public GuestAccelerators?: Array<InstanceTemplateGuestAccelerator>;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  public MetadataStartupScript?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  public NetworkInterfaces?: Array<InstanceTemplateNetworkInterface>;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  public ReservationAffinity?: InstanceTemplateReservationAffinity;

  // A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  public ResourceManagerTags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataStartupScript",
        "An alternative to using the\nstartup-script metadata key, mostly to match the compute_instance resource.\nThis replaces the startup-script metadata key on the created instance and\nthus the two mechanisms are not allowed to be used simultaneously.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NetworkInterfaces",
        "Networks to attach to instances created from\nthis template. This can be specified multiple times for multiple networks.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceManagerTags",
        "A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "An instance template is a global resource that is not\nbound to a zone or a region. However, you can still specify some regional\nresources in an instance template, which restricts the template to the\nregion where that resource resides. For example, a custom `subnetwork`\nresource is tied to a specific region. Defaults to the region of the\nProvider if no value is given.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to instances\ncreated from this template.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Disks",
        "Disks to attach to instances created from this template.\nThis can be specified multiple times for multiple disks. Structure is\ndocumented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to create.\n\nTo create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourcePolicies",
        "- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CanIpForward",
        "Whether to allow sending and receiving of\npackets with non-matching source or destination IPs. This defaults to false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceDescription",
        "A brief description to use for instances\ncreated from this template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfidentialInstanceConfig",
        "Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance. Structure documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata key/value pairs to make available from\nwithin instances created from this template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scheduling",
        "The scheduling strategy to use. More details about\nthis configuration option are detailed below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkPerformanceConfig",
        "(Optional, Configures network performance settings for the instance created from the\ntemplate. Structure is documented below. **Note**: `machine_type`\nmust be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Service account to attach to the instance. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "Tags to attach to the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableDisplay",
        "Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true in order to update this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MinCpuPlatform",
        "Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance template. If you leave\nthis blank, the provider will auto-generate a unique name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdvancedMachineFeatures",
        "Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below",
      ),
    ];
  }
}
