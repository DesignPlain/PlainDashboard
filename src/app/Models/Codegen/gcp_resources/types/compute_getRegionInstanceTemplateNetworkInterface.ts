import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange,
  compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange_GetTypes,
} from "./compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange";
import {
  compute_getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig,
  compute_getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes,
} from "./compute_getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig";
import {
  compute_getRegionInstanceTemplateNetworkInterfaceAccessConfig,
  compute_getRegionInstanceTemplateNetworkInterfaceAccessConfig_GetTypes,
} from "./compute_getRegionInstanceTemplateNetworkInterfaceAccessConfig";

export interface compute_getRegionInstanceTemplateNetworkInterface {
  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  queueCount?: number;

  /*
the name of the subnetwork to attach this interface
to. The subnetwork must exist in the same `region` this instance will be
created in. Either `network` or `subnetwork` must be provided.
*/
  subnetwork?: string;

  // The prefix length of the primary internal IPv6 range.
  internalIpv6PrefixLength?: number;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  ipv6AccessType?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  networkIp?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  nicType?: string;

  //
  accessConfigs?: Array<compute_getRegionInstanceTemplateNetworkInterfaceAccessConfig>;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  aliasIpRanges?: Array<compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  ipv6Address?: string;

  // The name of the instance template. One of `name` or `filter` must be provided.
  name?: string;

  /*
The name or self_link of the network to attach this interface to.
Use `network` attribute for Legacy or Auto subnetted networks and
`subnetwork` for custom subnetted networks.
*/
  network?: string;

  /*
The ID of the project in which the subnetwork belongs.
If it is not provided, the provider project is used.
*/
  subnetworkProject?: string;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  ipv6AccessConfigs?: Array<compute_getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig>;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  stackType?: string;
}

export function compute_getRegionInstanceTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipv6AccessType",
      "One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6Address",
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "the name of the subnetwork to attach this interface\nto. The subnetwork must exist in the same `region` this instance will be\ncreated in. Either `network` or `subnetwork` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "internalIpv6PrefixLength",
      "The prefix length of the primary internal IPv6 range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetworkProject",
      "The ID of the project in which the subnetwork belongs.\nIf it is not provided, the provider project is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stackType",
      "The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance template. One of `name` or `filter` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The name or self_link of the network to attach this interface to.\nUse `network` attribute for Legacy or Auto subnetted networks and\n`subnetwork` for custom subnetted networks.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nicType",
      "The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queueCount",
      "The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkIp",
      "The private IP address to assign to the instance. If\nempty, the address will be automatically assigned.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6AccessConfigs",
      "An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.",
      compute_getRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessConfigs",
      "",
      compute_getRegionInstanceTemplateNetworkInterfaceAccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aliasIpRanges",
      "An\narray of alias IP ranges for this network interface. Can only be specified for network\ninterfaces on subnet-mode networks. Structure documented below.",
      compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange_GetTypes(),
      true,
      false,
    ),
  ];
}
