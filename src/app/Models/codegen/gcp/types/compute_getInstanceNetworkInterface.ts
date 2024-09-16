import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getInstanceNetworkInterfaceAccessConfig,
  compute_getInstanceNetworkInterfaceAccessConfig_GetTypes,
} from './compute_getInstanceNetworkInterfaceAccessConfig';
import {
  compute_getInstanceNetworkInterfaceAliasIpRange,
  compute_getInstanceNetworkInterfaceAliasIpRange_GetTypes,
} from './compute_getInstanceNetworkInterfaceAliasIpRange';
import {
  compute_getInstanceNetworkInterfaceIpv6AccessConfig,
  compute_getInstanceNetworkInterfaceIpv6AccessConfig_GetTypes,
} from './compute_getInstanceNetworkInterfaceIpv6AccessConfig';

export interface compute_getInstanceNetworkInterface {
  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  stackType?: string;

  // The project in which the subnetwork belongs.
  subnetworkProject?: string;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  ipv6AccessType?: string;

  // Beta The URL of the network attachment to this interface.
  networkAttachment?: string;

  // The private IP address assigned to the instance.
  networkIp?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  nicType?: string;

  /*
Access configurations, i.e. IPs via which this
instance can be accessed via the Internet. Structure documented below.
*/
  accessConfigs?: Array<compute_getInstanceNetworkInterfaceAccessConfig>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  ipv6Address?: string;

  // The name or self_link of the network attached to this interface.
  network?: string;

  // The prefix length of the primary internal IPv6 range.
  internalIpv6PrefixLength?: number;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  queueCount?: number;

  // The name or self_link of the subnetwork attached to this interface.
  subnetwork?: string;

  // An array of alias IP ranges for this network interface. Structure documented below.
  aliasIpRanges?: Array<compute_getInstanceNetworkInterfaceAliasIpRange>;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  ipv6AccessConfigs?: Array<compute_getInstanceNetworkInterfaceIpv6AccessConfig>;

  // The name of the instance. One of `name` or `self_link` must be provided.
  name?: string;
}

export function compute_getInstanceNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipv6AccessType',
      'One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipv6AccessConfigs',
      'An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.',
      () => compute_getInstanceNetworkInterfaceIpv6AccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv6Address',
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'securityPolicy',
      'A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      'The name or self_link of the subnetwork attached to this interface.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accessConfigs',
      'Access configurations, i.e. IPs via which this\ninstance can be accessed via the Internet. Structure documented below.',
      () => compute_getInstanceNetworkInterfaceAccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'internalIpv6PrefixLength',
      'The prefix length of the primary internal IPv6 range.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'queueCount',
      "The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'aliasIpRanges',
      'An array of alias IP ranges for this network interface. Structure documented below.',
      () => compute_getInstanceNetworkInterfaceAliasIpRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the instance. One of `name` or `self_link` must be provided.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stackType',
      'The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkIp',
      'The private IP address assigned to the instance.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'nicType',
      'The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetworkProject',
      'The project in which the subnetwork belongs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkAttachment',
      'Beta The URL of the network attachment to this interface.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'network',
      'The name or self_link of the network attached to this interface.',
      () => [],
      true,
      false,
    ),
  ];
}
