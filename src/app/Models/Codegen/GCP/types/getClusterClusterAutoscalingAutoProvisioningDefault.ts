import { getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting } from "./getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting";
import { getClusterClusterAutoscalingAutoProvisioningDefaultManagement } from "./getClusterClusterAutoscalingAutoProvisioningDefaultManagement";
import { getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig } from "./getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig";

export interface getClusterClusterAutoscalingAutoProvisioningDefault {
  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // Type of the disk attached to each node.
  DiskType?: string;

  // Specifies the upgrade settings for NAP created node pools
  UpgradeSettings?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting>;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSize?: number;

  // The default image type used by NAP once a new node pool is being created.
  ImageType?: string;

  // NodeManagement configuration for this NodePool.
  Managements?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultManagement>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  MinCpuPlatform?: string;

  // Scopes that are used by NAP when creating node pools.
  OauthScopes?: Array<string>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig>;
}
