import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodeConfigFastSocket,
  Container_ClusterNodeConfigFastSocket_GetTypes,
} from "./Container_ClusterNodeConfigFastSocket";
import {
  Container_ClusterNodeConfigGvnic,
  Container_ClusterNodeConfigGvnic_GetTypes,
} from "./Container_ClusterNodeConfigGvnic";
import {
  Container_ClusterNodeConfigTaint,
  Container_ClusterNodeConfigTaint_GetTypes,
} from "./Container_ClusterNodeConfigTaint";
import {
  Container_ClusterNodeConfigLinuxNodeConfig,
  Container_ClusterNodeConfigLinuxNodeConfig_GetTypes,
} from "./Container_ClusterNodeConfigLinuxNodeConfig";
import {
  Container_ClusterNodeConfigLocalNvmeSsdBlockConfig,
  Container_ClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./Container_ClusterNodeConfigLocalNvmeSsdBlockConfig";
import {
  Container_ClusterNodeConfigEphemeralStorageConfig,
  Container_ClusterNodeConfigEphemeralStorageConfig_GetTypes,
} from "./Container_ClusterNodeConfigEphemeralStorageConfig";
import {
  Container_ClusterNodeConfigGuestAccelerator,
  Container_ClusterNodeConfigGuestAccelerator_GetTypes,
} from "./Container_ClusterNodeConfigGuestAccelerator";
import {
  Container_ClusterNodeConfigEffectiveTaint,
  Container_ClusterNodeConfigEffectiveTaint_GetTypes,
} from "./Container_ClusterNodeConfigEffectiveTaint";
import {
  Container_ClusterNodeConfigSandboxConfig,
  Container_ClusterNodeConfigSandboxConfig_GetTypes,
} from "./Container_ClusterNodeConfigSandboxConfig";
import {
  Container_ClusterNodeConfigShieldedInstanceConfig,
  Container_ClusterNodeConfigShieldedInstanceConfig_GetTypes,
} from "./Container_ClusterNodeConfigShieldedInstanceConfig";
import {
  Container_ClusterNodeConfigConfidentialNodes,
  Container_ClusterNodeConfigConfidentialNodes_GetTypes,
} from "./Container_ClusterNodeConfigConfidentialNodes";
import {
  Container_ClusterNodeConfigWorkloadMetadataConfig,
  Container_ClusterNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./Container_ClusterNodeConfigWorkloadMetadataConfig";
import {
  Container_ClusterNodeConfigHostMaintenancePolicy,
  Container_ClusterNodeConfigHostMaintenancePolicy_GetTypes,
} from "./Container_ClusterNodeConfigHostMaintenancePolicy";
import {
  Container_ClusterNodeConfigGcfsConfig,
  Container_ClusterNodeConfigGcfsConfig_GetTypes,
} from "./Container_ClusterNodeConfigGcfsConfig";
import {
  Container_ClusterNodeConfigAdvancedMachineFeatures,
  Container_ClusterNodeConfigAdvancedMachineFeatures_GetTypes,
} from "./Container_ClusterNodeConfigAdvancedMachineFeatures";
import {
  Container_ClusterNodeConfigKubeletConfig,
  Container_ClusterNodeConfigKubeletConfig_GetTypes,
} from "./Container_ClusterNodeConfigKubeletConfig";
import {
  Container_ClusterNodeConfigReservationAffinity,
  Container_ClusterNodeConfigReservationAffinity_GetTypes,
} from "./Container_ClusterNodeConfigReservationAffinity";
import {
  Container_ClusterNodeConfigEphemeralStorageLocalSsdConfig,
  Container_ClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./Container_ClusterNodeConfigEphemeralStorageLocalSsdConfig";
import {
  Container_ClusterNodeConfigSoleTenantConfig,
  Container_ClusterNodeConfigSoleTenantConfig_GetTypes,
} from "./Container_ClusterNodeConfigSoleTenantConfig";

export interface Container_ClusterNodeConfig {
  /*
The service account to be used by the Node VMs.
If not specified, the "default" service account is used.
*/
  ServiceAccount?: string;

  /*
Google Virtual NIC (gVNIC) is a virtual network interface.
Installing the gVNIC driver allows for more efficient traffic transmission across the Google network infrastructure.
gVNIC is an alternative to the virtIO-based ethernet driver. GKE nodes must use a Container-Optimized OS node image.
GKE node version 1.15.11-gke.15 or later
Structure is documented below.
*/
  Gvnic?: Container_ClusterNodeConfigGvnic;

  /*
The name of a Google Compute Engine machine type.
Defaults to `e2-medium`. To create a custom machine type, value should be set as specified
[here](https://cloud.google.com/compute/docs/reference/latest/instances#machineType).
*/
  MachineType?: string;

  /*
A boolean that represents whether or not the underlying node VMs
are preemptible. See the [official documentation](https://cloud.google.com/container-engine/docs/preemptible-vm)
for more information. Defaults to false.
*/
  Preemptible?: boolean;

  /*
The list of instance tags applied to all nodes. Tags are used to identify
valid sources or targets for network firewalls.
*/
  Tags?: Array<string>;

  // Parameter for specifying the type of logging agent used in a node pool. This will override any cluster-wide default value. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.
  LoggingVariant?: string;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<Container_ClusterNodeConfigEffectiveTaint>;

  /*
Parameters for the Google Container Filesystem (GCFS).
If unspecified, GCFS will not be enabled on the node pool. When enabling this feature you must specify `image_type = "COS_CONTAINERD"` and `node_version` from GKE versions 1.19 or later to use it.
For GKE versions 1.19, 1.20, and 1.21, the recommended minimum `node_version` would be 1.19.15-gke.1300, 1.20.11-gke.1300, and 1.21.5-gke.1300 respectively.
A `machine_type` that has more than 16 GiB of memory is also recommended.
GCFS must be enabled in order to use [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming).
Structure is documented below.
*/
  GcfsConfig?: Container_ClusterNodeConfigGcfsConfig;

  /*
The Kubernetes labels (key/value pairs) to be applied to each node. The kubernetes.io/ and k8s.io/ prefixes are
reserved by Kubernetes Core components and cannot be specified.
*/
  Labels?: Map<string, string>;

  /*
Minimum CPU platform to be used by this instance.
The instance may be scheduled on the specified or newer CPU platform. Applicable
values are the friendly names of CPU platforms, such as `Intel Haswell`. See the
[official documentation](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for more information.
*/
  MinCpuPlatform?: string;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
  NodeGroup?: string;

  // Sandbox configuration for this node.
  SandboxConfig?: Container_ClusterNodeConfigSandboxConfig;

  /*
A boolean that represents whether the underlying node VMs are spot.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms)
for more information. Defaults to false.
*/
  Spot?: boolean;

  /*
Specifies options for controlling
advanced machine features. Structure is documented below.
*/
  AdvancedMachineFeatures?: Container_ClusterNodeConfigAdvancedMachineFeatures;

  /*
A list of [Kubernetes taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)
to apply to nodes. GKE's API can only set this field on cluster creation.
However, GKE will add taints to your nodes if you enable certain features such
as GPUs. If this field is set, any diffs on this field will cause the provider to
recreate the underlying resource. Taint values can be updated safely in
Kubernetes (eg. through `kubectl`), and it's recommended that you do not use
this field to manage taints. If you do, `lifecycle.ignore_changes` is
recommended. Structure is documented below.
*/
  Taints?: Array<Container_ClusterNodeConfigTaint>;

  // A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications found [here](https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications). A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`.
  ResourceManagerTags?: Map<string, InputType.String>;

  // Shielded Instance options. Structure is documented below.
  ShieldedInstanceConfig?: Container_ClusterNodeConfigShieldedInstanceConfig;

  /*
The GCP labels (key/value pairs) to be applied to each node. Refer [here](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels)
for how these labels are applied to clusters, node pools and nodes.
*/
  ResourceLabels?: Map<string, string>;

  /*
Kubelet configuration, currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).
Structure is documented below.
*/
  KubeletConfig?: Container_ClusterNodeConfigKubeletConfig;

  // Parameters that can be configured on Linux nodes. Structure is documented below.
  LinuxNodeConfig?: Container_ClusterNodeConfigLinuxNodeConfig;

  // Parameters for the local NVMe SSDs. Structure is documented below.
  LocalNvmeSsdBlockConfig?: Container_ClusterNodeConfigLocalNvmeSsdBlockConfig;

  /*
The amount of local SSD disks that will be
attached to each cluster node. Defaults to 0.
*/
  LocalSsdCount?: number;

  /*
The metadata key/value pairs assigned to instances in
the cluster. From GKE `1.12` onwards, `disable-legacy-endpoints` is set to
`true` by the API; if `metadata` is set but that default value is not
included, the provider will attempt to unset the value. To avoid this, set the
value in your config.
*/
  Metadata?: Map<string, string>;

  /*
The set of Google API scopes to be made available
on all of the node VMs under the "default" service account.
Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/access-scopes) for information on migrating off of legacy access scopes.
*/
  OauthScopes?: Array<string>;

  // The configuration of the desired reservation which instances could take capacity from. Structure is documented below.
  ReservationAffinity?: Container_ClusterNodeConfigReservationAffinity;

  /*
Type of the disk attached to each node
(e.g. 'pd-standard', 'pd-balanced' or 'pd-ssd'). If unspecified, the default disk type is 'pd-standard'
*/
  DiskType?: string;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  ConfidentialNodes?: Container_ClusterNodeConfigConfidentialNodes;

  /*
Size of the disk attached to each node, specified
in GB. The smallest allowed disk size is 10GB. Defaults to 100GB.
*/
  DiskSizeGb?: number;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  EphemeralStorageConfig?: Container_ClusterNodeConfigEphemeralStorageConfig;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  EphemeralStorageLocalSsdConfig?: Container_ClusterNodeConfigEphemeralStorageLocalSsdConfig;

  /*
List of the type and count of accelerator cards attached to the instance.
Structure documented below.
*/
  GuestAccelerators?: Array<Container_ClusterNodeConfigGuestAccelerator>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicy?: Container_ClusterNodeConfigHostMaintenancePolicy;

  // Allows specifying multiple [node affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity) useful for running workloads on [sole tenant nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy). `node_affinity` structure is documented below.
  SoleTenantConfig?: Container_ClusterNodeConfigSoleTenantConfig;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: <https://cloud.google.com/compute/docs/disks/customer-managed-encryption>
  BootDiskKmsKey?: string;

  /*
Parameters for the NCCL Fast Socket feature. If unspecified, NCCL Fast Socket will not be enabled on the node pool.
Node Pool must enable gvnic.
GKE version 1.25.2-gke.1700 or later.
Structure is documented below.
*/
  FastSocket?: Container_ClusterNodeConfigFastSocket;

  /*
The image type to use for this node. Note that changing the image type
will delete and recreate all nodes in the node pool.
*/
  ImageType?: string;

  /*
Metadata configuration to expose to workloads on the node pool.
Structure is documented below.
*/
  WorkloadMetadataConfig?: Container_ClusterNodeConfigWorkloadMetadataConfig;

  // Enabling Confidential Storage will create boot disk with confidential mode. It is disabled by default.
  EnableConfidentialStorage?: boolean;
}

export function Container_ClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AdvancedMachineFeatures",
      "Specifies options for controlling\nadvanced machine features. Structure is documented below.",
      Container_ClusterNodeConfigAdvancedMachineFeatures_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications found [here](https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications). A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcfsConfig",
      'Parameters for the Google Container Filesystem (GCFS).\nIf unspecified, GCFS will not be enabled on the node pool. When enabling this feature you must specify `image_type = "COS_CONTAINERD"` and `node_version` from GKE versions 1.19 or later to use it.\nFor GKE versions 1.19, 1.20, and 1.21, the recommended minimum `node_version` would be 1.19.15-gke.1300, 1.20.11-gke.1300, and 1.21.5-gke.1300 respectively.\nA `machine_type` that has more than 16 GiB of memory is also recommended.\nGCFS must be enabled in order to use [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming).\nStructure is documented below.',
      Container_ClusterNodeConfigGcfsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "Minimum CPU platform to be used by this instance.\nThe instance may be scheduled on the specified or newer CPU platform. Applicable\nvalues are the friendly names of CPU platforms, such as `Intel Haswell`. See the\n[official documentation](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor more information.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "The metadata key/value pairs assigned to instances in\nthe cluster. From GKE `1.12` onwards, `disable-legacy-endpoints` is set to\n`true` by the API; if `metadata` is set but that default value is not\nincluded, the provider will attempt to unset the value. To avoid this, set the\nvalue in your config.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      'The set of Google API scopes to be made available\non all of the node VMs under the "default" service account.\nUse the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.\n\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/access-scopes) for information on migrating off of legacy access scopes.',
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReservationAffinity",
      "The configuration of the desired reservation which instances could take capacity from. Structure is documented below.",
      Container_ClusterNodeConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "Size of the disk attached to each node, specified\nin GB. The smallest allowed disk size is 10GB. Defaults to 100GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      'The service account to be used by the Node VMs.\nIf not specified, the "default" service account is used.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Taints",
      "A list of [Kubernetes taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)\nto apply to nodes. GKE's API can only set this field on cluster creation.\nHowever, GKE will add taints to your nodes if you enable certain features such\nas GPUs. If this field is set, any diffs on this field will cause the provider to\nrecreate the underlying resource. Taint values can be updated safely in\nKubernetes (eg. through `kubectl`), and it's recommended that you do not use\nthis field to manage taints. If you do, `lifecycle.ignore_changes` is\nrecommended. Structure is documented below.",
      Container_ClusterNodeConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KubeletConfig",
      "Kubelet configuration, currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).\nStructure is documented below.",
      Container_ClusterNodeConfigKubeletConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoleTenantConfig",
      "Allows specifying multiple [node affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity) useful for running workloads on [sole tenant nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy). `node_affinity` structure is documented below.",
      Container_ClusterNodeConfigSoleTenantConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EffectiveTaints",
      "List of kubernetes taints applied to each node.",
      Container_ClusterNodeConfigEffectiveTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SandboxConfig",
      "Sandbox configuration for this node.",
      Container_ClusterNodeConfigSandboxConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Spot",
      "A boolean that represents whether the underlying node VMs are spot.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms)\nfor more information. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "Shielded Instance options. Structure is documented below.",
      Container_ClusterNodeConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LocalNvmeSsdBlockConfig",
      "Parameters for the local NVMe SSDs. Structure is documented below.",
      Container_ClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfidentialNodes",
      "Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.",
      Container_ClusterNodeConfigConfidentialNodes_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HostMaintenancePolicy",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      Container_ClusterNodeConfigHostMaintenancePolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FastSocket",
      "Parameters for the NCCL Fast Socket feature. If unspecified, NCCL Fast Socket will not be enabled on the node pool.\nNode Pool must enable gvnic.\nGKE version 1.25.2-gke.1700 or later.\nStructure is documented below.",
      Container_ClusterNodeConfigFastSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The image type to use for this node. Note that changing the image type\nwill delete and recreate all nodes in the node pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "A boolean that represents whether or not the underlying node VMs\nare preemptible. See the [official documentation](https://cloud.google.com/container-engine/docs/preemptible-vm)\nfor more information. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The list of instance tags applied to all nodes. Tags are used to identify\nvalid sources or targets for network firewalls.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceLabels",
      "The GCP labels (key/value pairs) to be applied to each node. Refer [here](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels)\nfor how these labels are applied to clusters, node pools and nodes.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The Kubernetes labels (key/value pairs) to be applied to each node. The kubernetes.io/ and k8s.io/ prefixes are\nreserved by Kubernetes Core components and cannot be specified.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EphemeralStorageLocalSsdConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.",
      Container_ClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WorkloadMetadataConfig",
      "Metadata configuration to expose to workloads on the node pool.\nStructure is documented below.",
      Container_ClusterNodeConfigWorkloadMetadataConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialStorage",
      "Enabling Confidential Storage will create boot disk with confidential mode. It is disabled by default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gvnic",
      "Google Virtual NIC (gVNIC) is a virtual network interface.\nInstalling the gVNIC driver allows for more efficient traffic transmission across the Google network infrastructure.\ngVNIC is an alternative to the virtIO-based ethernet driver. GKE nodes must use a Container-Optimized OS node image.\nGKE node version 1.15.11-gke.15 or later\nStructure is documented below.",
      Container_ClusterNodeConfigGvnic_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type.\nDefaults to `e2-medium`. To create a custom machine type, value should be set as specified\n[here](https://cloud.google.com/compute/docs/reference/latest/instances#machineType).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LoggingVariant",
      "Parameter for specifying the type of logging agent used in a node pool. This will override any cluster-wide default value. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LinuxNodeConfig",
      "Parameters that can be configured on Linux nodes. Structure is documented below.",
      Container_ClusterNodeConfigLinuxNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LocalSsdCount",
      "The amount of local SSD disks that will be\nattached to each cluster node. Defaults to 0.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EphemeralStorageConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.",
      Container_ClusterNodeConfigEphemeralStorageConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GuestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.\nStructure documented below.",
      Container_ClusterNodeConfigGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "BootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: <https://cloud.google.com/compute/docs/disks/customer-managed-encryption>",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node\n(e.g. 'pd-standard', 'pd-balanced' or 'pd-ssd'). If unspecified, the default disk type is 'pd-standard'",
      [],
      false,
      false,
    ),
  ];
}
