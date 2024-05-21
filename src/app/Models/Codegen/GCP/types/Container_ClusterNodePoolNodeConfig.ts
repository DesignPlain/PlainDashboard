import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterNodePoolNodeConfigTaint,
  container_ClusterNodePoolNodeConfigTaint_GetTypes,
} from "./container_ClusterNodePoolNodeConfigTaint";
import {
  container_ClusterNodePoolNodeConfigEffectiveTaint,
  container_ClusterNodePoolNodeConfigEffectiveTaint_GetTypes,
} from "./container_ClusterNodePoolNodeConfigEffectiveTaint";
import {
  container_ClusterNodePoolNodeConfigHostMaintenancePolicy,
  container_ClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes,
} from "./container_ClusterNodePoolNodeConfigHostMaintenancePolicy";
import {
  container_ClusterNodePoolNodeConfigConfidentialNodes,
  container_ClusterNodePoolNodeConfigConfidentialNodes_GetTypes,
} from "./container_ClusterNodePoolNodeConfigConfidentialNodes";
import {
  container_ClusterNodePoolNodeConfigSoleTenantConfig,
  container_ClusterNodePoolNodeConfigSoleTenantConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigSoleTenantConfig";
import {
  container_ClusterNodePoolNodeConfigShieldedInstanceConfig,
  container_ClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigShieldedInstanceConfig";
import {
  container_ClusterNodePoolNodeConfigWorkloadMetadataConfig,
  container_ClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigWorkloadMetadataConfig";
import {
  container_ClusterNodePoolNodeConfigAdvancedMachineFeatures,
  container_ClusterNodePoolNodeConfigAdvancedMachineFeatures_GetTypes,
} from "./container_ClusterNodePoolNodeConfigAdvancedMachineFeatures";
import {
  container_ClusterNodePoolNodeConfigGcfsConfig,
  container_ClusterNodePoolNodeConfigGcfsConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigGcfsConfig";
import {
  container_ClusterNodePoolNodeConfigKubeletConfig,
  container_ClusterNodePoolNodeConfigKubeletConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigKubeletConfig";
import {
  container_ClusterNodePoolNodeConfigReservationAffinity,
  container_ClusterNodePoolNodeConfigReservationAffinity_GetTypes,
} from "./container_ClusterNodePoolNodeConfigReservationAffinity";
import {
  container_ClusterNodePoolNodeConfigEphemeralStorageConfig,
  container_ClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigEphemeralStorageConfig";
import {
  container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig,
  container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig";
import {
  container_ClusterNodePoolNodeConfigLinuxNodeConfig,
  container_ClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigLinuxNodeConfig";
import {
  container_ClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig,
  container_ClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import {
  container_ClusterNodePoolNodeConfigFastSocket,
  container_ClusterNodePoolNodeConfigFastSocket_GetTypes,
} from "./container_ClusterNodePoolNodeConfigFastSocket";
import {
  container_ClusterNodePoolNodeConfigGuestAccelerator,
  container_ClusterNodePoolNodeConfigGuestAccelerator_GetTypes,
} from "./container_ClusterNodePoolNodeConfigGuestAccelerator";
import {
  container_ClusterNodePoolNodeConfigGvnic,
  container_ClusterNodePoolNodeConfigGvnic_GetTypes,
} from "./container_ClusterNodePoolNodeConfigGvnic";
import {
  container_ClusterNodePoolNodeConfigSandboxConfig,
  container_ClusterNodePoolNodeConfigSandboxConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigSandboxConfig";

export interface container_ClusterNodePoolNodeConfig {
  /*
The set of Google API scopes to be made available
on all of the node VMs under the "default" service account.
Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/access-scopes) for information on migrating off of legacy access scopes.
*/
  oauthScopes?: Array<string>;

  // A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications found [here](https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications). A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`.
  resourceManagerTags?: Map<string, string>;

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
  taints?: Array<container_ClusterNodePoolNodeConfigTaint>;

  /*
Parameters for the Google Container Filesystem (GCFS).
If unspecified, GCFS will not be enabled on the node pool. When enabling this feature you must specify `image_type = "COS_CONTAINERD"` and `node_version` from GKE versions 1.19 or later to use it.
For GKE versions 1.19, 1.20, and 1.21, the recommended minimum `node_version` would be 1.19.15-gke.1300, 1.20.11-gke.1300, and 1.21.5-gke.1300 respectively.
A `machine_type` that has more than 16 GiB of memory is also recommended.
GCFS must be enabled in order to use [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming).
Structure is documented below.
*/
  gcfsConfig?: container_ClusterNodePoolNodeConfigGcfsConfig;

  // Parameters for the local NVMe SSDs. Structure is documented below.
  localNvmeSsdBlockConfig?: container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;

  /*
The name of a Google Compute Engine machine type.
Defaults to `e2-medium`. To create a custom machine type, value should be set as specified
[here](https://cloud.google.com/compute/docs/reference/latest/instances#machineType).
*/
  machineType?: string;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
  nodeGroup?: string;

  /*
The image type to use for this node. Note that changing the image type
will delete and recreate all nodes in the node pool.
*/
  imageType?: string;

  /*
The Kubernetes labels (key/value pairs) to be applied to each node. The kubernetes.io/ and k8s.io/ prefixes are
reserved by Kubernetes Core components and cannot be specified.
*/
  labels?: Map<string, string>;

  /*
A boolean that represents whether the underlying node VMs are spot.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms)
for more information. Defaults to false.
*/
  spot?: boolean;

  /*
The list of instance tags applied to all nodes. Tags are used to identify
valid sources or targets for network firewalls.
*/
  tags?: Array<string>;

  /*
Size of the disk attached to each node, specified
in GB. The smallest allowed disk size is 10GB. Defaults to 100GB.
*/
  diskSizeGb?: number;

  // List of kubernetes taints applied to each node.
  effectiveTaints?: Array<container_ClusterNodePoolNodeConfigEffectiveTaint>;

  /*
Kubelet configuration, currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).
Structure is documented below.
*/
  kubeletConfig?: container_ClusterNodePoolNodeConfigKubeletConfig;

  // Parameters that can be configured on Linux nodes. Structure is documented below.
  linuxNodeConfig?: container_ClusterNodePoolNodeConfigLinuxNodeConfig;

  /*
The amount of local SSD disks that will be
attached to each cluster node. Defaults to 0.
*/
  localSsdCount?: number;

  /*
A boolean that represents whether or not the underlying node VMs
are preemptible. See the [official documentation](https://cloud.google.com/container-engine/docs/preemptible-vm)
for more information. Defaults to false.
*/
  preemptible?: boolean;

  // The configuration of the desired reservation which instances could take capacity from. Structure is documented below.
  reservationAffinity?: container_ClusterNodePoolNodeConfigReservationAffinity;

  // Sandbox configuration for this node.
  sandboxConfig?: container_ClusterNodePoolNodeConfigSandboxConfig;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: <https://cloud.google.com/compute/docs/disks/customer-managed-encryption>
  bootDiskKmsKey?: string;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  ephemeralStorageConfig?: container_ClusterNodePoolNodeConfigEphemeralStorageConfig;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.
  ephemeralStorageLocalSsdConfig?: container_ClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  hostMaintenancePolicy?: container_ClusterNodePoolNodeConfigHostMaintenancePolicy;

  /*
The service account to be used by the Node VMs.
If not specified, the "default" service account is used.
*/
  serviceAccount?: string;

  /*
Minimum CPU platform to be used by this instance.
The instance may be scheduled on the specified or newer CPU platform. Applicable
values are the friendly names of CPU platforms, such as `Intel Haswell`. See the
[official documentation](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for more information.
*/
  minCpuPlatform?: string;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  confidentialNodes?: container_ClusterNodePoolNodeConfigConfidentialNodes;

  /*
Parameters for the NCCL Fast Socket feature. If unspecified, NCCL Fast Socket will not be enabled on the node pool.
Node Pool must enable gvnic.
GKE version 1.25.2-gke.1700 or later.
Structure is documented below.
*/
  fastSocket?: container_ClusterNodePoolNodeConfigFastSocket;

  // Parameter for specifying the type of logging agent used in a node pool. This will override any cluster-wide default value. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.
  loggingVariant?: string;

  /*
The metadata key/value pairs assigned to instances in
the cluster. From GKE `1.12` onwards, `disable-legacy-endpoints` is set to
`true` by the API; if `metadata` is set but that default value is not
included, the provider will attempt to unset the value. To avoid this, set the
value in your config.
*/
  metadata?: Map<string, string>;

  /*
Type of the disk attached to each node
(e.g. 'pd-standard', 'pd-balanced' or 'pd-ssd'). If unspecified, the default disk type is 'pd-standard'
*/
  diskType?: string;

  /*
List of the type and count of accelerator cards attached to the instance.
Structure documented below.
*/
  guestAccelerators?: Array<container_ClusterNodePoolNodeConfigGuestAccelerator>;

  // Allows specifying multiple [node affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity) useful for running workloads on [sole tenant nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy). `node_affinity` structure is documented below.
  soleTenantConfig?: container_ClusterNodePoolNodeConfigSoleTenantConfig;

  // Shielded Instance options. Structure is documented below.
  shieldedInstanceConfig?: container_ClusterNodePoolNodeConfigShieldedInstanceConfig;

  /*
Metadata configuration to expose to workloads on the node pool.
Structure is documented below.
*/
  workloadMetadataConfig?: container_ClusterNodePoolNodeConfigWorkloadMetadataConfig;

  /*
Specifies options for controlling
advanced machine features. Structure is documented below.
*/
  advancedMachineFeatures?: container_ClusterNodePoolNodeConfigAdvancedMachineFeatures;

  // Enabling Confidential Storage will create boot disk with confidential mode. It is disabled by default.
  enableConfidentialStorage?: boolean;

  /*
Google Virtual NIC (gVNIC) is a virtual network interface.
Installing the gVNIC driver allows for more efficient traffic transmission across the Google network infrastructure.
gVNIC is an alternative to the virtIO-based ethernet driver. GKE nodes must use a Container-Optimized OS node image.
GKE node version 1.15.11-gke.15 or later
Structure is documented below.
*/
  gvnic?: container_ClusterNodePoolNodeConfigGvnic;

  /*
The GCP labels (key/value pairs) to be applied to each node. Refer [here](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels)
for how these labels are applied to clusters, node pools and nodes.
*/
  resourceLabels?: Map<string, string>;
}

export function container_ClusterNodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      'The set of Google API scopes to be made available\non all of the node VMs under the "default" service account.\nUse the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.\n\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/access-scopes) for information on migrating off of legacy access scopes.',
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications found [here](https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications). A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubeletConfig",
      "Kubelet configuration, currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).\nStructure is documented below.",
      container_ClusterNodePoolNodeConfigKubeletConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "soleTenantConfig",
      "Allows specifying multiple [node affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity) useful for running workloads on [sole tenant nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy). `node_affinity` structure is documented below.",
      container_ClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gvnic",
      "Google Virtual NIC (gVNIC) is a virtual network interface.\nInstalling the gVNIC driver allows for more efficient traffic transmission across the Google network infrastructure.\ngVNIC is an alternative to the virtIO-based ethernet driver. GKE nodes must use a Container-Optimized OS node image.\nGKE node version 1.15.11-gke.15 or later\nStructure is documented below.",
      container_ClusterNodePoolNodeConfigGvnic_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "The amount of local SSD disks that will be\nattached to each cluster node. Defaults to 0.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: <https://cloud.google.com/compute/docs/disks/customer-managed-encryption>",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ephemeralStorageConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.",
      container_ClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "Minimum CPU platform to be used by this instance.\nThe instance may be scheduled on the specified or newer CPU platform. Applicable\nvalues are the friendly names of CPU platforms, such as `Intel Haswell`. See the\n[official documentation](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor more information.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "A list of [Kubernetes taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)\nto apply to nodes. GKE's API can only set this field on cluster creation.\nHowever, GKE will add taints to your nodes if you enable certain features such\nas GPUs. If this field is set, any diffs on this field will cause the provider to\nrecreate the underlying resource. Taint values can be updated safely in\nKubernetes (eg. through `kubectl`), and it's recommended that you do not use\nthis field to manage taints. If you do, `lifecycle.ignore_changes` is\nrecommended. Structure is documented below.",
      container_ClusterNodePoolNodeConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcfsConfig",
      'Parameters for the Google Container Filesystem (GCFS).\nIf unspecified, GCFS will not be enabled on the node pool. When enabling this feature you must specify `image_type = "COS_CONTAINERD"` and `node_version` from GKE versions 1.19 or later to use it.\nFor GKE versions 1.19, 1.20, and 1.21, the recommended minimum `node_version` would be 1.19.15-gke.1300, 1.20.11-gke.1300, and 1.21.5-gke.1300 respectively.\nA `machine_type` that has more than 16 GiB of memory is also recommended.\nGCFS must be enabled in order to use [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming).\nStructure is documented below.',
      container_ClusterNodePoolNodeConfigGcfsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.\nStructure documented below.",
      container_ClusterNodePoolNodeConfigGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The list of instance tags applied to all nodes. Tags are used to identify\nvalid sources or targets for network firewalls.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "Size of the disk attached to each node, specified\nin GB. The smallest allowed disk size is 10GB. Defaults to 100GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "reservationAffinity",
      "The configuration of the desired reservation which instances could take capacity from. Structure is documented below.",
      container_ClusterNodePoolNodeConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "loggingVariant",
      "Parameter for specifying the type of logging agent used in a node pool. This will override any cluster-wide default value. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedMachineFeatures",
      "Specifies options for controlling\nadvanced machine features. Structure is documented below.",
      container_ClusterNodePoolNodeConfigAdvancedMachineFeatures_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      'The service account to be used by the Node VMs.\nIf not specified, the "default" service account is used.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "localNvmeSsdBlockConfig",
      "Parameters for the local NVMe SSDs. Structure is documented below.",
      container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ephemeralStorageLocalSsdConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. Structure is documented below.",
      container_ClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The metadata key/value pairs assigned to instances in\nthe cluster. From GKE `1.12` onwards, `disable-legacy-endpoints` is set to\n`true` by the API; if `metadata` is set but that default value is not\nincluded, the provider will attempt to unset the value. To avoid this, set the\nvalue in your config.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded Instance options. Structure is documented below.",
      container_ClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workloadMetadataConfig",
      "Metadata configuration to expose to workloads on the node pool.\nStructure is documented below.",
      container_ClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sandboxConfig",
      "Sandbox configuration for this node.",
      container_ClusterNodePoolNodeConfigSandboxConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostMaintenancePolicy",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      container_ClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type.\nDefaults to `e2-medium`. To create a custom machine type, value should be set as specified\n[here](https://cloud.google.com/compute/docs/reference/latest/instances#machineType).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The image type to use for this node. Note that changing the image type\nwill delete and recreate all nodes in the node pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The Kubernetes labels (key/value pairs) to be applied to each node. The kubernetes.io/ and k8s.io/ prefixes are\nreserved by Kubernetes Core components and cannot be specified.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "spot",
      "A boolean that represents whether the underlying node VMs are spot.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms)\nfor more information. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "effectiveTaints",
      "List of kubernetes taints applied to each node.",
      container_ClusterNodePoolNodeConfigEffectiveTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "linuxNodeConfig",
      "Parameters that can be configured on Linux nodes. Structure is documented below.",
      container_ClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confidentialNodes",
      "Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.",
      container_ClusterNodePoolNodeConfigConfidentialNodes_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fastSocket",
      "Parameters for the NCCL Fast Socket feature. If unspecified, NCCL Fast Socket will not be enabled on the node pool.\nNode Pool must enable gvnic.\nGKE version 1.25.2-gke.1700 or later.\nStructure is documented below.",
      container_ClusterNodePoolNodeConfigFastSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "Type of the disk attached to each node\n(e.g. 'pd-standard', 'pd-balanced' or 'pd-ssd'). If unspecified, the default disk type is 'pd-standard'",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialStorage",
      "Enabling Confidential Storage will create boot disk with confidential mode. It is disabled by default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceLabels",
      "The GCP labels (key/value pairs) to be applied to each node. Refer [here](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels)\nfor how these labels are applied to clusters, node pools and nodes.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "A boolean that represents whether or not the underlying node VMs\nare preemptible. See the [official documentation](https://cloud.google.com/container-engine/docs/preemptible-vm)\nfor more information. Defaults to false.",
      [],
      false,
      true,
    ),
  ];
}
