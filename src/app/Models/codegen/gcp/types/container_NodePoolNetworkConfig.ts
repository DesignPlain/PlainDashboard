import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_NodePoolNetworkConfigAdditionalPodNetworkConfig,
  container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes,
} from "./container_NodePoolNetworkConfigAdditionalPodNetworkConfig";
import {
  container_NodePoolNetworkConfigNetworkPerformanceConfig,
  container_NodePoolNetworkConfigNetworkPerformanceConfig_GetTypes,
} from "./container_NodePoolNetworkConfigNetworkPerformanceConfig";
import {
  container_NodePoolNetworkConfigPodCidrOverprovisionConfig,
  container_NodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes,
} from "./container_NodePoolNetworkConfigPodCidrOverprovisionConfig";
import {
  container_NodePoolNetworkConfigAdditionalNodeNetworkConfig,
  container_NodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes,
} from "./container_NodePoolNetworkConfigAdditionalNodeNetworkConfig";

export interface container_NodePoolNetworkConfig {
  /*
We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.
Structure is documented below
*/
  additionalPodNetworkConfigs?: Array<container_NodePoolNetworkConfigAdditionalPodNetworkConfig>;

  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.
  createPodRange?: boolean;

  // Whether nodes have internal IP addresses only.
  enablePrivateNodes?: boolean;

  // Network bandwidth tier configuration.
  networkPerformanceConfig?: container_NodePoolNetworkConfigNetworkPerformanceConfig;

  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  podCidrOverprovisionConfig?: container_NodePoolNetworkConfigPodCidrOverprovisionConfig;

  // The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  podIpv4CidrBlock?: string;

  // The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.
  podRange?: string;

  /*
We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.
Structure is documented below
*/
  additionalNodeNetworkConfigs?: Array<container_NodePoolNetworkConfigAdditionalNodeNetworkConfig>;
}

export function container_NodePoolNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "podCidrOverprovisionConfig",
      "Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited",
      () =>
        container_NodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "podIpv4CidrBlock",
      "The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "podRange",
      "The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalNodeNetworkConfigs",
      "We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.\nStructure is documented below",
      () =>
        container_NodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalPodNetworkConfigs",
      "We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.\nStructure is documented below",
      () =>
        container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "createPodRange",
      "Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateNodes",
      "Whether nodes have internal IP addresses only.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkPerformanceConfig",
      "Network bandwidth tier configuration.",
      () => container_NodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
