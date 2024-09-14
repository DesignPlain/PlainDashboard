import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterNodeConfigEphemeralStorageConfig,
  container_getClusterNodeConfigEphemeralStorageConfig_GetTypes,
} from "./container_getClusterNodeConfigEphemeralStorageConfig";
import {
  container_getClusterNodeConfigHostMaintenancePolicy,
  container_getClusterNodeConfigHostMaintenancePolicy_GetTypes,
} from "./container_getClusterNodeConfigHostMaintenancePolicy";
import {
  container_getClusterNodeConfigTaint,
  container_getClusterNodeConfigTaint_GetTypes,
} from "./container_getClusterNodeConfigTaint";
import {
  container_getClusterNodeConfigSandboxConfig,
  container_getClusterNodeConfigSandboxConfig_GetTypes,
} from "./container_getClusterNodeConfigSandboxConfig";
import {
  container_getClusterNodeConfigWorkloadMetadataConfig,
  container_getClusterNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./container_getClusterNodeConfigWorkloadMetadataConfig";
import {
  container_getClusterNodeConfigReservationAffinity,
  container_getClusterNodeConfigReservationAffinity_GetTypes,
} from "./container_getClusterNodeConfigReservationAffinity";
import {
  container_getClusterNodeConfigGcfsConfig,
  container_getClusterNodeConfigGcfsConfig_GetTypes,
} from "./container_getClusterNodeConfigGcfsConfig";
import {
  container_getClusterNodeConfigLinuxNodeConfig,
  container_getClusterNodeConfigLinuxNodeConfig_GetTypes,
} from "./container_getClusterNodeConfigLinuxNodeConfig";
import {
  container_getClusterNodeConfigEffectiveTaint,
  container_getClusterNodeConfigEffectiveTaint_GetTypes,
} from "./container_getClusterNodeConfigEffectiveTaint";
import {
  container_getClusterNodeConfigFastSocket,
  container_getClusterNodeConfigFastSocket_GetTypes,
} from "./container_getClusterNodeConfigFastSocket";
import {
  container_getClusterNodeConfigLocalNvmeSsdBlockConfig,
  container_getClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./container_getClusterNodeConfigLocalNvmeSsdBlockConfig";
import {
  container_getClusterNodeConfigKubeletConfig,
  container_getClusterNodeConfigKubeletConfig_GetTypes,
} from "./container_getClusterNodeConfigKubeletConfig";
import {
  container_getClusterNodeConfigGvnic,
  container_getClusterNodeConfigGvnic_GetTypes,
} from "./container_getClusterNodeConfigGvnic";
import {
  container_getClusterNodeConfigConfidentialNode,
  container_getClusterNodeConfigConfidentialNode_GetTypes,
} from "./container_getClusterNodeConfigConfidentialNode";
import {
  container_getClusterNodeConfigShieldedInstanceConfig,
  container_getClusterNodeConfigShieldedInstanceConfig_GetTypes,
} from "./container_getClusterNodeConfigShieldedInstanceConfig";
import {
  container_getClusterNodeConfigEphemeralStorageLocalSsdConfig,
  container_getClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./container_getClusterNodeConfigEphemeralStorageLocalSsdConfig";
import {
  container_getClusterNodeConfigAdvancedMachineFeature,
  container_getClusterNodeConfigAdvancedMachineFeature_GetTypes,
} from "./container_getClusterNodeConfigAdvancedMachineFeature";
import {
  container_getClusterNodeConfigSoleTenantConfig,
  container_getClusterNodeConfigSoleTenantConfig_GetTypes,
} from "./container_getClusterNodeConfigSoleTenantConfig";
import {
  container_getClusterNodeConfigGuestAccelerator,
  container_getClusterNodeConfigGuestAccelerator_GetTypes,
} from "./container_getClusterNodeConfigGuestAccelerator";

export interface container_getClusterNodeConfig {
  // If enabled boot disks are configured with confidential mode.
  enableConfidentialStorage?: boolean;

  // Parameters that can be configured on Linux nodes.
  linuxNodeConfigs?: Array<container_getClusterNodeConfigLinuxNodeConfig>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  minCpuPlatform?: string;

  // The list of instance tags applied to all nodes.
  tags?: Array<string>;

  // Specifies options for controlling advanced machine features.
  advancedMachineFeatures?: Array<container_getClusterNodeConfigAdvancedMachineFeature>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  imageType?: string;

  // Node kubelet configs.
  kubeletConfigs?: Array<container_getClusterNodeConfigKubeletConfig>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  bootDiskKmsKey?: string;

  // Node affinity options for sole tenant node pools.
  soleTenantConfigs?: Array<container_getClusterNodeConfigSoleTenantConfig>;

  // List of Kubernetes taints to be applied to each node.
  taints?: Array<container_getClusterNodeConfigTaint>;

  // List of the type and count of accelerator cards attached to the instance.
  guestAccelerators?: Array<container_getClusterNodeConfigGuestAccelerator>;

  // The name of a Google Compute Engine machine type.
  machineType?: string;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  nodeGroup?: string;

  // The set of Google API scopes to be made available on all of the node VMs.
  oauthScopes?: Array<string>;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  resourceLabels?: Map<string, string>;

  // Sandbox configuration for this node.
  sandboxConfigs?: Array<container_getClusterNodeConfigSandboxConfig>;

  // The workload metadata configuration for this node.
  workloadMetadataConfigs?: Array<container_getClusterNodeConfigWorkloadMetadataConfig>;

  // The number of local SSD disks to be attached to the node.
  localSsdCount?: number;

  // The metadata key/value pairs assigned to instances in the cluster.
  metadata?: Map<string, string>;

  // Shielded Instance options.
  shieldedInstanceConfigs?: Array<container_getClusterNodeConfigShieldedInstanceConfig>;

  // List of kubernetes taints applied to each node.
  effectiveTaints?: Array<container_getClusterNodeConfigEffectiveTaint>;

  // Enable or disable NCCL Fast Socket in the node pool.
  fastSockets?: Array<container_getClusterNodeConfigFastSocket>;

  // Enable or disable gvnic in the node pool.
  gvnics?: Array<container_getClusterNodeConfigGvnic>;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;

  // Whether the nodes are created as spot VM instances.
  spot?: boolean;

  // The reservation affinity configuration for the node pool.
  reservationAffinities?: Array<container_getClusterNodeConfigReservationAffinity>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  serviceAccount?: string;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  confidentialNodes?: Array<container_getClusterNodeConfigConfidentialNode>;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  diskType?: string;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageConfigs?: Array<container_getClusterNodeConfigEphemeralStorageConfig>;

  // GCFS configuration for this node.
  gcfsConfigs?: Array<container_getClusterNodeConfigGcfsConfig>;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  labels?: Map<string, string>;

  // Parameters for raw-block local NVMe SSDs.
  localNvmeSsdBlockConfigs?: Array<container_getClusterNodeConfigLocalNvmeSsdBlockConfig>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  diskSizeGb?: number;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageLocalSsdConfigs?: Array<container_getClusterNodeConfigEphemeralStorageLocalSsdConfig>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  hostMaintenancePolicies?: Array<container_getClusterNodeConfigHostMaintenancePolicy>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  loggingVariant?: string;

  // Whether the nodes are created as preemptible VM instances.
  preemptible?: boolean;
}

export function container_getClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "linuxNodeConfigs",
      "Parameters that can be configured on Linux nodes.",
      () => container_getClusterNodeConfigLinuxNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "soleTenantConfigs",
      "Node affinity options for sole tenant node pools.",
      () => container_getClusterNodeConfigSoleTenantConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "List of Kubernetes taints to be applied to each node.",
      () => container_getClusterNodeConfigTaint_GetTypes(),
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
      "resourceLabels",
      "The GCE resource labels (a map of key/value pairs) to be applied to the node pool.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gcfsConfigs",
      "GCFS configuration for this node.",
      () => container_getClusterNodeConfigGcfsConfig_GetTypes(),
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
      InputType.Array,
      "ephemeralStorageConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      () => container_getClusterNodeConfigEphemeralStorageConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hostMaintenancePolicies",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      () => container_getClusterNodeConfigHostMaintenancePolicy_GetTypes(),
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
      InputType.String,
      "serviceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs.",
      () => [],
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
      InputType.Array,
      "gvnics",
      "Enable or disable gvnic in the node pool.",
      () => container_getClusterNodeConfigGvnic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ephemeralStorageLocalSsdConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      () =>
        container_getClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
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
      InputType.String,
      "bootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.",
      () => [],
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
      InputType.Array,
      "shieldedInstanceConfigs",
      "Shielded Instance options.",
      () => container_getClusterNodeConfigShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fastSockets",
      "Enable or disable NCCL Fast Socket in the node pool.",
      () => container_getClusterNodeConfigFastSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "confidentialNodes",
      "Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.",
      () => container_getClusterNodeConfigConfidentialNode_GetTypes(),
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
      InputType.Number,
      "diskSizeGb",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      () => [],
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
      InputType.Bool,
      "enableConfidentialStorage",
      "If enabled boot disks are configured with confidential mode.",
      () => [],
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
      InputType.Map,
      "metadata",
      "The metadata key/value pairs assigned to instances in the cluster.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localNvmeSsdBlockConfigs",
      "Parameters for raw-block local NVMe SSDs.",
      () => container_getClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advancedMachineFeatures",
      "Specifies options for controlling advanced machine features.",
      () => container_getClusterNodeConfigAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      () => container_getClusterNodeConfigGuestAccelerator_GetTypes(),
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
      InputType.Array,
      "kubeletConfigs",
      "Node kubelet configs.",
      () => container_getClusterNodeConfigKubeletConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sandboxConfigs",
      "Sandbox configuration for this node.",
      () => container_getClusterNodeConfigSandboxConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "workloadMetadataConfigs",
      "The workload metadata configuration for this node.",
      () => container_getClusterNodeConfigWorkloadMetadataConfig_GetTypes(),
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
      "effectiveTaints",
      "List of kubernetes taints applied to each node.",
      () => container_getClusterNodeConfigEffectiveTaint_GetTypes(),
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
      "reservationAffinities",
      "The reservation affinity configuration for the node pool.",
      () => container_getClusterNodeConfigReservationAffinity_GetTypes(),
      true,
      false,
    ),
  ];
}
