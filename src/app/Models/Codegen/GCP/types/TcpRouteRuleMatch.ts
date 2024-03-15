export interface TcpRouteRuleMatch {
  // Specifies the destination port to match against.
  Port?: string;

  /*
Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.
*/
  Address?: string;
}
