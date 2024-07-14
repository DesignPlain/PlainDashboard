import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig,
  container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes,
} from "./container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig";
import {
  container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig,
  container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes,
} from "./container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig";
import {
  container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig,
  container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes,
} from "./container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig";
import {
  container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig,
  container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes,
} from "./container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig";

export interface container_getClusterNodePoolNetworkConfig {
  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  podCidrOverprovisionConfigs?: Array<container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig>;

  // The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  podIpv4CidrBlock?: string;

  // The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  podRange?: string;

  // We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface
  additionalNodeNetworkConfigs?: Array<container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig>;

  // We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node
  additionalPodNetworkConfigs?: Array<container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig>;

  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  createPodRange?: boolean;

  // Whether nodes have internal IP addresses only.
  enablePrivateNodes?: boolean;

  // Network bandwidth tier configuration.
  networkPerformanceConfigs?: Array<container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig>;
}

export function container_getClusterNodePoolNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "additionalPodNetworkConfigs",
      "We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node",
      container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "createPodRange",
      "Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateNodes",
      "Whether nodes have internal IP addresses only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkPerformanceConfigs",
      "Network bandwidth tier configuration.",
      container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "podCidrOverprovisionConfigs",
      "Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited",
      container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "podIpv4CidrBlock",
      "The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "podRange",
      "The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalNodeNetworkConfigs",
      "We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface",
      container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
