import { getRegionInstanceTemplateNetworkInterfaceAccessConfig } from "./getRegionInstanceTemplateNetworkInterfaceAccessConfig";
import { getRegionInstanceTemplateNetworkInterfaceAliasIpRange } from "./getRegionInstanceTemplateNetworkInterfaceAliasIpRange";
import { getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig } from "./getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig";

export interface getRegionInstanceTemplateNetworkInterface {
  /*
the name of the subnetwork to attach this interface
to. The subnetwork must exist in the same `region` this instance will be
created in. Either `network` or `subnetwork` must be provided.
*/
  Subnetwork?: string;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  Ipv6AccessType?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  NicType?: string;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  //
  AccessConfigs?: Array<getRegionInstanceTemplateNetworkInterfaceAccessConfig>;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  AliasIpRanges?: Array<getRegionInstanceTemplateNetworkInterfaceAliasIpRange>;

  // The name of the instance template. One of `name` or `filter` must be provided.
  Name?: string;

  /*
The name or self_link of the network to attach this interface to.
Use `network` attribute for Legacy or Auto subnetted networks and
`subnetwork` for custom subnetted networks.
*/
  Network?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  NetworkIp?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  /*
The ID of the project in which the subnetwork belongs.
If it is not provided, the provider project is used.
*/
  SubnetworkProject?: string;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  Ipv6AccessConfigs?: Array<getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig>;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;
}
