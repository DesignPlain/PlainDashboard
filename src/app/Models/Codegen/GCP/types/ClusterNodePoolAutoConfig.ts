import { ClusterNodePoolAutoConfigNetworkTags } from "./ClusterNodePoolAutoConfigNetworkTags";

export interface ClusterNodePoolAutoConfig {
  // The network tag config for the cluster's automatically provisioned node pools.
  NetworkTags?: ClusterNodePoolAutoConfigNetworkTags;
}
