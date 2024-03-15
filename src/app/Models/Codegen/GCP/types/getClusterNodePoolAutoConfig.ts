import { getClusterNodePoolAutoConfigNetworkTag } from "./getClusterNodePoolAutoConfigNetworkTag";

export interface getClusterNodePoolAutoConfig {
  // Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.
  NetworkTags?: Array<getClusterNodePoolAutoConfigNetworkTag>;
}
