import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig,
  container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes,
} from './container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig';
import {
  container_ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig,
  container_ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes,
} from './container_ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig';
import {
  container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig,
  container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes,
} from './container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig';
import {
  container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig,
  container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes,
} from './container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig';

export interface container_ClusterNodePoolNetworkConfig {
  /*
Enables the private cluster feature,
creating a private endpoint on the cluster. In a private cluster, nodes only
have RFC 1918 private addresses and communicate with the master's private
endpoint via private networking.
*/
  enablePrivateNodes?: boolean;

  // Network bandwidth tier configuration.
  networkPerformanceConfig?: container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig;

  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  podCidrOverprovisionConfig?: container_ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;

  // The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  podIpv4CidrBlock?: string;

  // The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.
  podRange?: string;

  // We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface
  additionalNodeNetworkConfigs?: Array<container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig>;

  // We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node
  additionalPodNetworkConfigs?: Array<container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig>;

  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.
  createPodRange?: boolean;
}

export function container_ClusterNodePoolNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'additionalPodNetworkConfigs',
      'We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node',
      () =>
        container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'createPodRange',
      'Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivateNodes',
      "Enables the private cluster feature,\ncreating a private endpoint on the cluster. In a private cluster, nodes only\nhave RFC 1918 private addresses and communicate with the master's private\nendpoint via private networking.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkPerformanceConfig',
      'Network bandwidth tier configuration.',
      () =>
        container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'podCidrOverprovisionConfig',
      'Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited',
      () =>
        container_ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'podIpv4CidrBlock',
      'The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'podRange',
      'The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'additionalNodeNetworkConfigs',
      'We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface',
      () =>
        container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
