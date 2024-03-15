import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceConfidentialInstanceConfig } from "../types/InstanceConfidentialInstanceConfig";
import { InstanceAdvancedMachineFeatures } from "../types/InstanceAdvancedMachineFeatures";
import { InstanceParams } from "../types/InstanceParams";
import { InstanceReservationAffinity } from "../types/InstanceReservationAffinity";
import { InstanceServiceAccount } from "../types/InstanceServiceAccount";
import { InstanceAttachedDisk } from "../types/InstanceAttachedDisk";
import { InstanceShieldedInstanceConfig } from "../types/InstanceShieldedInstanceConfig";
import { InstanceBootDisk } from "../types/InstanceBootDisk";
import { InstanceGuestAccelerator } from "../types/InstanceGuestAccelerator";
import { InstanceScratchDisk } from "../types/InstanceScratchDisk";
import { InstanceNetworkPerformanceConfig } from "../types/InstanceNetworkPerformanceConfig";
import { InstanceScheduling } from "../types/InstanceScheduling";
import { InstanceNetworkInterface } from "../types/InstanceNetworkInterface";

export interface InstanceArgs {
  /*
A map of key/value label pairs to assign to the instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

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
  Metadata?: Map<string, string>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  ReservationAffinity?: InstanceReservationAffinity;

  /*
Service account to attach to the instance.
Structure is documented below.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  ServiceAccount?: InstanceServiceAccount;

  // Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.
  AttachedDisks?: Array<InstanceAttachedDisk>;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs.
This defaults to false.
*/
  CanIpForward?: boolean;

  /*
Desired status of the instance. Either
`"RUNNING"` or `"TERMINATED"`.
*/
  DesiredStatus?: string;

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
  MetadataStartupScript?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  ShieldedInstanceConfig?: InstanceShieldedInstanceConfig;

  /*
The boot disk for the instance.
Structure is documented below.
*/
  BootDisk?: InstanceBootDisk;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  ConfidentialInstanceConfig?: InstanceConfidentialInstanceConfig;

  /*
List of the type and count of accelerator cards attached to the instance. Structure documented below.
--Note:-- GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.
*/
  GuestAccelerators?: Array<InstanceGuestAccelerator>;

  // A brief description of this resource.
  Description?: string;

  /*
Scratch disks to attach to the instance. This can be
specified multiple times for multiple scratch disks. Structure is documented below.
*/
  ScratchDisks?: Array<InstanceScratchDisk>;

  // A list of network tags to attach to the instance.
  Tags?: Array<string>;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.
Valid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.
The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  Hostname?: string;

  /*
Additional instance parameters.
.
*/
  Params?: InstanceParams;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  /*
(Optional, Beta
Configures network performance settings for the instance. Structure is
documented below. --Note--: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  NetworkPerformanceConfig?: InstanceNetworkPerformanceConfig;

  /*
If true, allows this prvider to stop the instance to update its properties.
If you try to update a property that requires stopping the instance without setting this field, the update will fail.
*/
  AllowStoppingForUpdate?: boolean;

  /*
Enable deletion protection on this instance. Defaults to false.
--Note:-- you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.
*/
  DeletionProtection?: boolean;

  /*
The machine type to create.

--Note:-- If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.

[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.

There is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.
*/
  MachineType?: string;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  Scheduling?: InstanceScheduling;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below
  AdvancedMachineFeatures?: InstanceAdvancedMachineFeatures;

  /*
Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  MinCpuPlatform?: string;

  /*
Networks to attach to the instance. This can
be specified multiple times. Structure is documented below.

- - -
*/
  NetworkInterfaces?: Array<InstanceNetworkInterface>;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  EnableDisplay?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // The zone that the machine should be created in. If it is not provided, the provider zone is used.
  Zone?: string;
}
export class Instance extends Resource {
  // A list of network tags to attach to the instance.
  public Tags?: Array<string>;

  // The unique fingerprint of the tags.
  public TagsFingerprint?: string;

  /*
The boot disk for the instance.
Structure is documented below.
*/
  public BootDisk?: InstanceBootDisk;

  /*
Whether to allow sending and receiving of
packets with non-matching source or destination IPs.
This defaults to false.
*/
  public CanIpForward?: boolean;

  // A brief description of this resource.
  public Description?: string;

  /*
Service account to attach to the instance.
Structure is documented below.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public ServiceAccount?: InstanceServiceAccount;

  /*
Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public EnableDisplay?: boolean;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.
Valid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.
The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public Hostname?: string;

  /*
The machine type to create.

--Note:-- If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.

[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.

There is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.
*/
  public MachineType?: string;

  /*
Specifies the reservations that this instance can consume from.
Structure is documented below.
*/
  public ReservationAffinity?: InstanceReservationAffinity;

  /*
The scheduling strategy to use. More details about
this configuration option are detailed below.
*/
  public Scheduling?: InstanceScheduling;

  // The URI of the created resource.
  public SelfLink?: string;

  // - A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
  public ResourcePolicies?: string;

  /*
If true, allows this prvider to stop the instance to update its properties.
If you try to update a property that requires stopping the instance without setting this field, the update will fail.
*/
  public AllowStoppingForUpdate?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
(Optional, Beta
Configures network performance settings for the instance. Structure is
documented below. --Note--: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),
the `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)
in `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`
in order for this setting to take effect.
*/
  public NetworkPerformanceConfig?: InstanceNetworkPerformanceConfig;

  /*
Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as
`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public MinCpuPlatform?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public Name?: string;

  /*
Scratch disks to attach to the instance. This can be
specified multiple times for multiple scratch disks. Structure is documented below.
*/
  public ScratchDisks?: Array<InstanceScratchDisk>;

  // Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.
  public AttachedDisks?: Array<InstanceAttachedDisk>;

  // Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below
  public ConfidentialInstanceConfig?: InstanceConfidentialInstanceConfig;

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
  public MetadataStartupScript?: string;

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
  public Metadata?: Map<string, string>;

  /*
Networks to attach to the instance. This can
be specified multiple times. Structure is documented below.

- - -
*/
  public NetworkInterfaces?: Array<InstanceNetworkInterface>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  /*
Enable deletion protection on this instance. Defaults to false.
--Note:-- you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.
*/
  public DeletionProtection?: boolean;

  /*
Desired status of the instance. Either
`"RUNNING"` or `"TERMINATED"`.
*/
  public DesiredStatus?: string;

  // The unique fingerprint of the labels.
  public LabelFingerprint?: string;

  /*
Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.
--Note--: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  public ShieldedInstanceConfig?: InstanceShieldedInstanceConfig;

  // The zone that the machine should be created in. If it is not provided, the provider zone is used.
  public Zone?: string;

  // The CPU platform used by this instance.
  public CpuPlatform?: string;

  // The current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).`,
  public CurrentStatus?: string;

  // The unique fingerprint of the metadata.
  public MetadataFingerprint?: string;

  /*
A map of key/value label pairs to assign to the instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Additional instance parameters.
.
*/
  public Params?: InstanceParams;

  // Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below
  public AdvancedMachineFeatures?: InstanceAdvancedMachineFeatures;

  /*
List of the type and count of accelerator cards attached to the instance. Structure documented below.
--Note:-- GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.
*/
  public GuestAccelerators?: Array<InstanceGuestAccelerator>;

  // The server-assigned unique identifier of this instance.
  public InstanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "GuestAccelerators",
        "List of the type and count of accelerator cards attached to the instance. Structure documented below.\n**Note:** GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NetworkInterfaces",
        "Networks to attach to the instance. This can\nbe specified multiple times. Structure is documented below.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableDisplay",
        "Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AttachedDisks",
        "Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfidentialInstanceConfig",
        "Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below",
      ),
      new DynamicUIProps(
        InputType.String,
        "MinCpuPlatform",
        "Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A map of key/value label pairs to assign to the instance.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Service account to attach to the instance.\nStructure is documented below.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdvancedMachineFeatures",
        "Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata key/value pairs to make available from\nwithin the instance. Ssh keys attached in the Cloud Console will be removed.\nAdd them to your config in order to keep them attached to your instance. A\nlist of default metadata values (e.g. ssh-keys) can be found [here](https://cloud.google.com/compute/docs/metadata/default-metadata-values)\n\n> Depending on the OS you choose for your instance, some metadata keys have\nspecial functionality.  Most linux-based images will run the content of\n`metadata.startup-script` in a shell on every boot.  At a minimum,\nDebian, CentOS, RHEL, SLES, Container-Optimized OS, and Ubuntu images\nsupport this key.  Windows instances require other keys depending on the format\nof the script and the time you would like it to run - see [this table](https://cloud.google.com/compute/docs/startupscript#providing_a_startup_script_for_windows_instances).\nFor the convenience of the users of `metadata.startup-script`,\nwe provide a special attribute, `metadata_startup_script`, which is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationAffinity",
        "Specifies the reservations that this instance can consume from.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BootDisk",
        "The boot disk for the instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeletionProtection",
        "Enable deletion protection on this instance. Defaults to false.\n**Note:** you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to create.\n\n**Note:** If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.\n\n[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\nThere is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scheduling",
        "The scheduling strategy to use. More details about\nthis configuration option are detailed below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that the machine should be created in. If it is not provided, the provider zone is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataStartupScript",
        "An alternative to using the\nstartup-script metadata key, except this one forces the instance to be recreated\n(thus re-running the script) if it is changed. This replaces the startup-script\nmetadata key on the created instance and thus the two mechanisms are not\nallowed to be used simultaneously.  Users are free to use either mechanism - the\nonly distinction is that this separate attribute will cause a recreate on\nmodification.  On import, `metadata_startup_script` will not be set - if you\nchoose to specify it you will see a diff immediately after import causing a\ndestroy/recreate operation. If importing an instance and specifying this value\nis desired, you will need to modify your state file.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ScratchDisks",
        "Scratch disks to attach to the instance. This can be\nspecified multiple times for multiple scratch disks. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "A list of network tags to attach to the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourcePolicies",
        "- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkPerformanceConfig",
        "(Optional, Beta\nConfigures network performance settings for the instance. Structure is\ndocumented below. **Note**: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AllowStoppingForUpdate",
        "If true, allows this prvider to stop the instance to update its properties.\nIf you try to update a property that requires stopping the instance without setting this field, the update will fail.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CanIpForward",
        "Whether to allow sending and receiving of\npackets with non-matching source or destination IPs.\nThis defaults to false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.\nValid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.\nThe entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Params",
        "Additional instance parameters.\n.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredStatus",
        'Desired status of the instance. Either\n`"RUNNING"` or `"TERMINATED"`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
    ];
  }
}
