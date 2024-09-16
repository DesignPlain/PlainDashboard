import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes,
} from './container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting';
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes,
} from './container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement';
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig_GetTypes,
} from './container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig';

export interface container_getClusterClusterAutoscalingAutoProvisioningDefault {
  // Specifies the upgrade settings for NAP created node pools
  upgradeSettings?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting>;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  bootDiskKmsKey?: string;

  // Type of the disk attached to each node.
  diskType?: string;

  // NodeManagement configuration for this NodePool.
  managements?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  minCpuPlatform?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  serviceAccount?: string;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  diskSize?: number;

  // The default image type used by NAP once a new node pool is being created.
  imageType?: string;

  // Scopes that are used by NAP when creating node pools.
  oauthScopes?: Array<string>;

  // Shielded Instance options.
  shieldedInstanceConfigs?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig>;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceAccount',
      'The Google Cloud Platform Service Account to be used by the node VMs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'diskSize',
      'Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'imageType',
      'The default image type used by NAP once a new node pool is being created.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'oauthScopes',
      'Scopes that are used by NAP when creating node pools.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'diskType',
      'Type of the disk attached to each node.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'minCpuPlatform',
      'Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'managements',
      'NodeManagement configuration for this NodePool.',
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'shieldedInstanceConfigs',
      'Shielded Instance options.',
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'upgradeSettings',
      'Specifies the upgrade settings for NAP created node pools',
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bootDiskKmsKey',
      'The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.',
      () => [],
      true,
      false,
    ),
  ];
}
