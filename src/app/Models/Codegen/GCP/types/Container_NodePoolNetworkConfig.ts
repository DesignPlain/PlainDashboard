import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolNetworkConfigAdditionalPodNetworkConfig,
  Container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes,
} from "./Container_NodePoolNetworkConfigAdditionalPodNetworkConfig";
import {
  Container_NodePoolNetworkConfigNetworkPerformanceConfig,
  Container_NodePoolNetworkConfigNetworkPerformanceConfig_GetTypes,
} from "./Container_NodePoolNetworkConfigNetworkPerformanceConfig";
import {
  Container_NodePoolNetworkConfigPodCidrOverprovisionConfig,
  Container_NodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes,
} from "./Container_NodePoolNetworkConfigPodCidrOverprovisionConfig";
import {
  Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig,
  Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes,
} from "./Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig";

export interface Container_NodePoolNetworkConfig {
  // The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.
  PodRange?: string;

  /*
We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.
Structure is documented below
*/
  AdditionalNodeNetworkConfigs?: Array<Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig>;

  /*
We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.
Structure is documented below
*/
  AdditionalPodNetworkConfigs?: Array<Container_NodePoolNetworkConfigAdditionalPodNetworkConfig>;

  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.
  CreatePodRange?: boolean;

  // Whether nodes have internal IP addresses only.
  EnablePrivateNodes?: boolean;

  // Network bandwidth tier configuration.
  NetworkPerformanceConfig?: Container_NodePoolNetworkConfigNetworkPerformanceConfig;

  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  PodCidrOverprovisionConfig?: Container_NodePoolNetworkConfigPodCidrOverprovisionConfig;

  // The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  PodIpv4CidrBlock?: string;
}

export function Container_NodePoolNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalNodeNetworkConfigs",
      "We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.\nStructure is documented below",
      Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalPodNetworkConfigs",
      "We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.\nStructure is documented below",
      Container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CreatePodRange",
      "Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateNodes",
      "Whether nodes have internal IP addresses only.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NetworkPerformanceConfig",
      "Network bandwidth tier configuration.",
      Container_NodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PodCidrOverprovisionConfig",
      "Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited",
      Container_NodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PodIpv4CidrBlock",
      "The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PodRange",
      "The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.",
      [],
      false,
      true,
    ),
  ];
}
