import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_InstanceTemplateNetworkInterfaceAliasIpRange,
  compute_InstanceTemplateNetworkInterfaceAliasIpRange_GetTypes,
} from './compute_InstanceTemplateNetworkInterfaceAliasIpRange';
import {
  compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig,
  compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes,
} from './compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig';
import {
  compute_InstanceTemplateNetworkInterfaceAccessConfig,
  compute_InstanceTemplateNetworkInterfaceAccessConfig_GetTypes,
} from './compute_InstanceTemplateNetworkInterfaceAccessConfig';

export interface compute_InstanceTemplateNetworkInterface {
  /*
the name of the subnetwork to attach this interface
to. The subnetwork must exist in the same `region` this instance will be
created in. Either `network` or `subnetwork` must be provided.
*/
  subnetwork?: string;

  /*
The name of the instance template. If you leave
this blank, the provider will auto-generate a unique name.
*/
  name?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  networkIp?: string;

  // The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.
  nicType?: string;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  ipv6Address?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  queueCount?: number;

  /*
Access configurations, i.e. IPs via which this
instance can be accessed via the Internet. Omit to ensure that the instance
is not accessible from the Internet (this means that ssh provisioners will
not work unless you can send traffic to the instance's
network (e.g. via tunnel or because it is running on another cloud instance
on that network). This block can be repeated multiple times. Structure documented below.
*/
  accessConfigs?: Array<compute_InstanceTemplateNetworkInterfaceAccessConfig>;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  aliasIpRanges?: Array<compute_InstanceTemplateNetworkInterfaceAliasIpRange>;

  /*
An array of IPv6 access configurations for this interface.
Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig
specified, then this instance will have no external IPv6 Internet access. Structure documented below.
*/
  ipv6AccessConfigs?: Array<compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig>;

  // The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  networkAttachment?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.
  stackType?: string;

  /*
The ID of the project in which the subnetwork belongs.
If it is not provided, the provider project is used.
*/
  subnetworkProject?: string;

  // The prefix length of the primary internal IPv6 range.
  internalIpv6PrefixLength?: number;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  ipv6AccessType?: string;

  /*
The name or self_link of the network to attach this interface to.
Use `network` attribute for Legacy or Auto subnetted networks and
`subnetwork` for custom subnetted networks.
*/
  network?: string;
}

export function compute_InstanceTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nicType',
      'The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accessConfigs',
      "Access configurations, i.e. IPs via which this\ninstance can be accessed via the Internet. Omit to ensure that the instance\nis not accessible from the Internet (this means that ssh provisioners will\nnot work unless you can send traffic to the instance's\nnetwork (e.g. via tunnel or because it is running on another cloud instance\non that network). This block can be repeated multiple times. Structure documented below.",
      () => compute_InstanceTemplateNetworkInterfaceAccessConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'aliasIpRanges',
      'An\narray of alias IP ranges for this network interface. Can only be specified for network\ninterfaces on subnet-mode networks. Structure documented below.',
      () => compute_InstanceTemplateNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipv6AccessConfigs',
      'An array of IPv6 access configurations for this interface.\nCurrently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig\nspecified, then this instance will have no external IPv6 Internet access. Structure documented below.',
      () => compute_InstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkAttachment',
      'The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'stackType',
      'The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'network',
      'The name or self_link of the network to attach this interface to.\nUse `network` attribute for Legacy or Auto subnetted networks and\n`subnetwork` for custom subnetted networks.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv6Address',
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetworkProject',
      'The ID of the project in which the subnetwork belongs.\nIf it is not provided, the provider project is used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      'the name of the subnetwork to attach this interface\nto. The subnetwork must exist in the same `region` this instance will be\ncreated in. Either `network` or `subnetwork` must be provided.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'internalIpv6PrefixLength',
      'The prefix length of the primary internal IPv6 range.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the instance template. If you leave\nthis blank, the provider will auto-generate a unique name.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkIp',
      'The private IP address to assign to the instance. If\nempty, the address will be automatically assigned.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'queueCount',
      "The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv6AccessType',
      'One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.',
      () => [],
      false,
      true,
    ),
  ];
}
