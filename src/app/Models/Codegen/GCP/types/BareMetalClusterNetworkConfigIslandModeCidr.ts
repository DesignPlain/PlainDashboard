export interface BareMetalClusterNetworkConfigIslandModeCidr {
  // All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  PodAddressCidrBlocks?: Array<string>;

  // All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  ServiceAddressCidrBlocks?: Array<string>;
}
