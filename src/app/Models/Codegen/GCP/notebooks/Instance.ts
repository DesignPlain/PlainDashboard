import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  notebooks_InstanceReservationAffinity,
  notebooks_InstanceReservationAffinity_GetTypes,
} from "../types/notebooks_InstanceReservationAffinity";
import {
  notebooks_InstanceContainerImage,
  notebooks_InstanceContainerImage_GetTypes,
} from "../types/notebooks_InstanceContainerImage";
import {
  notebooks_InstanceVmImage,
  notebooks_InstanceVmImage_GetTypes,
} from "../types/notebooks_InstanceVmImage";
import {
  notebooks_InstanceAcceleratorConfig,
  notebooks_InstanceAcceleratorConfig_GetTypes,
} from "../types/notebooks_InstanceAcceleratorConfig";
import {
  notebooks_InstanceShieldedInstanceConfig,
  notebooks_InstanceShieldedInstanceConfig_GetTypes,
} from "../types/notebooks_InstanceShieldedInstanceConfig";

export interface InstanceArgs {
  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  vmImage?: notebooks_InstanceVmImage;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  bootDiskType?: string;

  // The Compute Engine tags to add to instance.
  tags?: Array<string>;

  // Instance update time.
  updateTime?: string;

  /*
The hardware accelerator used on this instance. If you use accelerators,
make sure that your configuration has enough vCPUs and memory to support the
machineType you have selected.
Structure is documented below.
*/
  acceleratorConfig?: notebooks_InstanceAcceleratorConfig;

  /*
The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
*/
  dataDiskSizeGb?: number;

  // If true, the data disk will not be auto deleted when deleting the instance.
  noRemoveDataDisk?: boolean;

  /*
A set of Shielded Instance options. Check [Images using supported Shielded VM features]
Not all combinations are valid
Structure is documented below.
*/
  shieldedInstanceConfig?: notebooks_InstanceShieldedInstanceConfig;

  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  customGpuDriverPath?: string;

  /*
Disk encryption method used on the boot and data disks, defaults to GMEK.
Possible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.
*/
  diskEncryption?: string;

  /*
The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
*/
  network?: string;

  // The notebook instance will not register with the proxy..
  noProxyAccess?: boolean;

  /*
Reservation Affinity for consuming Zonal reservation.
Structure is documented below.
*/
  reservationAffinity?: notebooks_InstanceReservationAffinity;

  /*
Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
*/
  installGpuDriver?: boolean;

  /*
A reference to the zone where the machine resides.


- - -
*/
  location?: string;

  // A reference to a machine type which defines VM kind.
  machineType?: string;

  // The name specified for the Notebook instance.
  name?: string;

  /*
The type of vNIC driver.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  nicType?: string;

  // No public IP will be assigned to this instance.
  noPublicIp?: boolean;

  /*
The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
*/
  serviceAccount?: string;

  /*
The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100.
*/
  bootDiskSizeGb?: number;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  containerImage?: notebooks_InstanceContainerImage;

  /*
Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  metadata?: Map<string, string>;

  // Instance creation time
  createTime?: string;

  /*
Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
*/
  postStartupScript?: string;

  /*
The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
*/
  kmsKey?: string;

  /*
Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
*/
  serviceAccountScopes?: Array<string>;

  /*
The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
*/
  subnet?: string;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  dataDiskType?: string;

  // Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  desiredState?: string;

  /*
The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
*/
  instanceOwners?: Array<string>;
}
export class Instance extends Resource {
  /*
Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
*/
  public postStartupScript?: string;

  /*
The proxy endpoint that is used to access the Jupyter notebook.
Only returned when the resource is in a `PROVISIONED` state. If
needed you can utilize `pulumi up -refresh-only` to await
the population of this value.
*/
  public proxyUri?: string;

  /*
The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
*/
  public serviceAccount?: string;

  // A reference to a machine type which defines VM kind.
  public machineType?: string;

  /*
The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
*/
  public network?: string;

  // The name specified for the Notebook instance.
  public name?: string;

  /*
The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
*/
  public dataDiskSizeGb?: number;

  /*
Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
*/
  public installGpuDriver?: boolean;

  // No public IP will be assigned to this instance.
  public noPublicIp?: boolean;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Instance update time.
  public updateTime?: string;

  // Instance creation time
  public createTime?: string;

  /*
Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  public metadata?: Map<string, string>;

  /*
The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
*/
  public instanceOwners?: Array<string>;

  // The state of this instance.
  public state?: string;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  public bootDiskType?: string;

  /*
Reservation Affinity for consuming Zonal reservation.
Structure is documented below.
*/
  public reservationAffinity?: notebooks_InstanceReservationAffinity;

  /*
Disk encryption method used on the boot and data disks, defaults to GMEK.
Possible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.
*/
  public diskEncryption?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The type of vNIC driver.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  public nicType?: string;

  /*
A set of Shielded Instance options. Check [Images using supported Shielded VM features]
Not all combinations are valid
Structure is documented below.
*/
  public shieldedInstanceConfig?: notebooks_InstanceShieldedInstanceConfig;

  /*
The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
*/
  public subnet?: string;

  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  public customGpuDriverPath?: string;

  // Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  public desiredState?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public location?: string;

  // If true, the data disk will not be auto deleted when deleting the instance.
  public noRemoveDataDisk?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  public containerImage?: notebooks_InstanceContainerImage;

  /*
Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Possible disk types for notebook instances.
Possible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  public dataDiskType?: string;

  /*
The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
*/
  public kmsKey?: string;

  // The notebook instance will not register with the proxy..
  public noProxyAccess?: boolean;

  /*
Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
*/
  public serviceAccountScopes?: Array<string>;

  // The Compute Engine tags to add to instance.
  public tags?: Array<string>;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  public vmImage?: notebooks_InstanceVmImage;

  /*
The hardware accelerator used on this instance. If you use accelerators,
make sure that your configuration has enough vCPUs and memory to support the
machineType you have selected.
Structure is documented below.
*/
  public acceleratorConfig?: notebooks_InstanceAcceleratorConfig;

  /*
The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100.
*/
  public bootDiskSizeGb?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bootDiskType",
        "Possible disk types for notebook instances.\nPossible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "containerImage",
        "Use a container image to start the notebook instance.\nStructure is documented below.",
        notebooks_InstanceContainerImage_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        'Custom metadata to apply to this instance.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKey",
        "The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.\nFormat: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnet",
        "The name of the subnet that this instance is in.\nFormat: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataDiskType",
        "Possible disk types for notebook instances.\nPossible values are: `DISK_TYPE_UNSPECIFIED`, `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vmImage",
        "Use a Compute Engine VM image to start the notebook instance.\nStructure is documented below.",
        notebooks_InstanceVmImage_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customGpuDriverPath",
        "Specify a custom Cloud Storage path where the GPU driver is stored.\nIf not specified, we'll automatically choose from official GPU drivers.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The name of the VPC that this instance is in.\nFormat: projects/{project_id}/global/networks/{network_id}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noProxyAccess",
        "The notebook instance will not register with the proxy..",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "nicType",
        "The type of vNIC driver.\nPossible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "bootDiskSizeGb",
        "The size of the boot disk in GB attached to this instance,\nup to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.\nIf not specified, this defaults to 100.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "acceleratorConfig",
        "The hardware accelerator used on this instance. If you use accelerators,\nmake sure that your configuration has enough vCPUs and memory to support the\nmachineType you have selected.\nStructure is documented below.",
        notebooks_InstanceAcceleratorConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "installGpuDriver",
        "Whether the end user authorizes Google Cloud to install GPU driver\non this instance. If this field is empty or set to false, the GPU driver\nwon't be installed. Only applicable to instances with GPUs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "createTime",
        "Instance creation time",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels to apply to this instance. These can be later modified by the setLabels method.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "desiredState",
        "Desired state of the Notebook Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instanceOwners",
        "The list of owners of this instance after creation.\nFormat: alias@example.com.\nCurrently supports one owner only.\nIf not specified, all of the service account users of\nyour VM instance's service account can use the instance.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "dataDiskSizeGb",
        "The size of the data disk in GB attached to this instance,\nup to a maximum of 64000 GB (64 TB).\nYou can choose the size of the data disk based on how big your notebooks and data are.\nIf not specified, this defaults to 100.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The service account on this instance, giving access to other\nGoogle Cloud services. You can use any service account within\nthe same project, but you must have the service account user\npermission to use the instance. If not specified,\nthe Compute Engine default service account is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "updateTime",
        "Instance update time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noRemoveDataDisk",
        "If true, the data disk will not be auto deleted when deleting the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "A set of Shielded Instance options. Check [Images using supported Shielded VM features]\nNot all combinations are valid\nStructure is documented below.",
        notebooks_InstanceShieldedInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Reservation Affinity for consuming Zonal reservation.\nStructure is documented below.",
        notebooks_InstanceReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "A reference to a machine type which defines VM kind.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name specified for the Notebook instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noPublicIp",
        "No public IP will be assigned to this instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "serviceAccountScopes",
        "Optional. The URIs of service account scopes to be included in Compute Engine instances.\nIf not specified, the following scopes are defined:\n- https://www.googleapis.com/auth/cloud-platform\n- https://www.googleapis.com/auth/userinfo.email",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "The Compute Engine tags to add to instance.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "diskEncryption",
        "Disk encryption method used on the boot and data disks, defaults to GMEK.\nPossible values are: `DISK_ENCRYPTION_UNSPECIFIED`, `GMEK`, `CMEK`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "postStartupScript",
        "Path to a Bash script that automatically runs after a\nnotebook instance fully boots up. The path must be a URL\nor Cloud Storage path (gs://path-to-file/file-name).",
        [],
        false,
        true,
      ),
    ];
  }
}
