export interface getUptimeCheckIPsUptimeCheckIp {
  /*
The IP address from which the Uptime check originates. This is a fully specified IP address
(not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not
rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either
IPv4 or IPv6 format.
*/
  IpAddress?: string;

  /*
A more specific location within the region that typically encodes a particular city/town/metro
(and its containing state/province or country) within the broader umbrella region category.
*/
  Location?: string;

  // A broad region category in which the IP address is located.
  Region?: string;
}
