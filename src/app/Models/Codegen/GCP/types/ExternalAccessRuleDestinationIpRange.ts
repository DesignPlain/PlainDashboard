export interface ExternalAccessRuleDestinationIpRange {
  /*
The name of an `ExternalAddress` resource.

- - -
*/
  ExternalAddress?: string;

  // An IP address range in the CIDR format.
  IpAddressRange?: string;
}
