import { InstanceFromMachineImageNetworkInterfaceAliasIpRange } from "./InstanceFromMachineImageNetworkInterfaceAliasIpRange";
import { InstanceFromMachineImageNetworkInterfaceAccessConfig } from "./InstanceFromMachineImageNetworkInterfaceAccessConfig";
import { InstanceFromMachineImageNetworkInterfaceIpv6AccessConfig } from "./InstanceFromMachineImageNetworkInterfaceIpv6AccessConfig";

export interface InstanceFromMachineImageNetworkInterface {
  // The project in which the subnetwork belongs.
  SubnetworkProject?: string;

  // An array of alias IP ranges for this network interface.
  AliasIpRanges?: Array<InstanceFromMachineImageNetworkInterfaceAliasIpRange>;

  // The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  NetworkAttachment?: string;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  Ipv6AccessType?: string;

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  AccessConfigs?: Array<InstanceFromMachineImageNetworkInterfaceAccessConfig>;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  // The private IP address assigned to the instance.
  NetworkIp?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  // The name or self_link of the network attached to this interface.
  Network?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  NicType?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  // The name or self_link of the subnetwork attached to this interface.
  Subnetwork?: string;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  Ipv6AccessConfigs?: Array<InstanceFromMachineImageNetworkInterfaceIpv6AccessConfig>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;
}
