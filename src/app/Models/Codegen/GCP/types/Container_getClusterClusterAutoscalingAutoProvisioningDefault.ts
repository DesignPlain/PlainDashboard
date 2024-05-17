import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefault {
  // NodeManagement configuration for this NodePool.
  Managements?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement>;

  // Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  MinCpuPlatform?: string;

  // Scopes that are used by NAP when creating node pools.
  OauthScopes?: Array<string>;

  // The Google Cloud Platform Service Account to be used by the node VMs.
  ServiceAccount?: string;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  BootDiskKmsKey?: string;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  DiskSize?: number;

  // Type of the disk attached to each node.
  DiskType?: string;

  // The default image type used by NAP once a new node pool is being created.
  ImageType?: string;

  // Shielded Instance options.
  ShieldedInstanceConfigs?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig>;

  // Specifies the upgrade settings for NAP created node pools
  UpgradeSettings?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting>;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.",
      [],
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
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The default image type used by NAP once a new node pool is being created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpgradeSettings",
      "Specifies the upgrade settings for NAP created node pools",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Managements",
      "NodeManagement configuration for this NodePool.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      "Scopes that are used by NAP when creating node pools.",
      InputType_String_GetTypes(),
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
      InputType.Number,
      "DiskSize",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ShieldedInstanceConfigs",
      "Shielded Instance options.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultShieldedInstanceConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
