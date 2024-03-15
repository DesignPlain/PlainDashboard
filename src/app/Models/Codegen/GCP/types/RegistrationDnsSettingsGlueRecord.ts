export interface RegistrationDnsSettingsGlueRecord {
  // Required. Domain name of the host in Punycode format.
  HostName?: string;

  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  Ipv4Addresses?: Array<string>;

  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  Ipv6Addresses?: Array<string>;
}
