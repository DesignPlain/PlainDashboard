import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceTemplateGuestAccelerator,
  compute_InstanceTemplateGuestAccelerator_GetTypes,
} from "../types/compute_InstanceTemplateGuestAccelerator";
import {
  compute_InstanceTemplateReservationAffinity,
  compute_InstanceTemplateReservationAffinity_GetTypes,
} from "../types/compute_InstanceTemplateReservationAffinity";
import {
  compute_InstanceTemplateDisk,
  compute_InstanceTemplateDisk_GetTypes,
} from "../types/compute_InstanceTemplateDisk";
import {
  compute_InstanceTemplateNetworkPerformanceConfig,
  compute_InstanceTemplateNetworkPerformanceConfig_GetTypes,
} from "../types/compute_InstanceTemplateNetworkPerformanceConfig";
import {
  compute_InstanceTemplateNetworkInterface,
  compute_InstanceTemplateNetworkInterface_GetTypes,
} from "../types/compute_InstanceTemplateNetworkInterface";
import {
  compute_InstanceTemplateShieldedInstanceConfig,
  compute_InstanceTemplateShieldedInstanceConfig_GetTypes,
} from "../types/compute_InstanceTemplateShieldedInstanceConfig";
import {
  compute_InstanceTemplateConfidentialInstanceConfig,
  compute_InstanceTemplateConfidentialInstanceConfig_GetTypes,
} from "../types/compute_InstanceTemplateConfidentialInstanceConfig";
import {
  compute_InstanceTemplateServiceAccount,
  compute_InstanceTemplateServiceAccount_GetTypes,
} from "../types/compute_InstanceTemplateServiceAccount";
import {
  compute_InstanceTemplateAdvancedMachineFeatures,
  compute_InstanceTemplateAdvancedMachineFeatures_GetTypes,
} from "../types/compute_InstanceTemplateAdvancedMachineFeatures";
import {
  compute_InstanceTemplateScheduling,
  compute_InstanceTemplateScheduling_GetTypes,
} from "../types/compute_InstanceTemplateScheduling";

export interface InstanceTemplateArgs {
  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  canIpForward?: boolean;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  guestAccelerators?: Array<compute_InstanceTemplateGuestAccelerator>;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  machineType?: string;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  metadata?: Map<string, string>;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  networkInterfaces?: Array<compute_InstanceTemplateNetworkInterface>;

  /*
An instance template is a global resource that is not
bound to a zone or a region. However, you can still specify some regional
resources in an instance template, which restricts the template to the
region where that resource resides. For example, a custom `subnetwork`
resource is tied to a specific region. Defaults to the region of the
Provider if no value is given.
*/
  region?: string;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  minCpuPlatform?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  shieldedInstanceConfig?: compute_InstanceTemplateShieldedInstanceConfig;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  confidentialInstanceConfig?: compute_InstanceTemplateConfidentialInstanceConfig;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  enableDisplay?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  reservationAffinity?: compute_InstanceTemplateReservationAffinity;

  // A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  resourceManagerTags?: Map<string, string>;

  // Service account to attach to the instance. Structure is documented below.
  serviceAccount?: compute_InstanceTemplateServiceAccount;

  // Tags to attach to the instance.
  tags?: Array<string>;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  advancedMachineFeatures?: compute_InstanceTemplateAdvancedMachineFeatures;

  // A brief description of this resource.
  description?: string;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  disks?: Array<compute_InstanceTemplateDisk>;

  /*
A brief description to use for instances
created from this template.
*/
  instanceDescription?: string;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  metadataStartupScript?: string;

  /*
(Optional, Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  networkPerformanceConfig?: compute_InstanceTemplateNetworkPerformanceConfig;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  scheduling?: compute_InstanceTemplateScheduling;
}
export class InstanceTemplate extends DS_Resource {
  // A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  public resourceManagerTags?: Map<string, string>;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  public advancedMachineFeatures?: compute_InstanceTemplateAdvancedMachineFeatures;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  public enableDisplay?: boolean;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  public name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
A special URI of the created resource that uniquely identifies this instance template with the following format: `projects/{{project}}/global/instanceTemplates/{{name}}?uniqueId={{uniqueId}}`
Referencing an instance template via this attribute prevents Time of Check to Time of Use attacks when the instance template resides in a shared/untrusted environment.
*/
  public selfLinkUnique?: string;

  /*
A brief description to use for instances
created from this template.
*/
  public instanceDescription?: string;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  public metadata?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // The unique fingerprint of the metadata.
  public metadataFingerprint?: string;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  public canIpForward?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  public guestAccelerators?: Array<compute_InstanceTemplateGuestAccelerator>;

  // A brief description of this resource.
  public description?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  public networkInterfaces?: Array<compute_InstanceTemplateNetworkInterface>;

  /*
An instance template is a global resource that is not
bound to a zone or a region. However, you can still specify some regional
resources in an instance template, which restricts the template to the
region where that resource resides. For example, a custom `subnetwork`
resource is tied to a specific region. Defaults to the region of the
Provider if no value is given.
*/
  public region?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  public resourcePolicies?: string;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  public disks?: Array<compute_InstanceTemplateDisk>;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  public minCpuPlatform?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  public shieldedInstanceConfig?: compute_InstanceTemplateShieldedInstanceConfig;

  // The unique fingerprint of the tags.
  public tagsFingerprint?: string;

  // Service account to attach to the instance. Structure is documented below.
  public serviceAccount?: compute_InstanceTemplateServiceAccount;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  public confidentialInstanceConfig?: compute_InstanceTemplateConfidentialInstanceConfig;

  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  public machineType?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  public reservationAffinity?: compute_InstanceTemplateReservationAffinity;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  public scheduling?: compute_InstanceTemplateScheduling;

  // Tags to attach to the instance.
  public tags?: Array<string>;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  public metadataStartupScript?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  /*
(Optional, Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  public networkPerformanceConfig?: compute_InstanceTemplateNetworkPerformanceConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).",
        () => compute_InstanceTemplateShieldedInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "Tags to attach to the instance.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the instance template. If you leave\nthis blank, the provider will auto-generate a unique name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "Networks to attach to instances created from\nthis template. This can be specified multiple times for multiple networks.\nStructure is documented below.",
        () => compute_InstanceTemplateNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicies",
        "- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDisplay",
        "Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true in order to update this field.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccount",
        "Service account to attach to the instance. Structure is documented below.",
        () => compute_InstanceTemplateServiceAccount_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "The scheduling strategy to use. More details about\nthis configuration option are detailed below.",
        () => compute_InstanceTemplateScheduling_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedMachineFeatures",
        "Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below",
        () => compute_InstanceTemplateAdvancedMachineFeatures_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceDescription",
        "A brief description to use for instances\ncreated from this template.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataStartupScript",
        "An alternative to using the\nstartup-script metadata key, mostly to match the compute_instance resource.\nThis replaces the startup-script metadata key on the created instance and\nthus the two mechanisms are not allowed to be used simultaneously.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "minCpuPlatform",
        "Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Specifies the reservations that this instance can consume from.\nStructure is documented below.",
        () => compute_InstanceTemplateReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceManagerTags",
        "A set of key/value resource manager tag pairs to bind to the instances. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata key/value pairs to make available from\nwithin instances created from this template.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "An instance template is a global resource that is not\nbound to a zone or a region. However, you can still specify some regional\nresources in an instance template, which restricts the template to the\nregion where that resource resides. For example, a custom `subnetwork`\nresource is tied to a specific region. Defaults to the region of the\nProvider if no value is given.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialInstanceConfig",
        "Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below",
        () => compute_InstanceTemplateConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of this resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "canIpForward",
        "Whether to allow sending and receiving of\npackets with non-matching source or destination IPs. This defaults to false.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestAccelerators",
        "List of the type and count of accelerator cards attached to the instance. Structure documented below.",
        () => compute_InstanceTemplateGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to instances\ncreated from this template.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to create.\n\nTo create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "disks",
        "Disks to attach to instances created from this template.\nThis can be specified multiple times for multiple disks. Structure is\ndocumented below.",
        () => compute_InstanceTemplateDisk_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPerformanceConfig",
        "(Optional, Configures network performance settings for the instance created from the\ntemplate. Structure is documented below. **Note**: `machine_type`\nmust be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.",
        () => compute_InstanceTemplateNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
