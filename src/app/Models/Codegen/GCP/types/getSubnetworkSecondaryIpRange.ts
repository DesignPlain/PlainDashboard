export interface getSubnetworkSecondaryIpRange {
  /*
The range of IP addresses belonging to this subnetwork
secondary range.
*/
  IpCidrRange?: string;

  /*
The name associated with this subnetwork secondary range, used
when adding an alias IP range to a VM instance.
*/
  RangeName?: string;
}
