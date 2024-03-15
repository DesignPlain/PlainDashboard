import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';
import { InputType } from '../../../enum/InputType';
import { Resource } from 'src/app/Models/CloudResource';

export class GCP_ComputeEngine extends Resource {
  public Hostname: string;
  public MachineType: string;
  public vCPU: number;
  public Memory: number;
  public BootDiskImage: string;
  public Network: string;
  public SubNetwork: string;
  public Zone: string;
  public MetadataStartupScript: string;
  public ServiceAccountEmail: string;
  public ServiceAccountScope: string;
  constructor() {
    super('ComputeEngine', 'GCP');
  }

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ServiceAccount',
        'Service account to attach to the instance.\nStructure is documented below.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.'
      ),
      new DynamicUIProps(
        InputType.DropDown,
        'Tags',
        'A list of network tags to attach to the instance.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Zone',
        'The zone that the machine should be created in. If it is not provided, the provider zone is used.'
      ),
      new DynamicUIProps(
        InputType.DropDown,
        'ScratchDisks',
        'Scratch disks to attach to the instance. This can be\nspecified multiple times for multiple scratch disks. Structure is documented below.'
      ),
      new DynamicUIProps(
        InputType.String,
        'ConfidentialInstanceConfig',
        'Enable [Confidential Mode](https://cloud.google.com/compute/confidential-vm/docs/about-cvm) on this VM. Structure is documented below'
      ),
      new DynamicUIProps(
        InputType.DropDown,
        'GuestAccelerators',
        'List of the type and count of accelerator cards attached to the instance. Structure documented below.\n**Note:** GPU accelerators can only be used with `on_host_maintenance` option set to TERMINATE.'
      ),
      new DynamicUIProps(
        InputType.String,
        'MachineType',
        'The machine type to create.\n\n**Note:** If you want to update this value (resize the VM) after initial creation, you must set `allow_stopping_for_update` to `true`.\n\n[Custom machine types](https://cloud.google.com/dataproc/docs/concepts/compute/custom-machine-types) can be formatted as `custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY_MB`, e.g. `custom-6-20480` for 6 vCPU and 20GB of RAM.\n\nThere is a limit of 6.5 GB per CPU unless you add [extended memory](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory). You must do this explicitly by adding the suffix `-ext`, e.g. `custom-2-15360-ext` for 2 vCPU and 15 GB of memory.'
      ),
      new DynamicUIProps(
        InputType.DropDown,
        'NetworkInterfaces',
        'Networks to attach to the instance. This can\nbe specified multiple times. Structure is documented below.\n\n- - -'
      ),
      new DynamicUIProps(
        InputType.String,
        'AdvancedMachineFeatures',
        'Configure Nested Virtualisation and Simultaneous Hyper Threading  on this VM. Structure is documented below'
      ),
      new DynamicUIProps(
        InputType.String,
        'BootDisk',
        'The boot disk for the instance.\nStructure is documented below.'
      ),
      new DynamicUIProps(
        InputType.String,
        'ReservationAffinity',
        'Specifies the reservations that this instance can consume from.\nStructure is documented below.'
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        'CanIpForward',
        'Whether to allow sending and receiving of\npackets with non-matching source or destination IPs.\nThis defaults to false.'
      ),
      new DynamicUIProps(
        InputType.String,
        'MinCpuPlatform',
        'Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as\n`Intel Haswell` or `Intel Skylake`. See the complete list [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.'
      ),
      new DynamicUIProps(
        InputType.String,
        'DesiredStatus',
        'Desired status of the instance. Either\n`"RUNNING"` or `"TERMINATED"`.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Name',
        'A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Labels',
        "A map of key/value label pairs to assign to the instance.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource."
      ),
      new DynamicUIProps(
        InputType.DropDown,
        'AttachedDisks',
        'Additional disks to attach to the instance. Can be repeated multiple times for multiple disks. Structure is documented below.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Description',
        'A brief description of this resource.'
      ),
      new DynamicUIProps(
        InputType.String,
        'ShieldedInstanceConfig',
        'Enable [Shielded VM](https://cloud.google.com/security/shielded-cloud/shielded-vm) on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Structure is documented below.\n**Note**: `shielded_instance_config` can only be used with boot images with shielded vm support. See the complete list [here](https://cloud.google.com/compute/docs/images#shielded-images).\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Scheduling',
        'The scheduling strategy to use. More details about\nthis configuration option are detailed below.'
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        'DeletionProtection',
        'Enable deletion protection on this instance. Defaults to false.\n**Note:** you must disable deletion protection before removing the resource (e.g., via `pulumi destroy`), or the instance cannot be deleted and the provider run will not complete successfully.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Metadata',
        'Metadata key/value pairs to make available from\nwithin the instance. Ssh keys attached in the Cloud Console will be removed.\nAdd them to your config in order to keep them attached to your instance. A\nlist of default metadata values (e.g. ssh-keys) can be found [here](https://cloud.google.com/compute/docs/metadata/default-metadata-values)\n\n> Depending on the OS you choose for your instance, some metadata keys have\nspecial functionality.  Most linux-based images will run the content of\n`metadata.startup-script` in a shell on every boot.  At a minimum,\nDebian, CentOS, RHEL, SLES, Container-Optimized OS, and Ubuntu images\nsupport this key.  Windows instances require other keys depending on the format\nof the script and the time you would like it to run - see [this table](https://cloud.google.com/compute/docs/startupscript#providing_a_startup_script_for_windows_instances).\nFor the convenience of the users of `metadata.startup-script`,\nwe provide a special attribute, `metadata_startup_script`, which is documented below.'
      ),
      new DynamicUIProps(
        InputType.String,
        'NetworkPerformanceConfig',
        '(Optional, Beta\nConfigures network performance settings for the instance. Structure is\ndocumented below. **Note**: `machine_type` must be a [supported type](https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration),\nthe `image` used must include the [`GVNIC`](https://cloud.google.com/compute/docs/networking/using-gvnic#create-instance-gvnic-image)\nin `guest-os-features`, and `network_interface.0.nic-type` must be `GVNIC`\nin order for this setting to take effect.'
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        'AllowStoppingForUpdate',
        'If true, allows this prvider to stop the instance to update its properties.\nIf you try to update a property that requires stopping the instance without setting this field, the update will fail.'
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        'EnableDisplay',
        'Enable [Virtual Displays](https://cloud.google.com/compute/docs/instances/enable-instance-virtual-display#verify_display_driver) on this instance.\n**Note**: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.'
      ),
      new DynamicUIProps(
        InputType.String,
        'ResourcePolicies',
        '- A list of self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Hostname',
        'A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid.\nValid format is a series of labels 1-63 characters long matching the regular expression `a-z`, concatenated with periods.\nThe entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.'
      ),
      new DynamicUIProps(
        InputType.String,
        'Params',
        'Additional instance parameters.\n.'
      ),
      new DynamicUIProps(
        InputType.String,
        'MetadataStartupScript',
        'An alternative to using the\nstartup-script metadata key, except this one forces the instance to be recreated\n(thus re-running the script) if it is changed. This replaces the startup-script\nmetadata key on the created instance and thus the two mechanisms are not\nallowed to be used simultaneously.  Users are free to use either mechanism - the\nonly distinction is that this separate attribute will cause a recreate on\nmodification.  On import, `metadata_startup_script` will not be set - if you\nchoose to specify it you will see a diff immediately after import causing a\ndestroy/recreate operation. If importing an instance and specifying this value\nis desired, you will need to modify your state file.'
      ),
    ];
  }
}
