import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterNodePoolNodeConfigWorkloadMetadataConfig,
  container_getClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigWorkloadMetadataConfig";
import {
  container_getClusterNodePoolNodeConfigFastSocket,
  container_getClusterNodePoolNodeConfigFastSocket_GetTypes,
} from "./container_getClusterNodePoolNodeConfigFastSocket";
import {
  container_getClusterNodePoolNodeConfigEffectiveTaint,
  container_getClusterNodePoolNodeConfigEffectiveTaint_GetTypes,
} from "./container_getClusterNodePoolNodeConfigEffectiveTaint";
import {
  container_getClusterNodePoolNodeConfigEphemeralStorageConfig,
  container_getClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigEphemeralStorageConfig";
import {
  container_getClusterNodePoolNodeConfigReservationAffinity,
  container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes,
} from "./container_getClusterNodePoolNodeConfigReservationAffinity";
import {
  container_getClusterNodePoolNodeConfigGvnic,
  container_getClusterNodePoolNodeConfigGvnic_GetTypes,
} from "./container_getClusterNodePoolNodeConfigGvnic";
import {
  container_getClusterNodePoolNodeConfigHostMaintenancePolicy,
  container_getClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes,
} from "./container_getClusterNodePoolNodeConfigHostMaintenancePolicy";
import {
  container_getClusterNodePoolNodeConfigSoleTenantConfig,
  container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigSoleTenantConfig";
import {
  container_getClusterNodePoolNodeConfigKubeletConfig,
  container_getClusterNodePoolNodeConfigKubeletConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigKubeletConfig";
import {
  container_getClusterNodePoolNodeConfigAdvancedMachineFeature,
  container_getClusterNodePoolNodeConfigAdvancedMachineFeature_GetTypes,
} from "./container_getClusterNodePoolNodeConfigAdvancedMachineFeature";
import {
  container_getClusterNodePoolNodeConfigLinuxNodeConfig,
  container_getClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigLinuxNodeConfig";
import {
  container_getClusterNodePoolNodeConfigSandboxConfig,
  container_getClusterNodePoolNodeConfigSandboxConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigSandboxConfig";
import {
  container_getClusterNodePoolNodeConfigTaint,
  container_getClusterNodePoolNodeConfigTaint_GetTypes,
} from "./container_getClusterNodePoolNodeConfigTaint";
import {
  container_getClusterNodePoolNodeConfigShieldedInstanceConfig,
  container_getClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigShieldedInstanceConfig";
import {
  container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig,
  container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig";
import {
  container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig,
  container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import {
  container_getClusterNodePoolNodeConfigGuestAccelerator,
  container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes,
} from "./container_getClusterNodePoolNodeConfigGuestAccelerator";
import {
  container_getClusterNodePoolNodeConfigGcfsConfig,
  container_getClusterNodePoolNodeConfigGcfsConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigGcfsConfig";
import {
  container_getClusterNodePoolNodeConfigConfidentialNode,
  container_getClusterNodePoolNodeConfigConfidentialNode_GetTypes,
} from "./container_getClusterNodePoolNodeConfigConfidentialNode";

export interface container_getClusterNodePoolNodeConfig {
  // If enabled boot disks are configured with confidential mode.
  enableConfidentialStorage?: boolean;

  // Parameters that can be configured on Linux nodes.
  linuxNodeConfigs?: Array<container_getClusterNodePoolNodeConfigLinuxNodeConfig>;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  diskType?: string;

  // List of kubernetes taints applied to each node.
  effectiveTaints?: Array<container_getClusterNodePoolNodeConfigEffectiveTaint>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageConfigs?: Array<container_getClusterNodePoolNodeConfigEphemeralStorageConfig>;

  // The set of Google API scopes to be made available on all of the node VMs.
  oauthScopes?: Array<string>;

  // The reservation affinity configuration for the node pool.
  reservationAffinities?: Array<container_getClusterNodePoolNodeConfigReservationAffinity>;

  // Node affinity options for sole tenant node pools.
  soleTenantConfigs?: Array<container_getClusterNodePoolNodeConfigSoleTenantConfig>;

  // The list of instance tags applied to all nodes.
  tags?: Array<string>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  diskSizeGb?: number;

  // Parameters for raw-block local NVMe SSDs.
  localNvmeSsdBlockConfigs?: Array<container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig>;

  // The name of a Google Compute Engine machine type.
  machineType?: string;

  // Sandbox configuration for this node.
  sandboxConfigs?: Array<container_getClusterNodePoolNodeConfigSandboxConfig>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  bootDiskKmsKey?: string;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  resourceLabels?: Map<string, string>;

  // List of Kubernetes taints to be applied to each node.
  taints?: Array<container_getClusterNodePoolNodeConfigTaint>;

  // Enable or disable gvnic in the node pool.
  gvnics?: Array<container_getClusterNodePoolNodeConfigGvnic>;

  // Node kubelet configs.
  kubeletConfigs?: Array<container_getClusterNodePoolNodeConfigKubeletConfig>;

  // The metadata key/value pairs assigned to instances in the cluster.
  metadata?: Map<string, string>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageLocalSsdConfigs?: Array<container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  hostMaintenancePolicies?: Array<container_getClusterNodePoolNodeConfigHostMaintenancePolicy>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  imageType?: string;

  // The number of local SSD disks to be attached to the node.
  localSsdCount?: number;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  loggingVariant?: string;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  nodeGroup?: string;

  // Whether the nodes are created as preemptible VM instances.
  preemptible?: boolean;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;

  // List of the type and count of accelerator cards attached to the instance.
  guestAccelerators?: Array<container_getClusterNodePoolNodeConfigGuestAccelerator>;

  // Whether the nodes are created as spot VM instances.
  spot?: boolean;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  labels?: Map<string, string>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  minCpuPlatform?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  serviceAccount?: string;

  // The workload metadata configuration for this node.
  workloadMetadataConfigs?: Array<container_getClusterNodePoolNodeConfigWorkloadMetadataConfig>;

  // GCFS configuration for this node.
  gcfsConfigs?: Array<container_getClusterNodePoolNodeConfigGcfsConfig>;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  confidentialNodes?: Array<container_getClusterNodePoolNodeConfigConfidentialNode>;

  // Enable or disable NCCL Fast Socket in the node pool.
  fastSockets?: Array<container_getClusterNodePoolNodeConfigFastSocket>;

  // Shielded Instance options.
  shieldedInstanceConfigs?: Array<container_getClusterNodePoolNodeConfigShieldedInstanceConfig>;

  // Specifies options for controlling advanced machine features.
  advancedMachineFeatures?: Array<container_getClusterNodePoolNodeConfigAdvancedMachineFeature>;
}

export function container_getClusterNodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "linuxNodeConfigs",
      "Parameters that can be configured on Linux nodes.",
      () => container_getClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "reservationAffinities",
      "The reservation affinity configuration for the node pool.",
      () =>
        container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the nodes are created as preemptible VM instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "List of Kubernetes taints to be applied to each node.",
      () => container_getClusterNodePoolNodeConfigTaint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "loggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gvnics",
      "Enable or disable gvnic in the node pool.",
      () => container_getClusterNodePoolNodeConfigGvnic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      () => container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialStorage",
      "If enabled boot disks are configured with confidential mode.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The metadata key/value pairs assigned to instances in the cluster.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "workloadMetadataConfigs",
      "The workload metadata configuration for this node.",
      () =>
        container_getClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fastSockets",
      "Enable or disable NCCL Fast Socket in the node pool.",
      () => container_getClusterNodePoolNodeConfigFastSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shieldedInstanceConfigs",
      "Shielded Instance options.",
      () =>
        container_getClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "soleTenantConfigs",
      "Node affinity options for sole tenant node pools.",
      () => container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ephemeralStorageLocalSsdConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      () =>
        container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "The number of local SSD disks to be attached to the node.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "confidentialNodes",
      "Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.",
      () => container_getClusterNodePoolNodeConfigConfidentialNode_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advancedMachineFeatures",
      "Specifies options for controlling advanced machine features.",
      () =>
        container_getClusterNodePoolNodeConfigAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "effectiveTaints",
      "List of kubernetes taints applied to each node.",
      () => container_getClusterNodePoolNodeConfigEffectiveTaint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      "The set of Google API scopes to be made available on all of the node VMs.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceLabels",
      "The GCE resource labels (a map of key/value pairs) to be applied to the node pool.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The image type to use for this node. Note that for a given image type, the latest version of it will be used.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "spot",
      "Whether the nodes are created as spot VM instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The list of instance tags applied to all nodes.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localNvmeSsdBlockConfigs",
      "Parameters for raw-block local NVMe SSDs.",
      () =>
        container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sandboxConfigs",
      "Sandbox configuration for this node.",
      () => container_getClusterNodePoolNodeConfigSandboxConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hostMaintenancePolicies",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      () =>
        container_getClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ephemeralStorageConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      () =>
        container_getClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "kubeletConfigs",
      "Node kubelet configs.",
      () => container_getClusterNodePoolNodeConfigKubeletConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gcfsConfigs",
      "GCFS configuration for this node.",
      () => container_getClusterNodePoolNodeConfigGcfsConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
