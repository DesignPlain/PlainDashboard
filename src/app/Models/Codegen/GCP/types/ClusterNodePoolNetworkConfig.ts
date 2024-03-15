import { ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig } from "./ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig";
import { ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig } from "./ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig";
import { ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig } from "./ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig";
import { ClusterNodePoolNetworkConfigNetworkPerformanceConfig } from "./ClusterNodePoolNetworkConfigNetworkPerformanceConfig";

export interface ClusterNodePoolNetworkConfig {
  // Network bandwidth tier configuration.
  NetworkPerformanceConfig?: ClusterNodePoolNetworkConfigNetworkPerformanceConfig;

  // Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited
  PodCidrOverprovisionConfig?: ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;

  // The IP address range for pod IPs in this node pool. Only applicable if createPodRange is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  PodIpv4CidrBlock?: string;

  // The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.
  PodRange?: string;

  // We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface
  AdditionalNodeNetworkConfigs?: Array<ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig>;

  // We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node
  AdditionalPodNetworkConfigs?: Array<ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig>;

  // Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified.
  CreatePodRange?: boolean;

  /*
Enables the private cluster feature,
creating a private endpoint on the cluster. In a private cluster, nodes only
have RFC 1918 private addresses and communicate with the master's private
endpoint via private networking.
*/
  EnablePrivateNodes?: boolean;
}
