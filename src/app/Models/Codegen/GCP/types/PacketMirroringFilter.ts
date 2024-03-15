export interface PacketMirroringFilter {
  /*
IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported.
*/
  CidrRanges?: Array<string>;

  /*
Direction of traffic to mirror.
Default value is `BOTH`.
Possible values are: `INGRESS`, `EGRESS`, `BOTH`.
*/
  Direction?: string;

  // Possible IP protocols including tcp, udp, icmp and esp
  IpProtocols?: Array<string>;
}
