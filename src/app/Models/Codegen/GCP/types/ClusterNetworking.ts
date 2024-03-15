export interface ClusterNetworking {
  /*
All pods in the cluster are assigned an RFC1918 IPv4 address from these
blocks. Only a single block is supported. This field cannot be changed
after creation.
*/
  ClusterIpv4CidrBlocks?: Array<string>;

  /*
If specified, dual stack mode is enabled and all pods in the cluster are
assigned an IPv6 address from these blocks alongside from an IPv4
address. Only a single block is supported. This field cannot be changed
after creation.
*/
  ClusterIpv6CidrBlocks?: Array<string>;

  /*
(Output)
IP addressing type of this cluster i.e. SINGLESTACK_V4 vs DUALSTACK_V4_V6.
*/
  NetworkType?: string;

  /*
All services in the cluster are assigned an RFC1918 IPv4 address from these
blocks. Only a single block is supported. This field cannot be changed
after creation.
*/
  ServicesIpv4CidrBlocks?: Array<string>;

  /*
If specified, dual stack mode is enabled and all services in the cluster are
assigned an IPv6 address from these blocks alongside from an IPv4
address. Only a single block is supported. This field cannot be changed
after creation.
*/
  ServicesIpv6CidrBlocks?: Array<string>;
}
