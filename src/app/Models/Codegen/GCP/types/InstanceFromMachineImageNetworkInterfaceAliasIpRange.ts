export interface InstanceFromMachineImageNetworkInterfaceAliasIpRange {
  // The IP CIDR range represented by this alias IP range.
  IpCidrRange?: string;

  // The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
  SubnetworkRangeName?: string;
}
