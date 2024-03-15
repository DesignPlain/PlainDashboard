import { ClusterNodeConfigKubeletConfig } from "./ClusterNodeConfigKubeletConfig";
import { ClusterNodeConfigGuestAccelerator } from "./ClusterNodeConfigGuestAccelerator";
import { ClusterNodeConfigShieldedInstanceConfig } from "./ClusterNodeConfigShieldedInstanceConfig";
import { ClusterNodeConfigTaint } from "./ClusterNodeConfigTaint";
import { ClusterNodeConfigFastSocket } from "./ClusterNodeConfigFastSocket";
import { ClusterNodeConfigReservationAffinity } from "./ClusterNodeConfigReservationAffinity";
import { ClusterNodeConfigEffectiveTaint } from "./ClusterNodeConfigEffectiveTaint";
import { ClusterNodeConfigLinuxNodeConfig } from "./ClusterNodeConfigLinuxNodeConfig";
import { ClusterNodeConfigSandboxConfig } from "./ClusterNodeConfigSandboxConfig";
import { ClusterNodeConfigSoleTenantConfig } from "./ClusterNodeConfigSoleTenantConfig";
import { ClusterNodeConfigWorkloadMetadataConfig } from "./ClusterNodeConfigWorkloadMetadataConfig";
import { ClusterNodeConfigAdvancedMachineFeatures } from "./ClusterNodeConfigAdvancedMachineFeatures";
import { ClusterNodeConfigGcfsConfig } from "./ClusterNodeConfigGcfsConfig";
import { ClusterNodeConfigLocalNvmeSsdBlockConfig } from "./ClusterNodeConfigLocalNvmeSsdBlockConfig";
import { ClusterNodeConfigEphemeralStorageConfig } from "./ClusterNodeConfigEphemeralStorageConfig";
import { ClusterNodeConfigGvnic } from "./ClusterNodeConfigGvnic";
import { ClusterNodeConfigConfidentialNodes } from "./ClusterNodeConfigConfidentialNodes";
import { ClusterNodeConfigEphemeralStorageLocalSsdConfig } from "./ClusterNodeConfigEphemeralStorageLocalSsdConfig";
import { ClusterNodeConfigHostMaintenancePolicy } from "./ClusterNodeConfigHostMaintenancePolicy";

export interface ClusterNodeConfig {
  // A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications found [here](https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications). A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`.
  ResourceManagerTags?: Map<string, string>;

  /*
Specifies options for controlling
advanced machine features. Structure is documented below.
*/
  AdvancedMachineFeatures?: ClusterNodeConfigAdvancedMachineFeatures;

  /*
Parameters for the Google Container Filesystem (GCFS).
If unspecified, GCFS will not be enabled on the node pool. When enabling this feature you must specify `image_type = "COS_CONTAINERD"` and `node_version` from GKE versions 1.19 or later to use it.
For GKE versions 1.19, 1.20, and 1.21, the recommended minimum `node_version` would be 1.19.15-gke.1300, 1.20.11-gke.1300, and 1.21.5-gke.1300 respectively.
A `machine_type` that has more than 16 GiB of memory is also recommended.
GCFS must be enabled in order to use [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming).
Structure is documented below.
*/
  GcfsConfig?: ClusterNodeConfigGcfsConfig;

  /*
List of the type and count of accelerator cards attached to the instance.
Structure documented below.
*/
  GuestAccelerators?: Array<ClusterNodeConfigGuestAccelerator>;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
  NodeGroup?: string;

  /*
The set of Google API scopes to be made available
on all of the node VMs under the "default" service account.
Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/access-scopes) for information on migrating off of legacy access scopes.
*/
  OauthScopes?: Array<string>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: <https://cloud.google.com/compute/docs/disks/customer-managed-encryption>
  BootDiskKmsKey?: string;

  /*
The amount of local SSD disks that will be
attached to each cluster node. Defaults to 0.
*/
  LocalSsdCount?: number;

  // Shielded Instance options. Structure is documented below.
  ShieldedInstanceConfig?: ClusterNodeConfigShieldedInstanceConfig;

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
  Taints?: Array<ClusterNodeConfigTaint>;

  /*
Minimum CPU platform to be used by this instance.
The instance may be scheduled on the specified or newer CPU platform. Applicable
values are the friendly names of CPU platforms, such as `Intel Haswell`. See the
[official documentation](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for more information.
*/
  MinCpuPlatform?: string;

  /*
The list of instance tags applied to all nodes. Tags are used to identify
valid sources or targets for network firewalls.
*/
  Tags?: Array<string>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  EphemeralStorageLocalSsdConfig?: ClusterNodeConfigEphemeralStorageLocalSsdConfig;

  /*
Parameters for the NCCL Fast Socket feature. If unspecified, NCCL Fast Socket will not be enabled on the node pool.
Node Pool must enable gvnic.
GKE version 1.25.2-gke.1700 or later.
Structure is documented below.
*/
  FastSocket?: ClusterNodeConfigFastSocket;

  // Parameters for the local NVMe SSDs. Structure is documented below.
  LocalNvmeSsdBlockConfig?: ClusterNodeConfigLocalNvmeSsdBlockConfig;

  // Parameter for specifying the type of logging agent used in a node pool. This will override any cluster-wide default value. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.
  LoggingVariant?: string;

  /*
The GCP labels (key/value pairs) to be applied to each node. Refer [here](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels)
for how these labels are applied to clusters, node pools and nodes.
*/
  ResourceLabels?: Map<string, string>;

  /*
Size of the disk attached to each node, specified
in GB. The smallest allowed disk size is 10GB. Defaults to 100GB.
*/
  DiskSizeGb?: number;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  EphemeralStorageConfig?: ClusterNodeConfigEphemeralStorageConfig;

  /*
The Kubernetes labels (key/value pairs) to be applied to each node. The kubernetes.io/ and k8s.io/ prefixes are
reserved by Kubernetes Core components and cannot be specified.
*/
  Labels?: Map<string, string>;

  /*
The metadata key/value pairs assigned to instances in
the cluster. From GKE `1.12` onwards, `disable-legacy-endpoints` is set to
`true` by the API; if `metadata` is set but that default value is not
included, the provider will attempt to unset the value. To avoid this, set the
value in your config.
*/
  Metadata?: Map<string, string>;

  // The configuration of the desired reservation which instances could take capacity from. Structure is documented below.
  ReservationAffinity?: ClusterNodeConfigReservationAffinity;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<ClusterNodeConfigEffectiveTaint>;

  // Enabling Confidential Storage will create boot disk with confidential mode. It is disabled by default.
  EnableConfidentialStorage?: boolean;

  /*
Google Virtual NIC (gVNIC) is a virtual network interface.
Installing the gVNIC driver allows for more efficient traffic transmission across the Google network infrastructure.
gVNIC is an alternative to the virtIO-based ethernet driver. GKE nodes must use a Container-Optimized OS node image.
GKE node version 1.15.11-gke.15 or later
Structure is documented below.
*/
  Gvnic?: ClusterNodeConfigGvnic;

  /*
Kubelet configuration, currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).
Structure is documented below.
*/
  KubeletConfig?: ClusterNodeConfigKubeletConfig;

  /*
A boolean that represents whether the underlying node VMs are spot.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms)
for more information. Defaults to false.
*/
  Spot?: boolean;

  /*
Type of the disk attached to each node
(e.g. 'pd-standard', 'pd-balanced' or 'pd-ssd'). If unspecified, the default disk type is 'pd-standard'
*/
  DiskType?: string;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicy?: ClusterNodeConfigHostMaintenancePolicy;

  /*
The name of a Google Compute Engine machine type.
Defaults to `e2-medium`. To create a custom machine type, value should be set as specified
[here](https://cloud.google.com/compute/docs/reference/latest/instances#machineType).
*/
  MachineType?: string;

  // Sandbox configuration for this node.
  SandboxConfig?: ClusterNodeConfigSandboxConfig;

  // Allows specifying multiple [node affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity) useful for running workloads on [sole tenant nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy). `node_affinity` structure is documented below.
  SoleTenantConfig?: ClusterNodeConfigSoleTenantConfig;

  /*
Metadata configuration to expose to workloads on the node pool.
Structure is documented below.
*/
  WorkloadMetadataConfig?: ClusterNodeConfigWorkloadMetadataConfig;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  ConfidentialNodes?: ClusterNodeConfigConfidentialNodes;

  /*
The image type to use for this node. Note that changing the image type
will delete and recreate all nodes in the node pool.
*/
  ImageType?: string;

  // Parameters that can be configured on Linux nodes. Structure is documented below.
  LinuxNodeConfig?: ClusterNodeConfigLinuxNodeConfig;

  /*
A boolean that represents whether or not the underlying node VMs
are preemptible. See the [official documentation](https://cloud.google.com/container-engine/docs/preemptible-vm)
for more information. Defaults to false.
*/
  Preemptible?: boolean;

  /*
The service account to be used by the Node VMs.
If not specified, the "default" service account is used.
*/
  ServiceAccount?: string;
}
