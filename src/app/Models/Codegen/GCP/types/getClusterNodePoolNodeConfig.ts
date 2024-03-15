import { getClusterNodePoolNodeConfigGuestAccelerator } from "./getClusterNodePoolNodeConfigGuestAccelerator";
import { getClusterNodePoolNodeConfigEffectiveTaint } from "./getClusterNodePoolNodeConfigEffectiveTaint";
import { getClusterNodePoolNodeConfigFastSocket } from "./getClusterNodePoolNodeConfigFastSocket";
import { getClusterNodePoolNodeConfigGvnic } from "./getClusterNodePoolNodeConfigGvnic";
import { getClusterNodePoolNodeConfigKubeletConfig } from "./getClusterNodePoolNodeConfigKubeletConfig";
import { getClusterNodePoolNodeConfigSandboxConfig } from "./getClusterNodePoolNodeConfigSandboxConfig";
import { getClusterNodePoolNodeConfigWorkloadMetadataConfig } from "./getClusterNodePoolNodeConfigWorkloadMetadataConfig";
import { getClusterNodePoolNodeConfigShieldedInstanceConfig } from "./getClusterNodePoolNodeConfigShieldedInstanceConfig";
import { getClusterNodePoolNodeConfigTaint } from "./getClusterNodePoolNodeConfigTaint";
import { getClusterNodePoolNodeConfigLinuxNodeConfig } from "./getClusterNodePoolNodeConfigLinuxNodeConfig";
import { getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig } from "./getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig";
import { getClusterNodePoolNodeConfigSoleTenantConfig } from "./getClusterNodePoolNodeConfigSoleTenantConfig";
import { getClusterNodePoolNodeConfigConfidentialNode } from "./getClusterNodePoolNodeConfigConfidentialNode";
import { getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig } from "./getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import { getClusterNodePoolNodeConfigGcfsConfig } from "./getClusterNodePoolNodeConfigGcfsConfig";
import { getClusterNodePoolNodeConfigEphemeralStorageConfig } from "./getClusterNodePoolNodeConfigEphemeralStorageConfig";
import { getClusterNodePoolNodeConfigAdvancedMachineFeature } from "./getClusterNodePoolNodeConfigAdvancedMachineFeature";
import { getClusterNodePoolNodeConfigHostMaintenancePolicy } from "./getClusterNodePoolNodeConfigHostMaintenancePolicy";
import { getClusterNodePoolNodeConfigReservationAffinity } from "./getClusterNodePoolNodeConfigReservationAffinity";

export interface getClusterNodePoolNodeConfig {
  // The set of Google API scopes to be made available on all of the node VMs.
  OauthScopes?: Array<string>;

  // Specifies options for controlling advanced machine features.
  AdvancedMachineFeatures?: Array<getClusterNodePoolNodeConfigAdvancedMachineFeature>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSizeGb?: number;

  // Enable or disable NCCL Fast Socket in the node pool.
  FastSockets?: Array<getClusterNodePoolNodeConfigFastSocket>;

  // Enable or disable gvnic in the node pool.
  Gvnics?: Array<getClusterNodePoolNodeConfigGvnic>;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  NodeGroup?: string;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  DiskType?: string;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  ImageType?: string;

  // Node kubelet configs.
  KubeletConfigs?: Array<getClusterNodePoolNodeConfigKubeletConfig>;

  // Sandbox configuration for this node.
  SandboxConfigs?: Array<getClusterNodePoolNodeConfigSandboxConfig>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // If enabled boot disks are configured with confidential mode.
  EnableConfidentialStorage?: boolean;

  // Parameters that can be configured on Linux nodes.
  LinuxNodeConfigs?: Array<getClusterNodePoolNodeConfigLinuxNodeConfig>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  MinCpuPlatform?: string;

  // Whether the nodes are created as preemptible VM instances.
  Preemptible?: boolean;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageLocalSsdConfigs?: Array<getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig>;

  // GCFS configuration for this node.
  GcfsConfigs?: Array<getClusterNodePoolNodeConfigGcfsConfig>;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<getClusterNodePoolNodeConfigGuestAccelerator>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicies?: Array<getClusterNodePoolNodeConfigHostMaintenancePolicy>;

  // Parameters for raw-block local NVMe SSDs.
  LocalNvmeSsdBlockConfigs?: Array<getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig>;

  // The number of local SSD disks to be attached to the node.
  LocalSsdCount?: number;

  // The metadata key/value pairs assigned to instances in the cluster.
  Metadata?: Map<string, string>;

  // Node affinity options for sole tenant node pools.
  SoleTenantConfigs?: Array<getClusterNodePoolNodeConfigSoleTenantConfig>;

  // Whether the nodes are created as spot VM instances.
  Spot?: boolean;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  Labels?: Map<string, string>;

  // The name of a Google Compute Engine machine type.
  MachineType?: string;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  ResourceLabels?: Map<string, string>;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  ConfidentialNodes?: Array<getClusterNodePoolNodeConfigConfidentialNode>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;

  // The reservation affinity configuration for the node pool.
  ReservationAffinities?: Array<getClusterNodePoolNodeConfigReservationAffinity>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // The list of instance tags applied to all nodes.
  Tags?: Array<string>;

  // The workload metadata configuration for this node.
  WorkloadMetadataConfigs?: Array<getClusterNodePoolNodeConfigWorkloadMetadataConfig>;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<getClusterNodePoolNodeConfigEffectiveTaint>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageConfigs?: Array<getClusterNodePoolNodeConfigEphemeralStorageConfig>;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<getClusterNodePoolNodeConfigShieldedInstanceConfig>;

  // List of Kubernetes taints to be applied to each node.
  Taints?: Array<getClusterNodePoolNodeConfigTaint>;
}
