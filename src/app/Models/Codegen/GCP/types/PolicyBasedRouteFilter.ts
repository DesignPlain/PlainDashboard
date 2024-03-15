export interface PolicyBasedRouteFilter {
  /*
The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.

- - -
*/
  DestRange?: string;

  // The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.
  IpProtocol?: string;

  /*
Internet protocol versions this policy-based route applies to.
Possible values are: `IPV4`.
*/
  ProtocolVersion?: string;

  // The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.
  SrcRange?: string;
}
