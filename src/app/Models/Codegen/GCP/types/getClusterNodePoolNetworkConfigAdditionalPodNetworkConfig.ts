export interface getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  MaxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  SecondaryPodRange?: string;

  // Name of the subnetwork where the additional pod network belongs.
  Subnetwork?: string;
}
