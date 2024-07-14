import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionInstanceTemplateServiceAccount,
  compute_RegionInstanceTemplateServiceAccount_GetTypes,
} from "../types/compute_RegionInstanceTemplateServiceAccount";
import {
  compute_RegionInstanceTemplateShieldedInstanceConfig,
  compute_RegionInstanceTemplateShieldedInstanceConfig_GetTypes,
} from "../types/compute_RegionInstanceTemplateShieldedInstanceConfig";
import {
  compute_RegionInstanceTemplateAdvancedMachineFeatures,
  compute_RegionInstanceTemplateAdvancedMachineFeatures_GetTypes,
} from "../types/compute_RegionInstanceTemplateAdvancedMachineFeatures";
import {
  compute_RegionInstanceTemplateNetworkInterface,
  compute_RegionInstanceTemplateNetworkInterface_GetTypes,
} from "../types/compute_RegionInstanceTemplateNetworkInterface";
import {
  compute_RegionInstanceTemplateReservationAffinity,
  compute_RegionInstanceTemplateReservationAffinity_GetTypes,
} from "../types/compute_RegionInstanceTemplateReservationAffinity";
import {
  compute_RegionInstanceTemplateScheduling,
  compute_RegionInstanceTemplateScheduling_GetTypes,
} from "../types/compute_RegionInstanceTemplateScheduling";
import {
  compute_RegionInstanceTemplateGuestAccelerator,
  compute_RegionInstanceTemplateGuestAccelerator_GetTypes,
} from "../types/compute_RegionInstanceTemplateGuestAccelerator";
import {
  compute_RegionInstanceTemplateConfidentialInstanceConfig,
  compute_RegionInstanceTemplateConfidentialInstanceConfig_GetTypes,
} from "../types/compute_RegionInstanceTemplateConfidentialInstanceConfig";
import {
  compute_RegionInstanceTemplateNetworkPerformanceConfig,
  compute_RegionInstanceTemplateNetworkPerformanceConfig_GetTypes,
} from "../types/compute_RegionInstanceTemplateNetworkPerformanceConfig";
import {
  compute_RegionInstanceTemplateDisk,
  compute_RegionInstanceTemplateDisk_GetTypes,
} from "../types/compute_RegionInstanceTemplateDisk";

export interface RegionInstanceTemplateArgs {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  shieldedInstanceConfig?: compute_RegionInstanceTemplateShieldedInstanceConfig;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  advancedMachineFeatures?: compute_RegionInstanceTemplateAdvancedMachineFeatures;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  guestAccelerators?: Array<compute_RegionInstanceTemplateGuestAccelerator>;

  /*
A brief description to use for instances
created from this template.
*/
  instanceDescription?: string;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  confidentialInstanceConfig?: compute_RegionInstanceTemplateConfidentialInstanceConfig;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  machineType?: string;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  minCpuPlatform?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  networkInterfaces?: Array<compute_RegionInstanceTemplateNetworkInterface>;

  /*
Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  networkPerformanceConfig?: compute_RegionInstanceTemplateNetworkPerformanceConfig;

  /*
The Region in which the resource belongs.
If region is not provided, the provider region is used.
*/
  region?: string;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  canIpForward?: boolean;

  // A brief description of this resource.
  description?: string;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  disks?: Array<compute_RegionInstanceTemplateDisk>;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  reservationAffinity?: compute_RegionInstanceTemplateReservationAffinity;

  // A set of key/value resource manager tag pairs to bind to the instance. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  resourceManagerTags?: Map<string, string>;

  // Tags to attach to the instance.
  tags?: Array<string>;

  // The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  name?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  scheduling?: compute_RegionInstanceTemplateScheduling;

  // Service account to attach to the instance. Structure is documented below.
  serviceAccount?: compute_RegionInstanceTemplateServiceAccount;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  enableDisplay?: boolean;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  metadata?: Map<string, string>;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  metadataStartupScript?: string;
}
export class RegionInstanceTemplate extends Resource {
  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  public resourcePolicies?: string;

  /*
Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
*/
  public minCpuPlatform?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  public reservationAffinity?: compute_RegionInstanceTemplateReservationAffinity;

  // Tags to attach to the instance.
  public tags?: Array<string>;

  // List of the type and count of accelerator cards attached to the instance. Structure documented below.
  public guestAccelerators?: Array<compute_RegionInstanceTemplateGuestAccelerator>;

  // The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  public name?: string;

  /*
A brief description to use for instances
created from this template.
*/
  public instanceDescription?: string;

  /*
A set of key/value label pairs to assign to instances
created from this template.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Metadata key/value pairs to make available from
within instances created from this template.
*/
  public metadata?: Map<string, string>;

  /*
The Region in which the resource belongs.
If region is not provided, the provider region is used.
*/
  public region?: string;

  // A brief description of this resource.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
*/
  public shieldedInstanceConfig?: compute_RegionInstanceTemplateShieldedInstanceConfig;

  // The unique fingerprint of the tags.
  public tagsFingerprint?: string;

  /*
Configures network performance settings for the instance created from the
template. Structure is documented below. --Note--: `machine_type`
must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  public networkPerformanceConfig?: compute_RegionInstanceTemplateNetworkPerformanceConfig;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  public scheduling?: compute_RegionInstanceTemplateScheduling;

  /*
An alternative to using the
startup-script metadata key, mostly to match the compute_instance resource.
This replaces the startup-script metadata key on the created instance and
thus the two mechanisms are not allowed to be used simultaneously.
*/
  public metadataStartupScript?: string;

  /*
Networks to attach to instances created from
this template. This can be specified multiple times for multiple networks.
Structure is documented below.
*/
  public networkInterfaces?: Array<compute_RegionInstanceTemplateNetworkInterface>;

  /*
The machine type to create.

To create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.

- - -
*/
  public machineType?: string;

  // The unique fingerprint of the metadata.
  public metadataFingerprint?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs. This defaults to false.
*/
  public canIpForward?: boolean;

  /*
Disks to attach to instances created from this template.
This can be specified multiple times for multiple disks. Structure is
documented below.
*/
  public disks?: Array<compute_RegionInstanceTemplateDisk>;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true in order to update this field.
*/
  public enableDisplay?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // A set of key/value resource manager tag pairs to bind to the instance. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  public resourceManagerTags?: Map<string, string>;

  // Service account to attach to the instance. Structure is documented below.
  public serviceAccount?: compute_RegionInstanceTemplateServiceAccount;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below
  public advancedMachineFeatures?: compute_RegionInstanceTemplateAdvancedMachineFeatures;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  public confidentialInstanceConfig?: compute_RegionInstanceTemplateConfidentialInstanceConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceDescription",
        "A brief description to use for instances\ncreated from this template.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialInstanceConfig",
        "Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below",
        compute_RegionInstanceTemplateConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "minCpuPlatform",
        "Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPerformanceConfig",
        "Configures network performance settings for the instance created from the\ntemplate. Structure is documented below. **Note**: `machine_type`\nmust be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.",
        compute_RegionInstanceTemplateNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "The scheduling strategy to use. More details about\nthis configuration option are detailed below.",
        compute_RegionInstanceTemplateScheduling_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestAccelerators",
        "List of the type and count of accelerator cards attached to the instance. Structure documented below.",
        compute_RegionInstanceTemplateGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "Networks to attach to instances created from\nthis template. This can be specified multiple times for multiple networks.\nStructure is documented below.",
        compute_RegionInstanceTemplateNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "disks",
        "Disks to attach to instances created from this template.\nThis can be specified multiple times for multiple disks. Structure is\ndocumented below.",
        compute_RegionInstanceTemplateDisk_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Specifies the reservations that this instance can consume from.\nStructure is documented below.",
        compute_RegionInstanceTemplateReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "Tags to attach to the instance.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicies",
        "- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccount",
        "Service account to attach to the instance. Structure is documented below.",
        compute_RegionInstanceTemplateServiceAccount_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata key/value pairs to make available from\nwithin instances created from this template.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "canIpForward",
        "Whether to allow sending and receiving of\npackets with non-matching source or destination IPs. This defaults to false.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataStartupScript",
        "An alternative to using the\nstartup-script metadata key, mostly to match the compute_instance resource.\nThis replaces the startup-script metadata key on the created instance and\nthus the two mechanisms are not allowed to be used simultaneously.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to instances\ncreated from this template.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedMachineFeatures",
        "Configure Nested Virtualisation and Simultaneous Hyper Threading on this VM. Structure is documented below",
        compute_RegionInstanceTemplateAdvancedMachineFeatures_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to create.\n\nTo create a machine with a [custom type](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) (such as extended memory), format the value like `custom-VCPUS-MEM_IN_MB` like `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Region in which the resource belongs.\nIf region is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceManagerTags",
        "A set of key/value resource manager tag pairs to bind to the instance. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDisplay",
        "Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true in order to update this field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).",
        compute_RegionInstanceTemplateShieldedInstanceConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
