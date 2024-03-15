import { getInstanceNetworkInterfaceAccessConfig } from "./getInstanceNetworkInterfaceAccessConfig";
import { getInstanceNetworkInterfaceIpv6AccessConfig } from "./getInstanceNetworkInterfaceIpv6AccessConfig";
import { getInstanceNetworkInterfaceAliasIpRange } from "./getInstanceNetworkInterfaceAliasIpRange";

export interface getInstanceNetworkInterface {
  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  NicType?: string;

  // The private IP address assigned to the instance.
  NetworkIp?: string;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  Ipv6AccessType?: string;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  // The name of the instance. One of `name` or `self_link` must be provided.
  Name?: string;

  // The name or self_link of the network attached to this interface.
  Network?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  /*
Access configurations, i.e. IPs via which this
instance can be accessed via the Internet. Structure documented below.
*/
  AccessConfigs?: Array<getInstanceNetworkInterfaceAccessConfig>;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  Ipv6AccessConfigs?: Array<getInstanceNetworkInterfaceIpv6AccessConfig>;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  // The name or self_link of the subnetwork attached to this interface.
  Subnetwork?: string;

  // An array of alias IP ranges for this network interface. Structure documented below.
  AliasIpRanges?: Array<getInstanceNetworkInterfaceAliasIpRange>;

  // Beta The URL of the network attachment to this interface.
  NetworkAttachment?: string;

  // The project in which the subnetwork belongs.
  SubnetworkProject?: string;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;
}
