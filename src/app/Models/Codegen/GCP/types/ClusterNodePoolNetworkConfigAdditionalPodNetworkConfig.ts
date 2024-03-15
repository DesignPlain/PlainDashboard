export interface ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  MaxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  SecondaryPodRange?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  Subnetwork?: string;
}
