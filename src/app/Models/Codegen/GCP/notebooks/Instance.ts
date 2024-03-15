import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceReservationAffinity } from "../types/InstanceReservationAffinity";
import { InstanceVmImage } from "../types/InstanceVmImage";
import { InstanceShieldedInstanceConfig } from "../types/InstanceShieldedInstanceConfig";
import { InstanceAcceleratorConfig } from "../types/InstanceAcceleratorConfig";
import { InstanceContainerImage } from "../types/InstanceContainerImage";

export interface InstanceArgs {
  /*
The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
*/
  ServiceAccount?: string;

  /*
A set of Shielded Instance options. Check [Images using supported Shielded VM features]
Not all combinations are valid
Structure is documented below.
*/
  ShieldedInstanceConfig?: InstanceShieldedInstanceConfig;

  /*
Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Metadata?: Map<string, string>;

  // If true, the data disk will not be auto deleted when deleting the instance.
  NoRemoveDataDisk?: boolean;

  /*
Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
*/
  InstallGpuDriver?: boolean;

  // The notebook instance will not register with the proxy..
  NoProxyAccess?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
*/
  ServiceAccountScopes?: Array<string>;

  /*
The hardware accelerator used on this instance. If you use accelerators,
make sure that your configuration has enough vCPUs and memory to support the
machineType you have selected.
Structure is documented below.
*/
  AcceleratorConfig?: InstanceAcceleratorConfig;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  BootDiskType?: string;

  // No public IP will be assigned to this instance.
  NoPublicIp?: boolean;

  /*
The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
*/
  Subnet?: string;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  ContainerImage?: InstanceContainerImage;

  /*
The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
*/
  Network?: string;

  /*
The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
*/
  DataDiskSizeGb?: number;

  /*
The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
*/
  KmsKey?: string;

  /*
The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100.
*/
  BootDiskSizeGb?: number;

  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  CustomGpuDriverPath?: string;

  /*
The type of vNIC driver.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  NicType?: string;

  /*
Reservation Affinity for consuming Zonal reservation.
Structure is documented below.
*/
  ReservationAffinity?: InstanceReservationAffinity;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  VmImage?: InstanceVmImage;

  // Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  DesiredState?: string;

  /*
Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Instance creation time
  CreateTime?: string;

  // The name specified for the Notebook instance.
  Name?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  Location?: string;

  // A reference to a machine type which defines VM kind.
  MachineType?: string;

  /*
Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
*/
  PostStartupScript?: string;

  // Instance update time.
  UpdateTime?: string;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  DataDiskType?: string;

  /*
The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
*/
  InstanceOwners?: Array<string>;

  /*
Disk encryption method used on the boot and data disks, defaults to GMEK.
Possible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.
*/
  DiskEncryption?: string;

  // The Compute Engine tags to add to instance.
  Tags?: Array<string>;
}
export class Instance extends Resource {
  /*
Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
*/
  public PostStartupScript?: string;

  /*
The proxy endpoint that is used to access the Jupyter notebook.
Only returned when the resource is in a `PROVISIONED` state. If
needed you can utilize `pulumi up -refresh-only` to await
the population of this value.
*/
  public ProxyUri?: string;

  // The state of this instance.
  public State?: string;

  /*
The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100.
*/
  public BootDiskSizeGb?: number;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public Location?: string;

  // If true, the data disk will not be auto deleted when deleting the instance.
  public NoRemoveDataDisk?: boolean;

  /*
The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
*/
  public InstanceOwners?: Array<string>;

  // The notebook instance will not register with the proxy..
  public NoProxyAccess?: boolean;

  /*
The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
*/
  public Network?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
A set of Shielded Instance options. Check [Images using supported Shielded VM features]
Not all combinations are valid
Structure is documented below.
*/
  public ShieldedInstanceConfig?: InstanceShieldedInstanceConfig;

  // The Compute Engine tags to add to instance.
  public Tags?: Array<string>;

  /*
Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  public Metadata?: Map<string, string>;

  /*
Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
*/
  public ServiceAccountScopes?: Array<string>;

  /*
Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
*/
  public InstallGpuDriver?: boolean;

  // The name specified for the Notebook instance.
  public Name?: string;

  // No public IP will be assigned to this instance.
  public NoPublicIp?: boolean;

  /*
The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
*/
  public Subnet?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  public VmImage?: InstanceVmImage;

  /*
The hardware accelerator used on this instance. If you use accelerators,
make sure that your configuration has enough vCPUs and memory to support the
machineType you have selected.
Structure is documented below.
*/
  public AcceleratorConfig?: InstanceAcceleratorConfig;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  public BootDiskType?: string;

  // Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  public DesiredState?: string;

  /*
The type of vNIC driver.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  public NicType?: string;

  // Instance creation time
  public CreateTime?: string;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  public DataDiskType?: string;

  // A reference to a machine type which defines VM kind.
  public MachineType?: string;

  /*
Reservation Affinity for consuming Zonal reservation.
Structure is documented below.
*/
  public ReservationAffinity?: InstanceReservationAffinity;

  // Instance update time.
  public UpdateTime?: string;

  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  public CustomGpuDriverPath?: string;

  /*
The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
*/
  public KmsKey?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
*/
  public ServiceAccount?: string;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  public ContainerImage?: InstanceContainerImage;

  /*
The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
*/
  public DataDiskSizeGb?: number;

  /*
Disk encryption method used on the boot and data disks, defaults to GMEK.
Possible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.
*/
  public DiskEncryption?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        'Custom metadata to apply to this instance.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationAffinity",
        "Reservation Affinity for consuming Zonal reservation.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "A reference to a machine type which defines VM kind.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PostStartupScript",
        "Path to a Bash script that automatically runs after a\nnotebook instance fully boots up. The path must be a URL\nor Cloud Storage path (gs://path-to-file/file-name).",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NoRemoveDataDisk",
        "If true, the data disk will not be auto deleted when deleting the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NoPublicIp",
        "No public IP will be assigned to this instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NicType",
        "The type of vNIC driver.\nPossible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataDiskType",
        "Possible disk types for notebook instances.\nPossible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnet",
        "The name of the subnet that this instance is in.\nFormat: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "The Compute Engine tags to add to instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "A set of Shielded Instance options. Check [Images using supported Shielded VM features]\nNot all combinations are valid\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The name of the VPC that this instance is in.\nFormat: projects/{project_id}/global/networks/{network_id}",
      ),
      new DynamicUIProps(
        InputType.Number,
        "DataDiskSizeGb",
        "The size of the data disk in GB attached to this instance,\nup to a maximum of 64000 GB (64 TB).\nYou can choose the size of the data disk based on how big your notebooks and data are.\nIf not specified, this defaults to 100.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VmImage",
        "Use a Compute Engine VM image to start the notebook instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "InstanceOwners",
        "The list of owners of this instance after creation.\nFormat: alias@example.com.\nCurrently supports one owner only.\nIf not specified, all of the service account users of\nyour VM instance's service account can use the instance.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NoProxyAccess",
        "The notebook instance will not register with the proxy..",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the Notebook instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiskEncryption",
        "Disk encryption method used on the boot and data disks, defaults to GMEK.\nPossible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ServiceAccountScopes",
        "Optional. The URIs of service account scopes to be included in Compute Engine instances.\nIf not specified, the following scopes are defined:\n- https://www.googleapis.com/auth/cloud-platform\n- https://www.googleapis.com/auth/userinfo.email",
      ),
      new DynamicUIProps(
        InputType.String,
        "AcceleratorConfig",
        "The hardware accelerator used on this instance. If you use accelerators,\nmake sure that your configuration has enough vCPUs and memory to support the\nmachineType you have selected.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContainerImage",
        "Use a container image to start the notebook instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CreateTime",
        "Instance creation time",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpdateTime",
        "Instance update time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account on this instance, giving access to other\nGoogle Cloud services. You can use any service account within\nthe same project, but you must have the service account user\npermission to use the instance. If not specified,\nthe Compute Engine default service account is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "InstallGpuDriver",
        "Whether the end user authorizes Google Cloud to install GPU driver\non this instance. If this field is empty or set to false, the GPU driver\nwon't be installed. Only applicable to instances with GPUs.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "BootDiskSizeGb",
        "The size of the boot disk in GB attached to this instance,\nup to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.\nIf not specified, this defaults to 100.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomGpuDriverPath",
        "Specify a custom Cloud Storage path where the GPU driver is stored.\nIf not specified, we'll automatically choose from official GPU drivers.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BootDiskType",
        "Possible disk types for notebook instances.\nPossible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKey",
        "The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.\nFormat: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels to apply to this instance. These can be later modified by the setLabels method.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
    ];
  }
}
