import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig,
  compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig_GetTypes,
} from './compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig';
import {
  compute_InstanceFromTemplateNetworkInterfaceAccessConfig,
  compute_InstanceFromTemplateNetworkInterfaceAccessConfig_GetTypes,
} from './compute_InstanceFromTemplateNetworkInterfaceAccessConfig';
import {
  compute_InstanceFromTemplateNetworkInterfaceAliasIpRange,
  compute_InstanceFromTemplateNetworkInterfaceAliasIpRange_GetTypes,
} from './compute_InstanceFromTemplateNetworkInterfaceAliasIpRange';

export interface compute_InstanceFromTemplateNetworkInterface {
  // The prefix length of the primary internal IPv6 range.
  internalIpv6PrefixLength?: number;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  ipv6AccessConfigs?: Array<compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig>;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  queueCount?: number;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  stackType?: string;

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  accessConfigs?: Array<compute_InstanceFromTemplateNetworkInterfaceAccessConfig>;

  // An array of alias IP ranges for this network interface.
  aliasIpRanges?: Array<compute_InstanceFromTemplateNetworkInterfaceAliasIpRange>;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  ipv6AccessType?: string;

  // The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  networkAttachment?: string;

  // The private IP address assigned to the instance.
  networkIp?: string;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  ipv6Address?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;

  // The name or self_link of the subnetwork attached to this interface.
  subnetwork?: string;

  // The project in which the subnetwork belongs.
  subnetworkProject?: string;

  // The name or self_link of the network attached to this interface.
  network?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  nicType?: string;
}

export function compute_InstanceFromTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subnetworkProject',
      'The project in which the subnetwork belongs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'nicType',
      'The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET',
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
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkIp',
      'The private IP address assigned to the instance.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'securityPolicy',
      'A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      'The name or self_link of the subnetwork attached to this interface.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'network',
      'The name or self_link of the network attached to this interface.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipv6AccessConfigs',
      'An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.',
      () =>
        compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      false,
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
      'ipv6Address',
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'internalIpv6PrefixLength',
      'The prefix length of the primary internal IPv6 range.',
      () => [],
      false,
      false,
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
      'name',
      'A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stackType',
      'The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accessConfigs',
      'Access configurations, i.e. IPs via which this instance can be accessed via the Internet.',
      () => compute_InstanceFromTemplateNetworkInterfaceAccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'aliasIpRanges',
      'An array of alias IP ranges for this network interface.',
      () => compute_InstanceFromTemplateNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      false,
    ),
  ];
}
