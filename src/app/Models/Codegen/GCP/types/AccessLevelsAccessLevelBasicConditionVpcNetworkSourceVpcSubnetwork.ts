export interface AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork {
  // Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires `compute.network.get` permission to be granted to caller.
  Network?: string;

  // CIDR block IP subnetwork specification. Must be IPv4.
  VpcIpSubnetworks?: Array<string>;
}
