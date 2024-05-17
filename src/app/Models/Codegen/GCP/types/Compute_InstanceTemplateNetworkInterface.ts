import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig,
  Compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes,
} from "./Compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig";
import {
  Compute_InstanceTemplateNetworkInterfaceAliasIpRange,
  Compute_InstanceTemplateNetworkInterfaceAliasIpRange_GetTypes,
} from "./Compute_InstanceTemplateNetworkInterfaceAliasIpRange";
import {
  Compute_InstanceTemplateNetworkInterfaceAccessConfig,
  Compute_InstanceTemplateNetworkInterfaceAccessConfig_GetTypes,
} from "./Compute_InstanceTemplateNetworkInterfaceAccessConfig";

export interface Compute_InstanceTemplateNetworkInterface {
  /*
The ID of the project in which the subnetwork belongs.
If it is not provided, the provider project is used.
*/
  SubnetworkProject?: string;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  Ipv6AccessType?: string;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  Name?: string;

  /*
The name or self_link of the network to attach this interface to.
Use `network` attribute for Legacy or Auto subnetted networks and
`subnetwork` for custom subnetted networks.
*/
  Network?: string;

  /*
An array of IPv6 access configurations for this interface.
Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig
specified, then this instance will have no external IPv6 Internet access. Structure documented below.
*/
  Ipv6AccessConfigs?: Array<Compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  NetworkIp?: string;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  AliasIpRanges?: Array<Compute_InstanceTemplateNetworkInterfaceAliasIpRange>;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  /*
the name of the subnetwork to attach this interface
to. The subnetwork must exist in the same `region` this instance will be
created in. Either `network` or `subnetwork` must be provided.
*/
  Subnetwork?: string;

  /*
Access configurations, i.e. IPs via which this
instance can be accessed via the Internet. Omit to ensure that the instance
is not accessible from the Internet (this means that ssh provisioners will
not work unless you can send traffic to the instance's
network (e.g. via tunnel or because it is running on another cloud instance
on that network). This block can be repeated multiple times. Structure documented below.
*/
  AccessConfigs?: Array<Compute_InstanceTemplateNetworkInterfaceAccessConfig>;

  // The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  NetworkAttachment?: string;

  // The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.
  NicType?: string;
}

export function Compute_InstanceTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "QueueCount",
      "The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "the name of the subnetwork to attach this interface\nto. The subnetwork must exist in the same `region` this instance will be\ncreated in. Either `network` or `subnetwork` must be provided.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv6Address",
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkIp",
      "The private IP address to assign to the instance. If\nempty, the address will be automatically assigned.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AliasIpRanges",
      "An\narray of alias IP ranges for this network interface. Can only be specified for network\ninterfaces on subnet-mode networks. Structure documented below.",
      Compute_InstanceTemplateNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InternalIpv6PrefixLength",
      "The prefix length of the primary internal IPv6 range.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StackType",
      "The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AccessConfigs",
      "Access configurations, i.e. IPs via which this\ninstance can be accessed via the Internet. Omit to ensure that the instance\nis not accessible from the Internet (this means that ssh provisioners will\nnot work unless you can send traffic to the instance's\nnetwork (e.g. via tunnel or because it is running on another cloud instance\non that network). This block can be repeated multiple times. Structure documented below.",
      Compute_InstanceTemplateNetworkInterfaceAccessConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NicType",
      "The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The name or self_link of the network to attach this interface to.\nUse `network` attribute for Legacy or Auto subnetted networks and\n`subnetwork` for custom subnetted networks.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ipv6AccessConfigs",
      "An array of IPv6 access configurations for this interface.\nCurrently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig\nspecified, then this instance will have no external IPv6 Internet access. Structure documented below.",
      Compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubnetworkProject",
      "The ID of the project in which the subnetwork belongs.\nIf it is not provided, the provider project is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkAttachment",
      "The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv6AccessType",
      "One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance template. If you leave\nthis blank, the provider will auto-generate a unique name.",
      [],
      false,
      true,
    ),
  ];
}
