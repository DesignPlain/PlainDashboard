import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceReservationAffinity,
  compute_InstanceReservationAffinity_GetTypes,
} from "../types/compute_InstanceReservationAffinity";
import {
  compute_InstanceBootDisk,
  compute_InstanceBootDisk_GetTypes,
} from "../types/compute_InstanceBootDisk";
import {
  compute_InstanceShieldedInstanceConfig,
  compute_InstanceShieldedInstanceConfig_GetTypes,
} from "../types/compute_InstanceShieldedInstanceConfig";
import {
  compute_InstanceNetworkInterface,
  compute_InstanceNetworkInterface_GetTypes,
} from "../types/compute_InstanceNetworkInterface";
import {
  compute_InstanceServiceAccount,
  compute_InstanceServiceAccount_GetTypes,
} from "../types/compute_InstanceServiceAccount";
import {
  compute_InstanceAttachedDisk,
  compute_InstanceAttachedDisk_GetTypes,
} from "../types/compute_InstanceAttachedDisk";
import {
  compute_InstanceAdvancedMachineFeatures,
  compute_InstanceAdvancedMachineFeatures_GetTypes,
} from "../types/compute_InstanceAdvancedMachineFeatures";
import {
  compute_InstanceGuestAccelerator,
  compute_InstanceGuestAccelerator_GetTypes,
} from "../types/compute_InstanceGuestAccelerator";
import {
  compute_InstanceScratchDisk,
  compute_InstanceScratchDisk_GetTypes,
} from "../types/compute_InstanceScratchDisk";
import {
  compute_InstanceNetworkPerformanceConfig,
  compute_InstanceNetworkPerformanceConfig_GetTypes,
} from "../types/compute_InstanceNetworkPerformanceConfig";
import {
  compute_InstanceScheduling,
  compute_InstanceScheduling_GetTypes,
} from "../types/compute_InstanceScheduling";
import {
  compute_InstanceConfidentialInstanceConfig,
  compute_InstanceConfidentialInstanceConfig_GetTypes,
} from "../types/compute_InstanceConfidentialInstanceConfig";
import {
  compute_InstanceParams,
  compute_InstanceParams_GetTypes,
} from "../types/compute_InstanceParams";

export interface InstanceArgs {
  /*
Desired status of the instance. Either
`"RUNNING"` or `"TERMINATED"`.
*/
  desiredStatus?: string;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  enableDisplay?: boolean;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.
Valid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.
The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  hostname?: string;

  /*
The boot disk for the instance.
Structure is documented below.
*/
  bootDisk?: compute_InstanceBootDisk;

  /*
Metadata key/value pairs to make available from
within the instance. Ssh keys attached in the Cloud Console will be removed.
Add them to your config in order to keep them attached to your instance. A
list of default metadata values (e.g. ssh-keys) can be found [here](https://cloud.google.com/compute/docs/metadata/default-metadata-values)

> Depending on the OS you choose for your instance, some metadata keys have
special functionality.  Most linux-based images will run the content of
`metadata.startup-script` in a shell on every boot.  At a minimum,
Debian, CentOS, RHEL, SLES, Container-Optimized OS, and Ubuntu images
support this key.  Windows instances require other keys depending on the format
of the script and the time you would like it to run - see [this table](https://cloud.google.com/compute/docs/startupscript#providing_a_startup_script_for_windows_instances).
For the convenience of the users of `metadata.startup-script`,
we provide a special attribute, `metadata_startup_script`, which is documented below.
*/
  metadata?: Map<string, string>;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  scheduling?: compute_InstanceScheduling;

  // The zone that the machine should be created in. If it is not provided, the provider zone is used.
  zone?: string;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  confidentialInstanceConfig?: compute_InstanceConfidentialInstanceConfig;

  /*
An alternative to using the
startup-script metadata key, except this one forces the instance to be recreated
(thus re-running the script) if it is changed. This replaces the startup-script
metadata key on the created instance and thus the two mechanisms are not
allowed to be used simultaneously.  Users are free to use either mechanism - the
only distinction is that this separate attribute will cause a recreate on
modification.  On import, `metadata_startup_script` will not be set - if you
choose to specify it you will see a diff immediately after import causing a
destroy/recreate operation. If importing an instance and specifying this value
is desired, you will need to modify your state file.
*/
  metadataStartupScript?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  shieldedInstanceConfig?: compute_InstanceShieldedInstanceConfig;

  // A list of network tags to attach to the instance.
  tags?: Array<string>;

  // A brief description of this resource.
  description?: string;

  /*
The machine type to create.

--Note:-- If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.

[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.

There is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.
*/
  machineType?: string;

  /*
Networks to attach to the instance. This can
be specified multiple times. Structure is documented below.

- - -
*/
  networkInterfaces?: Array<compute_InstanceNetworkInterface>;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs.
This defaults to false.
*/
  canIpForward?: boolean;

  /*
A map of key/value label pairs to assign to the instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Service account to attach to the instance.
Structure is documented below.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  serviceAccount?: compute_InstanceServiceAccount;

  // Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.
  attachedDisks?: Array<compute_InstanceAttachedDisk>;

  /*
Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  minCpuPlatform?: string;

  /*
Additional instance parameters.
.
*/
  params?: compute_InstanceParams;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below
  advancedMachineFeatures?: compute_InstanceAdvancedMachineFeatures;

  /*
Enable deletion protection on this instance. Defaults to false.
--Note:-- you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.
*/
  deletionProtection?: boolean;

  /*
List of the type and count of accelerator cards attached to the instance. Structure documented below.
--Note:-- GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.
*/
  guestAccelerators?: Array<compute_InstanceGuestAccelerator>;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  reservationAffinity?: compute_InstanceReservationAffinity;

  /*
Scratch disks to attach to the instance. This can be
specified multiple times for multiple scratch disks. Structure is documented below.
*/
  scratchDisks?: Array<compute_InstanceScratchDisk>;

  /*
If true, allows this prvider to stop the instance to update its properties.
If you try to update a property that requires stopping the instance without setting this field, the update will fail.
*/
  allowStoppingForUpdate?: boolean;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  /*
(Optional, Beta
Configures network performance settings for the instance. Structure is
documented below. --Note--: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  networkPerformanceConfig?: compute_InstanceNetworkPerformanceConfig;
}
export class Instance extends DS_Resource {
  /*
Metadata key/value pairs to make available from
within the instance. Ssh keys attached in the Cloud Console will be removed.
Add them to your config in order to keep them attached to your instance. A
list of default metadata values (e.g. ssh-keys) can be found [here](https://cloud.google.com/compute/docs/metadata/default-metadata-values)

> Depending on the OS you choose for your instance, some metadata keys have
special functionality.  Most linux-based images will run the content of
`metadata.startup-script` in a shell on every boot.  At a minimum,
Debian, CentOS, RHEL, SLES, Container-Optimized OS, and Ubuntu images
support this key.  Windows instances require other keys depending on the format
of the script and the time you would like it to run - see [this table](https://cloud.google.com/compute/docs/startupscript#providing_a_startup_script_for_windows_instances).
For the convenience of the users of `metadata.startup-script`,
we provide a special attribute, `metadata_startup_script`, which is documented below.
*/
  public metadata?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
Scratch disks to attach to the instance. This can be
specified multiple times for multiple scratch disks. Structure is documented below.
*/
  public scratchDisks?: Array<compute_InstanceScratchDisk>;

  // Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.
  public attachedDisks?: Array<compute_InstanceAttachedDisk>;

  // The unique fingerprint of the labels.
  public labelFingerprint?: string;

  /*
A map of key/value label pairs to assign to the instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public enableDisplay?: boolean;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public name?: string;

  /*
Service account to attach to the instance.
Structure is documented below.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public serviceAccount?: compute_InstanceServiceAccount;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  public resourcePolicies?: string;

  // A brief description of this resource.
  public description?: string;

  /*
The machine type to create.

--Note:-- If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.

[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.

There is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.
*/
  public machineType?: string;

  /*
Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public minCpuPlatform?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  public reservationAffinity?: compute_InstanceReservationAffinity;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
List of the type and count of accelerator cards attached to the instance. Structure documented below.
--Note:-- GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.
*/
  public guestAccelerators?: Array<compute_InstanceGuestAccelerator>;

  /*
(Optional, Beta
Configures network performance settings for the instance. Structure is
documented below. --Note--: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  public networkPerformanceConfig?: compute_InstanceNetworkPerformanceConfig;

  // The zone that the machine should be created in. If it is not provided, the provider zone is used.
  public zone?: string;

  // The CPU platform used by this instance.
  public cpuPlatform?: string;

  // The current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).`,
  public currentStatus?: string;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.
Valid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.
The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public hostname?: string;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  public confidentialInstanceConfig?: compute_InstanceConfidentialInstanceConfig;

  /*
Enable deletion protection on this instance. Defaults to false.
--Note:-- you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.
*/
  public deletionProtection?: boolean;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public shieldedInstanceConfig?: compute_InstanceShieldedInstanceConfig;

  /*
If true, allows this prvider to stop the instance to update its properties.
If you try to update a property that requires stopping the instance without setting this field, the update will fail.
*/
  public allowStoppingForUpdate?: boolean;

  /*
The boot disk for the instance.
Structure is documented below.
*/
  public bootDisk?: compute_InstanceBootDisk;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs.
This defaults to false.
*/
  public canIpForward?: boolean;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  public scheduling?: compute_InstanceScheduling;

  // The unique fingerprint of the tags.
  public tagsFingerprint?: string;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below
  public advancedMachineFeatures?: compute_InstanceAdvancedMachineFeatures;

  // The unique fingerprint of the metadata.
  public metadataFingerprint?: string;

  /*
An alternative to using the
startup-script metadata key, except this one forces the instance to be recreated
(thus re-running the script) if it is changed. This replaces the startup-script
metadata key on the created instance and thus the two mechanisms are not
allowed to be used simultaneously.  Users are free to use either mechanism - the
only distinction is that this separate attribute will cause a recreate on
modification.  On import, `metadata_startup_script` will not be set - if you
choose to specify it you will see a diff immediately after import causing a
destroy/recreate operation. If importing an instance and specifying this value
is desired, you will need to modify your state file.
*/
  public metadataStartupScript?: string;

  /*
Additional instance parameters.
.
*/
  public params?: compute_InstanceParams;

  // The URI of the created resource.
  public selfLink?: string;

  // A list of network tags to attach to the instance.
  public tags?: Array<string>;

  /*
Desired status of the instance. Either
`"RUNNING"` or `"TERMINATED"`.
*/
  public desiredStatus?: string;

  // The server-assigned unique identifier of this instance.
  public instanceId?: string;

  /*
Networks to attach to the instance. This can
be specified multiple times. Structure is documented below.

- - -
*/
  public networkInterfaces?: Array<compute_InstanceNetworkInterface>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "advancedMachineFeatures",
        "Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below",
        () => compute_InstanceAdvancedMachineFeatures_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "scratchDisks",
        "Scratch disks to attach to the instance. This can be\nspecified multiple times for multiple scratch disks. Structure is documented below.",
        () => compute_InstanceScratchDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowStoppingForUpdate",
        "If true, allows this prvider to stop the instance to update its properties.\nIf you try to update a property that requires stopping the instance without setting this field, the update will fail.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone that the machine should be created in. If it is not provided, the provider zone is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccount",
        "Service account to attach to the instance.\nStructure is documented below.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
        () => compute_InstanceServiceAccount_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "Networks to attach to the instance. This can\nbe specified multiple times. Structure is documented below.\n\n- - -",
        () => compute_InstanceNetworkInterface_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bootDisk",
        "The boot disk for the instance.\nStructure is documented below.",
        () => compute_InstanceBootDisk_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to create.\n\n**Note:** If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.\n\n[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\nThere is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A map of key/value label pairs to assign to the instance.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.\nValid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.\nThe entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata key/value pairs to make available from\nwithin the instance. Ssh keys attached in the Cloud Console will be removed.\nAdd them to your config in order to keep them attached to your instance. A\nlist of default metadata values (e.g. ssh-keys) can be found [here](https://cloud.google.com/compute/docs/metadata/default-metadata-values)\n\n> Depending on the OS you choose for your instance, some metadata keys have\nspecial functionality.  Most linux-based images will run the content of\n`metadata.startup-script` in a shell on every boot.  At a minimum,\nDebian, CentOS, RHEL, SLES, Container-Optimized OS, and Ubuntu images\nsupport this key.  Windows instances require other keys depending on the format\nof the script and the time you would like it to run - see [this table](https://cloud.google.com/compute/docs/startupscript#providing_a_startup_script_for_windows_instances).\nFor the convenience of the users of `metadata.startup-script`,\nwe provide a special attribute, `metadata_startup_script`, which is documented below.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "canIpForward",
        "Whether to allow sending and receiving of\npackets with non-matching source or destination IPs.\nThis defaults to false.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attachedDisks",
        "Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.",
        () => compute_InstanceAttachedDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "desiredStatus",
        'Desired status of the instance. Either\n`"RUNNING"` or `"TERMINATED"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "The scheduling strategy to use. More details about\nthis configuration option are detailed below.",
        () => compute_InstanceScheduling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Enable deletion protection on this instance. Defaults to false.\n**Note:** you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPerformanceConfig",
        "(Optional, Beta\nConfigures network performance settings for the instance. Structure is\ndocumented below. **Note**: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.",
        () => compute_InstanceNetworkPerformanceConfig_GetTypes(),
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
        InputType.String,
        "minCpuPlatform",
        "Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Specifies the reservations that this instance can consume from.\nStructure is documented below.",
        () => compute_InstanceReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDisplay",
        "Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialInstanceConfig",
        "Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below",
        () => compute_InstanceConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of this resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "params",
        "Additional instance parameters.\n.",
        () => compute_InstanceParams_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestAccelerators",
        "List of the type and count of accelerator cards attached to the instance. Structure documented below.\n**Note:** GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.",
        () => compute_InstanceGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataStartupScript",
        "An alternative to using the\nstartup-script metadata key, except this one forces the instance to be recreated\n(thus re-running the script) if it is changed. This replaces the startup-script\nmetadata key on the created instance and thus the two mechanisms are not\nallowed to be used simultaneously.  Users are free to use either mechanism - the\nonly distinction is that this separate attribute will cause a recreate on\nmodification.  On import, `metadata_startup_script` will not be set - if you\nchoose to specify it you will see a diff immediately after import causing a\ndestroy/recreate operation. If importing an instance and specifying this value\nis desired, you will need to modify your state file.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicies",
        "- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
        () => compute_InstanceShieldedInstanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "A list of network tags to attach to the instance.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
