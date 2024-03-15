export interface RouterNatSubnetwork {
  // Self-link of subnetwork to NAT
  Name?: string;

  /*
List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
`LIST_OF_SECONDARY_IP_RANGES` is one of the values in
sourceIpRangesToNat
*/
  SecondaryIpRangeNames?: Array<string>;

  /*
List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
`ALL_IP_RANGES`, `LIST_OF_SECONDARY_IP_RANGES`,
`PRIMARY_IP_RANGE`.
*/
  SourceIpRangesToNats?: Array<string>;
}
