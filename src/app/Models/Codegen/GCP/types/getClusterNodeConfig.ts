import { getClusterNodeConfigFastSocket } from "./getClusterNodeConfigFastSocket";
import { getClusterNodeConfigReservationAffinity } from "./getClusterNodeConfigReservationAffinity";
import { getClusterNodeConfigConfidentialNode } from "./getClusterNodeConfigConfidentialNode";
import { getClusterNodeConfigLinuxNodeConfig } from "./getClusterNodeConfigLinuxNodeConfig";
import { getClusterNodeConfigGvnic } from "./getClusterNodeConfigGvnic";
import { getClusterNodeConfigHostMaintenancePolicy } from "./getClusterNodeConfigHostMaintenancePolicy";
import { getClusterNodeConfigWorkloadMetadataConfig } from "./getClusterNodeConfigWorkloadMetadataConfig";
import { getClusterNodeConfigEphemeralStorageLocalSsdConfig } from "./getClusterNodeConfigEphemeralStorageLocalSsdConfig";
import { getClusterNodeConfigSandboxConfig } from "./getClusterNodeConfigSandboxConfig";
import { getClusterNodeConfigShieldedInstanceConfig } from "./getClusterNodeConfigShieldedInstanceConfig";
import { getClusterNodeConfigSoleTenantConfig } from "./getClusterNodeConfigSoleTenantConfig";
import { getClusterNodeConfigLocalNvmeSsdBlockConfig } from "./getClusterNodeConfigLocalNvmeSsdBlockConfig";
import { getClusterNodeConfigKubeletConfig } from "./getClusterNodeConfigKubeletConfig";
import { getClusterNodeConfigGcfsConfig } from "./getClusterNodeConfigGcfsConfig";
import { getClusterNodeConfigGuestAccelerator } from "./getClusterNodeConfigGuestAccelerator";
import { getClusterNodeConfigEffectiveTaint } from "./getClusterNodeConfigEffectiveTaint";
import { getClusterNodeConfigEphemeralStorageConfig } from "./getClusterNodeConfigEphemeralStorageConfig";
import { getClusterNodeConfigAdvancedMachineFeature } from "./getClusterNodeConfigAdvancedMachineFeature";
import { getClusterNodeConfigTaint } from "./getClusterNodeConfigTaint";

export interface getClusterNodeConfig {
  // Parameters for raw-block local NVMe SSDs.
  LocalNvmeSsdBlockConfigs?: Array<getClusterNodeConfigLocalNvmeSsdBlockConfig>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  NodeGroup?: string;

  // Whether the nodes are created as preemptible VM instances.
  Preemptible?: boolean;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<getClusterNodeConfigEffectiveTaint>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageConfigs?: Array<getClusterNodeConfigEphemeralStorageConfig>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  ImageType?: string;

  // Node kubelet configs.
  KubeletConfigs?: Array<getClusterNodeConfigKubeletConfig>;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  // Enable or disable NCCL Fast Socket in the node pool.
  FastSockets?: Array<getClusterNodeConfigFastSocket>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicies?: Array<getClusterNodeConfigHostMaintenancePolicy>;

  // The workload metadata configuration for this node.
  WorkloadMetadataConfigs?: Array<getClusterNodeConfigWorkloadMetadataConfig>;

  // Specifies options for controlling advanced machine features.
  AdvancedMachineFeatures?: Array<getClusterNodeConfigAdvancedMachineFeature>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageLocalSsdConfigs?: Array<getClusterNodeConfigEphemeralStorageLocalSsdConfig>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSizeGb?: number;

  // Sandbox configuration for this node.
  SandboxConfigs?: Array<getClusterNodeConfigSandboxConfig>;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<getClusterNodeConfigShieldedInstanceConfig>;

  // Node affinity options for sole tenant node pools.
  SoleTenantConfigs?: Array<getClusterNodeConfigSoleTenantConfig>;

  // The number of local SSD disks to be attached to the node.
  LocalSsdCount?: number;

  // The metadata key/value pairs assigned to instances in the cluster.
  Metadata?: Map<string, string>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  MinCpuPlatform?: string;

  // The reservation affinity configuration for the node pool.
  ReservationAffinities?: Array<getClusterNodeConfigReservationAffinity>;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  ConfidentialNodes?: Array<getClusterNodeConfigConfidentialNode>;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  Labels?: Map<string, string>;

  // Parameters that can be configured on Linux nodes.
  LinuxNodeConfigs?: Array<getClusterNodeConfigLinuxNodeConfig>;

  // The list of instance tags applied to all nodes.
  Tags?: Array<string>;

  // List of Kubernetes taints to be applied to each node.
  Taints?: Array<getClusterNodeConfigTaint>;

  // Enable or disable gvnic in the node pool.
  Gvnics?: Array<getClusterNodeConfigGvnic>;

  // The name of a Google Compute Engine machine type.
  MachineType?: string;

  // The set of Google API scopes to be made available on all of the node VMs.
  OauthScopes?: Array<string>;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  ResourceLabels?: Map<string, string>;

  // Whether the nodes are created as spot VM instances.
  Spot?: boolean;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  DiskType?: string;

  // If enabled boot disks are configured with confidential mode.
  EnableConfidentialStorage?: boolean;

  // GCFS configuration for this node.
  GcfsConfigs?: Array<getClusterNodeConfigGcfsConfig>;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<getClusterNodeConfigGuestAccelerator>;
}
