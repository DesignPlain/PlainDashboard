export interface ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig {
  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  Subnetwork?: string;

  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  Network?: string;
}
