import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig,
  Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig";
import {
  Container_NodePoolNodeConfigTaint,
  Container_NodePoolNodeConfigTaint_GetTypes,
} from "./Container_NodePoolNodeConfigTaint";
import {
  Container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig,
  Container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./Container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import {
  Container_NodePoolNodeConfigConfidentialNodes,
  Container_NodePoolNodeConfigConfidentialNodes_GetTypes,
} from "./Container_NodePoolNodeConfigConfidentialNodes";
import {
  Container_NodePoolNodeConfigAdvancedMachineFeatures,
  Container_NodePoolNodeConfigAdvancedMachineFeatures_GetTypes,
} from "./Container_NodePoolNodeConfigAdvancedMachineFeatures";
import {
  Container_NodePoolNodeConfigSandboxConfig,
  Container_NodePoolNodeConfigSandboxConfig_GetTypes,
} from "./Container_NodePoolNodeConfigSandboxConfig";
import {
  Container_NodePoolNodeConfigGcfsConfig,
  Container_NodePoolNodeConfigGcfsConfig_GetTypes,
} from "./Container_NodePoolNodeConfigGcfsConfig";
import {
  Container_NodePoolNodeConfigKubeletConfig,
  Container_NodePoolNodeConfigKubeletConfig_GetTypes,
} from "./Container_NodePoolNodeConfigKubeletConfig";
import {
  Container_NodePoolNodeConfigGuestAccelerator,
  Container_NodePoolNodeConfigGuestAccelerator_GetTypes,
} from "./Container_NodePoolNodeConfigGuestAccelerator";
import {
  Container_NodePoolNodeConfigSoleTenantConfig,
  Container_NodePoolNodeConfigSoleTenantConfig_GetTypes,
} from "./Container_NodePoolNodeConfigSoleTenantConfig";
import {
  Container_NodePoolNodeConfigWorkloadMetadataConfig,
  Container_NodePoolNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./Container_NodePoolNodeConfigWorkloadMetadataConfig";
import {
  Container_NodePoolNodeConfigFastSocket,
  Container_NodePoolNodeConfigFastSocket_GetTypes,
} from "./Container_NodePoolNodeConfigFastSocket";
import {
  Container_NodePoolNodeConfigGvnic,
  Container_NodePoolNodeConfigGvnic_GetTypes,
} from "./Container_NodePoolNodeConfigGvnic";
import {
  Container_NodePoolNodeConfigReservationAffinity,
  Container_NodePoolNodeConfigReservationAffinity_GetTypes,
} from "./Container_NodePoolNodeConfigReservationAffinity";
import {
  Container_NodePoolNodeConfigHostMaintenancePolicy,
  Container_NodePoolNodeConfigHostMaintenancePolicy_GetTypes,
} from "./Container_NodePoolNodeConfigHostMaintenancePolicy";
import {
  Container_NodePoolNodeConfigEphemeralStorageConfig,
  Container_NodePoolNodeConfigEphemeralStorageConfig_GetTypes,
} from "./Container_NodePoolNodeConfigEphemeralStorageConfig";
import {
  Container_NodePoolNodeConfigShieldedInstanceConfig,
  Container_NodePoolNodeConfigShieldedInstanceConfig_GetTypes,
} from "./Container_NodePoolNodeConfigShieldedInstanceConfig";
import {
  Container_NodePoolNodeConfigLinuxNodeConfig,
  Container_NodePoolNodeConfigLinuxNodeConfig_GetTypes,
} from "./Container_NodePoolNodeConfigLinuxNodeConfig";
import {
  Container_NodePoolNodeConfigEffectiveTaint,
  Container_NodePoolNodeConfigEffectiveTaint_GetTypes,
} from "./Container_NodePoolNodeConfigEffectiveTaint";

export interface Container_NodePoolNodeConfig {
  // List of Kubernetes taints to be applied to each node.
  Taints?: Array<Container_NodePoolNodeConfigTaint>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageConfig?: Container_NodePoolNodeConfigEphemeralStorageConfig;

  // GCFS configuration for this node.
  GcfsConfig?: Container_NodePoolNodeConfigGcfsConfig;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;

  // The metadata key/value pairs assigned to instances in the cluster.
  Metadata?: Map<string, string>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  MinCpuPlatform?: string;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  ResourceLabels?: Map<string, string>;

  // Shielded Instance options.
  ShieldedInstanceConfig?: Container_NodePoolNodeConfigShieldedInstanceConfig;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageLocalSsdConfig?: Container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig;

  // Enable or disable NCCL Fast Socket in the node pool.
  FastSocket?: Container_NodePoolNodeConfigFastSocket;

  // Node kubelet configs.
  KubeletConfig?: Container_NodePoolNodeConfigKubeletConfig;

  // Whether the nodes are created as preemptible VM instances.
  Preemptible?: boolean;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // The list of instance tags applied to all nodes.
  Tags?: Array<string>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSizeGb?: number;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  DiskType?: string;

  // The number of local SSD disks to be attached to the node.
  LocalSsdCount?: number;

  // Configuration for Confidential Nodes feature. Structure is documented below.
  ConfidentialNodes?: Container_NodePoolNodeConfigConfidentialNodes;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<Container_NodePoolNodeConfigGuestAccelerator>;

  // Enable or disable gvnic in the node pool.
  Gvnic?: Container_NodePoolNodeConfigGvnic;

  // The name of a Google Compute Engine machine type.
  MachineType?: string;

  // Node affinity options for sole tenant node pools.
  SoleTenantConfig?: Container_NodePoolNodeConfigSoleTenantConfig;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, InputType.String>;

  // Sandbox configuration for this node.
  SandboxConfig?: Container_NodePoolNodeConfigSandboxConfig;

  // Specifies options for controlling advanced machine features.
  AdvancedMachineFeatures?: Container_NodePoolNodeConfigAdvancedMachineFeatures;

  // Parameters that can be configured on Linux nodes.
  LinuxNodeConfig?: Container_NodePoolNodeConfigLinuxNodeConfig;

  // Parameters for raw-block local NVMe SSDs.
  LocalNvmeSsdBlockConfig?: Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  NodeGroup?: string;

  // The reservation affinity configuration for the node pool.
  ReservationAffinity?: Container_NodePoolNodeConfigReservationAffinity;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // If enabled boot disks are configured with confidential mode.
  EnableConfidentialStorage?: boolean;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicy?: Container_NodePoolNodeConfigHostMaintenancePolicy;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  Labels?: Map<string, string>;

  // The set of Google API scopes to be made available on all of the node VMs.
  OauthScopes?: Array<string>;

  // Whether the nodes are created as spot VM instances.
  Spot?: boolean;

  // The workload metadata configuration for this node.
  WorkloadMetadataConfig?: Container_NodePoolNodeConfigWorkloadMetadataConfig;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<Container_NodePoolNodeConfigEffectiveTaint>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  ImageType?: string;
}

export function Container_NodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Taints",
      "List of Kubernetes taints to be applied to each node.",
      Container_NodePoolNodeConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FastSocket",
      "Enable or disable NCCL Fast Socket in the node pool.",
      Container_NodePoolNodeConfigFastSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfidentialNodes",
      "Configuration for Confidential Nodes feature. Structure is documented below.",
      Container_NodePoolNodeConfigConfidentialNodes_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Spot",
      "Whether the nodes are created as spot VM instances.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The image type to use for this node. Note that for a given image type, the latest version of it will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceLabels",
      "The GCE resource labels (a map of key/value pairs) to be applied to the node pool.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GuestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      Container_NodePoolNodeConfigGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HostMaintenancePolicy",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      Container_NodePoolNodeConfigHostMaintenancePolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LocalSsdCount",
      "The number of local SSD disks to be attached to the node.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gvnic",
      "Enable or disable gvnic in the node pool.",
      Container_NodePoolNodeConfigGvnic_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "BootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EffectiveTaints",
      "List of kubernetes taints applied to each node.",
      Container_NodePoolNodeConfigEffectiveTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LoggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "The metadata key/value pairs assigned to instances in the cluster.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WorkloadMetadataConfig",
      "The workload metadata configuration for this node.",
      Container_NodePoolNodeConfigWorkloadMetadataConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SandboxConfig",
      "Sandbox configuration for this node.",
      Container_NodePoolNodeConfigSandboxConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LocalNvmeSsdBlockConfig",
      "Parameters for raw-block local NVMe SSDs.",
      Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialStorage",
      "If enabled boot disks are configured with confidential mode.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      "The set of Google API scopes to be made available on all of the node VMs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The list of instance tags applied to all nodes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReservationAffinity",
      "The reservation affinity configuration for the node pool.",
      Container_NodePoolNodeConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "Shielded Instance options.",
      Container_NodePoolNodeConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AdvancedMachineFeatures",
      "Specifies options for controlling advanced machine features.",
      Container_NodePoolNodeConfigAdvancedMachineFeatures_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LinuxNodeConfig",
      "Parameters that can be configured on Linux nodes.",
      Container_NodePoolNodeConfigLinuxNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Whether the nodes are created as preemptible VM instances.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoleTenantConfig",
      "Node affinity options for sole tenant node pools.",
      Container_NodePoolNodeConfigSoleTenantConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EphemeralStorageConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_NodePoolNodeConfigEphemeralStorageConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcfsConfig",
      "GCFS configuration for this node.",
      Container_NodePoolNodeConfigGcfsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EphemeralStorageLocalSsdConfig",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_NodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KubeletConfig",
      "Node kubelet configs.",
      Container_NodePoolNodeConfigKubeletConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
