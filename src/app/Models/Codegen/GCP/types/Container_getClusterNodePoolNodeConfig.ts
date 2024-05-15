import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolNodeConfigSoleTenantConfig,
  Container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigSoleTenantConfig";
import {
  Container_getClusterNodePoolNodeConfigHostMaintenancePolicy,
  Container_getClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigHostMaintenancePolicy";
import {
  Container_getClusterNodePoolNodeConfigKubeletConfig,
  Container_getClusterNodePoolNodeConfigKubeletConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigKubeletConfig";
import {
  Container_getClusterNodePoolNodeConfigReservationAffinity,
  Container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigReservationAffinity";
import {
  Container_getClusterNodePoolNodeConfigEphemeralStorageConfig,
  Container_getClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigEphemeralStorageConfig";
import {
  Container_getClusterNodePoolNodeConfigSandboxConfig,
  Container_getClusterNodePoolNodeConfigSandboxConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigSandboxConfig";
import {
  Container_getClusterNodePoolNodeConfigWorkloadMetadataConfig,
  Container_getClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigWorkloadMetadataConfig";
import {
  Container_getClusterNodePoolNodeConfigGvnic,
  Container_getClusterNodePoolNodeConfigGvnic_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigGvnic";
import {
  Container_getClusterNodePoolNodeConfigAdvancedMachineFeature,
  Container_getClusterNodePoolNodeConfigAdvancedMachineFeature_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigAdvancedMachineFeature";
import {
  Container_getClusterNodePoolNodeConfigEffectiveTaint,
  Container_getClusterNodePoolNodeConfigEffectiveTaint_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigEffectiveTaint";
import {
  Container_getClusterNodePoolNodeConfigFastSocket,
  Container_getClusterNodePoolNodeConfigFastSocket_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigFastSocket";
import {
  Container_getClusterNodePoolNodeConfigGcfsConfig,
  Container_getClusterNodePoolNodeConfigGcfsConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigGcfsConfig";
import {
  Container_getClusterNodePoolNodeConfigGuestAccelerator,
  Container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigGuestAccelerator";
import {
  Container_getClusterNodePoolNodeConfigTaint,
  Container_getClusterNodePoolNodeConfigTaint_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigTaint";
import {
  Container_getClusterNodePoolNodeConfigLinuxNodeConfig,
  Container_getClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigLinuxNodeConfig";
import {
  Container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig,
  Container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig";
import {
  Container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig,
  Container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig";
import {
  Container_getClusterNodePoolNodeConfigShieldedInstanceConfig,
  Container_getClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigShieldedInstanceConfig";
import {
  Container_getClusterNodePoolNodeConfigConfidentialNode,
  Container_getClusterNodePoolNodeConfigConfidentialNode_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigConfidentialNode";

export interface Container_getClusterNodePoolNodeConfig {
  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;

  // The workload metadata configuration for this node.
  WorkloadMetadataConfigs?: Array<Container_getClusterNodePoolNodeConfigWorkloadMetadataConfig>;

  // Node kubelet configs.
  KubeletConfigs?: Array<Container_getClusterNodePoolNodeConfigKubeletConfig>;

  // The reservation affinity configuration for the node pool.
  ReservationAffinities?: Array<Container_getClusterNodePoolNodeConfigReservationAffinity>;

  // Node affinity options for sole tenant node pools.
  SoleTenantConfigs?: Array<Container_getClusterNodePoolNodeConfigSoleTenantConfig>;

  // Whether the nodes are created as preemptible VM instances.
  Preemptible?: boolean;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, InputType.String>;

  // List of Kubernetes taints to be applied to each node.
  Taints?: Array<Container_getClusterNodePoolNodeConfigTaint>;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  DiskType?: string;

  // The number of local SSD disks to be attached to the node.
  LocalSsdCount?: number;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  MinCpuPlatform?: string;

  // Parameters that can be configured on Linux nodes.
  LinuxNodeConfigs?: Array<Container_getClusterNodePoolNodeConfigLinuxNodeConfig>;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  ResourceLabels?: Map<string, string>;

  // If enabled boot disks are configured with confidential mode.
  EnableConfidentialStorage?: boolean;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageLocalSsdConfigs?: Array<Container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig>;

  // Enable or disable gvnic in the node pool.
  Gvnics?: Array<Container_getClusterNodePoolNodeConfigGvnic>;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageConfigs?: Array<Container_getClusterNodePoolNodeConfigEphemeralStorageConfig>;

  // The name of a Google Compute Engine machine type.
  MachineType?: string;

  // Specifies options for controlling advanced machine features.
  AdvancedMachineFeatures?: Array<Container_getClusterNodePoolNodeConfigAdvancedMachineFeature>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSizeGb?: number;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<Container_getClusterNodePoolNodeConfigEffectiveTaint>;

  // Parameters for raw-block local NVMe SSDs.
  LocalNvmeSsdBlockConfigs?: Array<Container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig>;

  // The metadata key/value pairs assigned to instances in the cluster.
  Metadata?: Map<string, string>;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<Container_getClusterNodePoolNodeConfigShieldedInstanceConfig>;

  // Enable or disable NCCL Fast Socket in the node pool.
  FastSockets?: Array<Container_getClusterNodePoolNodeConfigFastSocket>;

  // GCFS configuration for this node.
  GcfsConfigs?: Array<Container_getClusterNodePoolNodeConfigGcfsConfig>;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  Labels?: Map<string, string>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  ConfidentialNodes?: Array<Container_getClusterNodePoolNodeConfigConfidentialNode>;

  // Sandbox configuration for this node.
  SandboxConfigs?: Array<Container_getClusterNodePoolNodeConfigSandboxConfig>;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  NodeGroup?: string;

  // The set of Google API scopes to be made available on all of the node VMs.
  OauthScopes?: Array<string>;

  // Whether the nodes are created as spot VM instances.
  Spot?: boolean;

  // The list of instance tags applied to all nodes.
  Tags?: Array<string>;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<Container_getClusterNodePoolNodeConfigGuestAccelerator>;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicies?: Array<Container_getClusterNodePoolNodeConfigHostMaintenancePolicy>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  ImageType?: string;
}

export function Container_getClusterNodePoolNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LinuxNodeConfigs",
      "Parameters that can be configured on Linux nodes.",
      Container_getClusterNodePoolNodeConfigLinuxNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EphemeralStorageLocalSsdConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_getClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GcfsConfigs",
      "GCFS configuration for this node.",
      Container_getClusterNodePoolNodeConfigGcfsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Spot",
      "Whether the nodes are created as spot VM instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WorkloadMetadataConfigs",
      "The workload metadata configuration for this node.",
      Container_getClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KubeletConfigs",
      "Node kubelet configs.",
      Container_getClusterNodePoolNodeConfigKubeletConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SoleTenantConfigs",
      "Node affinity options for sole tenant node pools.",
      Container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Whether the nodes are created as preemptible VM instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceLabels",
      "The GCE resource labels (a map of key/value pairs) to be applied to the node pool.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialStorage",
      "If enabled boot disks are configured with confidential mode.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SandboxConfigs",
      "Sandbox configuration for this node.",
      Container_getClusterNodePoolNodeConfigSandboxConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LoggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdvancedMachineFeatures",
      "Specifies options for controlling advanced machine features.",
      Container_getClusterNodePoolNodeConfigAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "The metadata key/value pairs assigned to instances in the cluster.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GuestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      Container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The image type to use for this node. Note that for a given image type, the latest version of it will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LocalSsdCount",
      "The number of local SSD disks to be attached to the node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EffectiveTaints",
      "List of kubernetes taints applied to each node.",
      Container_getClusterNodePoolNodeConfigEffectiveTaint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FastSockets",
      "Enable or disable NCCL Fast Socket in the node pool.",
      Container_getClusterNodePoolNodeConfigFastSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodeGroup",
      "Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ReservationAffinities",
      "The reservation affinity configuration for the node pool.",
      Container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ShieldedInstanceConfigs",
      "Shielded Instance options.",
      Container_getClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalNvmeSsdBlockConfigs",
      "Parameters for raw-block local NVMe SSDs.",
      Container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      "The set of Google API scopes to be made available on all of the node VMs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Gvnics",
      "Enable or disable gvnic in the node pool.",
      Container_getClusterNodePoolNodeConfigGvnic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EphemeralStorageConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_getClusterNodePoolNodeConfigEphemeralStorageConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ConfidentialNodes",
      "Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.",
      Container_getClusterNodePoolNodeConfigConfidentialNode_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HostMaintenancePolicies",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      Container_getClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Taints",
      "List of Kubernetes taints to be applied to each node.",
      Container_getClusterNodePoolNodeConfigTaint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The list of instance tags applied to all nodes.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
