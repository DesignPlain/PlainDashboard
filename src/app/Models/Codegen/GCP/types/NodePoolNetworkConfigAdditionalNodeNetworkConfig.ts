export interface NodePoolNetworkConfigAdditionalNodeNetworkConfig {
  // Name of the VPC where the additional interface belongs.
  Network?: string;

  // Name of the subnetwork where the additional interface belongs.
  Subnetwork?: string;
}
