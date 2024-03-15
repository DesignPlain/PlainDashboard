import { InstanceNetworkInterfaceIpv6AccessConfig } from "./InstanceNetworkInterfaceIpv6AccessConfig";
import { InstanceNetworkInterfaceAliasIpRange } from "./InstanceNetworkInterfaceAliasIpRange";
import { InstanceNetworkInterfaceAccessConfig } from "./InstanceNetworkInterfaceAccessConfig";

export interface InstanceNetworkInterface {
  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  NetworkIp?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

  /*
The name or self_link of the network to attach this interface to.
Either `network` or `subnetwork` must be provided. If network isn't provided it will
be inferred from the subnetwork.
*/
  Network?: string;

  // The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.
  NicType?: string;

  /*
The project in which the subnetwork belongs.
If the `subnetwork` is a self_link, this field is ignored in favor of the project
defined in the subnetwork self_link. If the `subnetwork` is a name and this
field is not provided, the provider project is used.
*/
  SubnetworkProject?: string;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  /*
An array of IPv6 access configurations for this interface.
Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig
specified, then this instance will have no external IPv6 Internet access. Structure documented below.
*/
  Ipv6AccessConfigs?: Array<InstanceNetworkInterfaceIpv6AccessConfig>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  /*
The name or self_link of the subnetwork to attach this
interface to. Either `network` or `subnetwork` must be provided. If network isn't provided
it will be inferred from the subnetwork. The subnetwork must exist in the same region this
instance will be created in. If the network resource is in
[legacy](https://cloud.google.com/vpc/docs/legacy) mode, do not specify this field. If the
network is in auto subnet mode, specifying the subnetwork is optional. If the network is
in custom subnet mode, specifying the subnetwork is required.
*/
  Subnetwork?: string;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  AliasIpRanges?: Array<InstanceNetworkInterfaceAliasIpRange>;

  /*
One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet.
This field is always inherited from its subnetwork.
*/
  Ipv6AccessType?: string;

  // The URL of the network attachment that this interface should connect to in the following format: `projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}`.
  NetworkAttachment?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  AccessConfigs?: Array<InstanceNetworkInterfaceAccessConfig>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;
}
