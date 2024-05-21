import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_NodePoolNodeConfigEffectiveTaint,
  container_NodePoolNodeConfigEffectiveTaint_GetTypes,
} from "./container_NodePoolNodeConfigEffectiveTaint";
import {
  container_NodePoolNodeConfigTaint,
  container_NodePoolNodeConfigTaint_GetTypes,
} from "./container_NodePoolNodeConfigTaint";
import {
  container_NodePoolNodeConfigReservationAffinity,
  container_NodePoolNodeConfigReservationAffinity_GetTypes,
} from "./container_NodePoolNodeConfigReservationAffinity";
import {
  container_NodePoolNodeConfigLinuxNodeConfig,
  container_NodePoolNodeConfigLinuxNodeConfig_GetTypes,
} from "./container_NodePoolNodeConfigLinuxNodeConfig";
import {
  container_NodePoolNodeConfigEphemeralStorageConfig,
  container_NodePoolNodeConfigEphemeralStorageConfig_GetTypes,
} from "./container_NodePoolNodeConfigEphemeralStorageConfig";
import {
  container_NodePoolNodeConfigLocalNvmeSsdBlockConfig,
  container_NodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./container_NodePoolNodeConfigLocalNvmeSsdBlockConfig";
import {
  container_NodePoolNodeConfigKubeletConfig,
  container_NodePoolNodeConfigKubeletConfig_GetTypes,
} from "./container_NodePoolNodeConfigKubeletConfig";
import {
  container_NodePoolNodeConfigWorkloadMetadataConfig,
  container_NodePoolNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./container_NodePoolNodeConfigWorkloadMetadataConfig";
import {
  container_NodePoolNodeConfigSandboxConfig,
  container_NodePoolNodeConfigSandboxConfig_GetTypes,
} from "./container_NodePoolNodeConfigSandboxConfig";
import {
  container_NodePoolNodeConfigGuestAccelerator,
  container_NodePoolNodeConfigGuestAccelerator_GetTypes,
} from "./container_NodePoolNodeConfigGuestAccelerator";
import {
  container_NodePoolNodeConfigGvnic,
  container_NodePoolNodeConfigGvnic_GetTypes,
} from "./container_NodePoolNodeConfigGvnic";
import {
  container_NodePoolNodeConfigHostMaintenancePolicy,
  container_NodePoolNodeConfigHostMaintenancePolicy_GetTypes,
} from "./container_NodePoolNodeConfigHostMaintenancePolicy";
import {
  container_NodePoolNodeConfigShieldedInstanceConfig,
  container_NodePoolNodeConfigShieldedInstanceConfig_GetTypes,
} from "./container_NodePoolNodeConfigShieldedInstanceConfig";
import {
  container_NodePoolNodeConfigConfidentialNodes,
  container_NodePoolNodeConfigConfidentialNodes_GetTypes,
} from "./container_NodePoolNodeConfigConfidentialNodes";
import {
  container_NodePoolNodeConfigGcfsConfig,
  container_NodePoolNodeConfigGcfsConfig_GetTypes,
} from "./container_NodePoolNodeConfigGcfsConfig";
import {
  container_NodePoolNodeConfigFastSocket,
  container_NodePoolNodeConfigFastSocket_GetTypes,
} from "./container_NodePoolNodeConfigFastSocket";
import {
  container_NodePoolNodeConfigSoleTenantConfig,
  container_NodePoolNodeConfigSoleTenantConfig_GetTypes,
} from "./container_NodePoolNodeConfigSoleTenantConfig";
import {
  container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig,
  container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import {
  container_NodePoolNodeConfigAdvancedMachineFeatures,
  container_NodePoolNodeConfigAdvancedMachineFeatures_GetTypes,
} from "./container_NodePoolNodeConfigAdvancedMachineFeatures";

export interface container_NodePoolNodeConfig {
  // The name of a Google Compute Engine machine type.
  machineType?: string;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  minCpuPlatform?: string;

  // GCFS configuration for this node.
  gcfsConfig?: container_NodePoolNodeConfigGcfsConfig;

  // Parameters for raw-block local NVMe SSDs.
  localNvmeSsdBlockConfig?: container_NodePoolNodeConfigLocalNvmeSsdBlockConfig;

  // Node kubelet configs.
  kubeletConfig?: container_NodePoolNodeConfigKubeletConfig;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  loggingVariant?: string;

  // The set of Google API scopes to be made available on all of the node VMs.
  oauthScopes?: Array<string>;

  // If enabled boot disks are configured with confidential mode.
  enableConfidentialStorage?: boolean;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  imageType?: string;

  // List of kubernetes taints applied to each node.
  effectiveTaints?: Array<container_NodePoolNodeConfigEffectiveTaint>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  hostMaintenancePolicy?: container_NodePoolNodeConfigHostMaintenancePolicy;

  // Shielded Instance options.
  shieldedInstanceConfig?: container_NodePoolNodeConfigShieldedInstanceConfig;

  // The list of instance tags applied to all nodes.
  tags?: Array<string>;

  // List of Kubernetes taints to be applied to each node.
  taints?: Array<container_NodePoolNodeConfigTaint>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  diskSizeGb?: number;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  diskType?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  serviceAccount?: string;

  // The workload metadata configuration for this node.
  workloadMetadataConfig?: container_NodePoolNodeConfigWorkloadMetadataConfig;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  labels?: Map<string, string>;

  // Sandbox configuration for this node.
  sandboxConfig?: container_NodePoolNodeConfigSandboxConfig;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  resourceLabels?: Map<string, string>;

  // Whether the nodes are created as preemptible VM instances.
  preemptible?: boolean;

  // The reservation affinity configuration for the node pool.
  reservationAffinity?: container_NodePoolNodeConfigReservationAffinity;

  // Whether the nodes are created as spot VM instances.
  spot?: boolean;

  // Enable or disable NCCL Fast Socket in the node pool.
  fastSocket?: container_NodePoolNodeConfigFastSocket;

  // Node affinity options for sole tenant node pools.
  soleTenantConfig?: container_NodePoolNodeConfigSoleTenantConfig;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  bootDiskKmsKey?: string;

  // Configuration for Confidential Nodes feature. Structure is documented below.
  confidentialNodes?: container_NodePoolNodeConfigConfidentialNodes;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageLocalSsdConfig?: container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig;

  // List of the type and count of accelerator cards attached to the instance.
  guestAccelerators?: Array<container_NodePoolNodeConfigGuestAccelerator>;

  // Enable or disable gvnic in the node pool.
  gvnic?: container_NodePoolNodeConfigGvnic;

  // Parameters that can be configured on Linux nodes.
  linuxNodeConfig?: container_NodePoolNodeConfigLinuxNodeConfig;

  // The number of local SSD disks to be attached to the node.
  localSsdCount?: number;

  // The metadata key/value pairs assigned to instances in the cluster.
  metadata?: Map<string, string>;

  // Specifies options for controlling advanced machine features.
  advancedMachineFeatures?: container_NodePoolNodeConfigAdvancedMachineFeatures;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  ephemeralStorageConfig?: container_NodePoolNodeConfigEphemeralStorageConfig;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  nodeGroup?: string;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;
}

export function container_NodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      container_NodePoolNodeConfigGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "linuxNodeConfig",
      "Parameters that can be configured on Linux nodes.",
      container_NodePoolNodeConfigLinuxNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ephemeralStorageConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      container_NodePoolNodeConfigEphemeralStorageConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "localNvmeSsdBlockConfig",
      "Parameters for raw-block local NVMe SSDs.",
      container_NodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      "The set of Google API scopes to be made available on all of the node VMs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostMaintenancePolicy",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      container_NodePoolNodeConfigHostMaintenancePolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the nodes are created as preemptible VM instances.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ephemeralStorageLocalSsdConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedMachineFeatures",
      "Specifies options for controlling advanced machine features.",
      container_NodePoolNodeConfigAdvancedMachineFeatures_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "List of Kubernetes taints to be applied to each node.",
      container_NodePoolNodeConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubeletConfig",
      "Node kubelet configs.",
      container_NodePoolNodeConfigKubeletConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The list of instance tags applied to all nodes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fastSocket",
      "Enable or disable NCCL Fast Socket in the node pool.",
      container_NodePoolNodeConfigFastSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gvnic",
      "Enable or disable gvnic in the node pool.",
      container_NodePoolNodeConfigGvnic_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confidentialNodes",
      "Configuration for Confidential Nodes feature. Structure is documented below.",
      container_NodePoolNodeConfigConfidentialNodes_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcfsConfig",
      "GCFS configuration for this node.",
      container_NodePoolNodeConfigGcfsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "effectiveTaints",
      "List of kubernetes taints applied to each node.",
      container_NodePoolNodeConfigEffectiveTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workloadMetadataConfig",
      "The workload metadata configuration for this node.",
      container_NodePoolNodeConfigWorkloadMetadataConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sandboxConfig",
      "Sandbox configuration for this node.",
      container_NodePoolNodeConfigSandboxConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceLabels",
      "The GCE resource labels (a map of key/value pairs) to be applied to the node pool.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "soleTenantConfig",
      "Node affinity options for sole tenant node pools.",
      container_NodePoolNodeConfigSoleTenantConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "loggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded Instance options.",
      container_NodePoolNodeConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "reservationAffinity",
      "The reservation affinity configuration for the node pool.",
      container_NodePoolNodeConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialStorage",
      "If enabled boot disks are configured with confidential mode.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "The number of local SSD disks to be attached to the node.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The metadata key/value pairs assigned to instances in the cluster.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The image type to use for this node. Note that for a given image type, the latest version of it will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "spot",
      "Whether the nodes are created as spot VM instances.",
      [],
      false,
      true,
    ),
  ];
}
