import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig,
  Container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes,
} from "./Container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig";
import {
  Container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig,
  Container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes,
} from "./Container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig";
import {
  Container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig,
  Container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes,
} from "./Container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig";
import {
  Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig,
  Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes,
} from "./Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig";

export interface Container_getClusterNodePoolNetworkConfig {
  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  CreatePodRange?: boolean;

  // Whether nodes have internal IP addresses only.
  EnablePrivateNodes?: boolean;

  // Network bandwidth tier configuration.
  NetworkPerformanceConfigs?: Array<Container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig>;

  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  PodCidrOverprovisionConfigs?: Array<Container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig>;

  // The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  PodIpv4CidrBlock?: string;

  // The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  PodRange?: string;

  // We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface
  AdditionalNodeNetworkConfigs?: Array<Container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig>;

  // We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node
  AdditionalPodNetworkConfigs?: Array<Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig>;
}

export function Container_getClusterNodePoolNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalNodeNetworkConfigs",
      "We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface",
      Container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalPodNetworkConfigs",
      "We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node",
      Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CreatePodRange",
      "Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateNodes",
      "Whether nodes have internal IP addresses only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkPerformanceConfigs",
      "Network bandwidth tier configuration.",
      Container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PodCidrOverprovisionConfigs",
      "Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited",
      Container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PodIpv4CidrBlock",
      "The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PodRange",
      "The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.",
      [],
      true,
      false,
    ),
  ];
}
