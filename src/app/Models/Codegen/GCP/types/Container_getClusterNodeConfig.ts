import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodeConfigEphemeralStorageLocalSsdConfig,
  Container_getClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes,
} from "./Container_getClusterNodeConfigEphemeralStorageLocalSsdConfig";
import {
  Container_getClusterNodeConfigKubeletConfig,
  Container_getClusterNodeConfigKubeletConfig_GetTypes,
} from "./Container_getClusterNodeConfigKubeletConfig";
import {
  Container_getClusterNodeConfigLinuxNodeConfig,
  Container_getClusterNodeConfigLinuxNodeConfig_GetTypes,
} from "./Container_getClusterNodeConfigLinuxNodeConfig";
import {
  Container_getClusterNodeConfigWorkloadMetadataConfig,
  Container_getClusterNodeConfigWorkloadMetadataConfig_GetTypes,
} from "./Container_getClusterNodeConfigWorkloadMetadataConfig";
import {
  Container_getClusterNodeConfigHostMaintenancePolicy,
  Container_getClusterNodeConfigHostMaintenancePolicy_GetTypes,
} from "./Container_getClusterNodeConfigHostMaintenancePolicy";
import {
  Container_getClusterNodeConfigEphemeralStorageConfig,
  Container_getClusterNodeConfigEphemeralStorageConfig_GetTypes,
} from "./Container_getClusterNodeConfigEphemeralStorageConfig";
import {
  Container_getClusterNodeConfigGcfsConfig,
  Container_getClusterNodeConfigGcfsConfig_GetTypes,
} from "./Container_getClusterNodeConfigGcfsConfig";
import {
  Container_getClusterNodeConfigFastSocket,
  Container_getClusterNodeConfigFastSocket_GetTypes,
} from "./Container_getClusterNodeConfigFastSocket";
import {
  Container_getClusterNodeConfigGuestAccelerator,
  Container_getClusterNodeConfigGuestAccelerator_GetTypes,
} from "./Container_getClusterNodeConfigGuestAccelerator";
import {
  Container_getClusterNodeConfigAdvancedMachineFeature,
  Container_getClusterNodeConfigAdvancedMachineFeature_GetTypes,
} from "./Container_getClusterNodeConfigAdvancedMachineFeature";
import {
  Container_getClusterNodeConfigTaint,
  Container_getClusterNodeConfigTaint_GetTypes,
} from "./Container_getClusterNodeConfigTaint";
import {
  Container_getClusterNodeConfigLocalNvmeSsdBlockConfig,
  Container_getClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes,
} from "./Container_getClusterNodeConfigLocalNvmeSsdBlockConfig";
import {
  Container_getClusterNodeConfigEffectiveTaint,
  Container_getClusterNodeConfigEffectiveTaint_GetTypes,
} from "./Container_getClusterNodeConfigEffectiveTaint";
import {
  Container_getClusterNodeConfigReservationAffinity,
  Container_getClusterNodeConfigReservationAffinity_GetTypes,
} from "./Container_getClusterNodeConfigReservationAffinity";
import {
  Container_getClusterNodeConfigSoleTenantConfig,
  Container_getClusterNodeConfigSoleTenantConfig_GetTypes,
} from "./Container_getClusterNodeConfigSoleTenantConfig";
import {
  Container_getClusterNodeConfigSandboxConfig,
  Container_getClusterNodeConfigSandboxConfig_GetTypes,
} from "./Container_getClusterNodeConfigSandboxConfig";
import {
  Container_getClusterNodeConfigGvnic,
  Container_getClusterNodeConfigGvnic_GetTypes,
} from "./Container_getClusterNodeConfigGvnic";
import {
  Container_getClusterNodeConfigConfidentialNode,
  Container_getClusterNodeConfigConfidentialNode_GetTypes,
} from "./Container_getClusterNodeConfigConfidentialNode";
import {
  Container_getClusterNodeConfigShieldedInstanceConfig,
  Container_getClusterNodeConfigShieldedInstanceConfig_GetTypes,
} from "./Container_getClusterNodeConfigShieldedInstanceConfig";

export interface Container_getClusterNodeConfig {
  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageConfigs?: Array<Container_getClusterNodeConfigEphemeralStorageConfig>;

  // Enable or disable NCCL Fast Socket in the node pool.
  FastSockets?: Array<Container_getClusterNodeConfigFastSocket>;

  // Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  NodeGroup?: string;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, InputType.String>;

  // Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
  ConfidentialNodes?: Array<Container_getClusterNodeConfigConfidentialNode>;

  // GCFS configuration for this node.
  GcfsConfigs?: Array<Container_getClusterNodeConfigGcfsConfig>;

  // The name of a Google Compute Engine machine type.
  MachineType?: string;

  // The metadata key/value pairs assigned to instances in the cluster.
  Metadata?: Map<string, string>;

  // The reservation affinity configuration for the node pool.
  ReservationAffinities?: Array<Container_getClusterNodeConfigReservationAffinity>;

  // Node affinity options for sole tenant node pools.
  SoleTenantConfigs?: Array<Container_getClusterNodeConfigSoleTenantConfig>;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<Container_getClusterNodeConfigShieldedInstanceConfig>;

  // Specifies options for controlling advanced machine features.
  AdvancedMachineFeatures?: Array<Container_getClusterNodeConfigAdvancedMachineFeature>;

  // If enabled boot disks are configured with confidential mode.
  EnableConfidentialStorage?: boolean;

  // Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
  EphemeralStorageLocalSsdConfigs?: Array<Container_getClusterNodeConfigEphemeralStorageLocalSsdConfig>;

  // List of the type and count of accelerator cards attached to the instance.
  GuestAccelerators?: Array<Container_getClusterNodeConfigGuestAccelerator>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;

  // Sandbox configuration for this node.
  SandboxConfigs?: Array<Container_getClusterNodeConfigSandboxConfig>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSizeGb?: number;

  // Enable or disable gvnic in the node pool.
  Gvnics?: Array<Container_getClusterNodeConfigGvnic>;

  // Node kubelet configs.
  KubeletConfigs?: Array<Container_getClusterNodeConfigKubeletConfig>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  MinCpuPlatform?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // Parameters that can be configured on Linux nodes.
  LinuxNodeConfigs?: Array<Container_getClusterNodeConfigLinuxNodeConfig>;

  // The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  ResourceLabels?: Map<string, string>;

  // The list of instance tags applied to all nodes.
  Tags?: Array<string>;

  // List of Kubernetes taints to be applied to each node.
  Taints?: Array<Container_getClusterNodeConfigTaint>;

  // Parameters for raw-block local NVMe SSDs.
  LocalNvmeSsdBlockConfigs?: Array<Container_getClusterNodeConfigLocalNvmeSsdBlockConfig>;

  // The number of local SSD disks to be attached to the node.
  LocalSsdCount?: number;

  // The set of Google API scopes to be made available on all of the node VMs.
  OauthScopes?: Array<string>;

  // List of kubernetes taints applied to each node.
  EffectiveTaints?: Array<Container_getClusterNodeConfigEffectiveTaint>;

  // Whether the nodes are created as spot VM instances.
  Spot?: boolean;

  // The workload metadata configuration for this node.
  WorkloadMetadataConfigs?: Array<Container_getClusterNodeConfigWorkloadMetadataConfig>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  DiskType?: string;

  // The maintenance policy for the hosts on which the GKE VMs run on.
  HostMaintenancePolicies?: Array<Container_getClusterNodeConfigHostMaintenancePolicy>;

  // The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  ImageType?: string;

  // The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  Labels?: Map<string, string>;

  // Whether the nodes are created as preemptible VM instances.
  Preemptible?: boolean;
}

export function Container_getClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LinuxNodeConfigs",
      "Parameters that can be configured on Linux nodes.",
      Container_getClusterNodeConfigLinuxNodeConfig_GetTypes(),
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
      InputType.Array,
      "EphemeralStorageConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_getClusterNodeConfigEphemeralStorageConfig_GetTypes(),
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
      "GcfsConfigs",
      "GCFS configuration for this node.",
      Container_getClusterNodeConfigGcfsConfig_GetTypes(),
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
      Container_getClusterNodeConfigAdvancedMachineFeature_GetTypes(),
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
    new DynamicUIProps(
      InputType.Array,
      "HostMaintenancePolicies",
      "The maintenance policy for the hosts on which the GKE VMs run on.",
      Container_getClusterNodeConfigHostMaintenancePolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ShieldedInstanceConfigs",
      "Shielded Instance options.",
      Container_getClusterNodeConfigShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EphemeralStorageLocalSsdConfigs",
      "Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.",
      Container_getClusterNodeConfigEphemeralStorageLocalSsdConfig_GetTypes(),
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
      "Preemptible",
      "Whether the nodes are created as preemptible VM instances.",
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
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd",
      [],
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
      "SoleTenantConfigs",
      "Node affinity options for sole tenant node pools.",
      Container_getClusterNodeConfigSoleTenantConfig_GetTypes(),
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
      InputType.Array,
      "Gvnics",
      "Enable or disable gvnic in the node pool.",
      Container_getClusterNodeConfigGvnic_GetTypes(),
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
      Container_getClusterNodeConfigEffectiveTaint_GetTypes(),
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
      InputType.Map,
      "Labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.",
      InputType_Map_GetTypes(),
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
      "ConfidentialNodes",
      "Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.",
      Container_getClusterNodeConfigConfidentialNode_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ReservationAffinities",
      "The reservation affinity configuration for the node pool.",
      Container_getClusterNodeConfigReservationAffinity_GetTypes(),
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
      InputType.Array,
      "Taints",
      "List of Kubernetes taints to be applied to each node.",
      Container_getClusterNodeConfigTaint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalNvmeSsdBlockConfigs",
      "Parameters for raw-block local NVMe SSDs.",
      Container_getClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WorkloadMetadataConfigs",
      "The workload metadata configuration for this node.",
      Container_getClusterNodeConfigWorkloadMetadataConfig_GetTypes(),
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
      InputType.Array,
      "KubeletConfigs",
      "Node kubelet configs.",
      Container_getClusterNodeConfigKubeletConfig_GetTypes(),
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
      InputType.Array,
      "OauthScopes",
      "The set of Google API scopes to be made available on all of the node VMs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FastSockets",
      "Enable or disable NCCL Fast Socket in the node pool.",
      Container_getClusterNodeConfigFastSocket_GetTypes(),
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
      InputType.Array,
      "GuestAccelerators",
      "List of the type and count of accelerator cards attached to the instance.",
      Container_getClusterNodeConfigGuestAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SandboxConfigs",
      "Sandbox configuration for this node.",
      Container_getClusterNodeConfigSandboxConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
