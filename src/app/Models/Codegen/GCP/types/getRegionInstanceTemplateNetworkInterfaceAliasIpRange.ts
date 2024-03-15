export interface getRegionInstanceTemplateNetworkInterfaceAliasIpRange {
  /*
The IP CIDR range represented by this alias IP range. This IP CIDR range
must belong to the specified subnetwork and cannot contain IP addresses reserved by
system or used by other network interfaces. At the time of writing only a
netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API
error.
*/
  IpCidrRange?: string;

  /*
The subnetwork secondary range name specifying
the secondary range from which to allocate the IP CIDR range for this alias IP
range. If left unspecified, the primary range of the subnetwork will be used.
*/
  SubnetworkRangeName?: string;
}
