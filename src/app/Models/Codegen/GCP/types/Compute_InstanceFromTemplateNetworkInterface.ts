import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromTemplateNetworkInterfaceAliasIpRange,
  Compute_InstanceFromTemplateNetworkInterfaceAliasIpRange_GetTypes,
} from "./Compute_InstanceFromTemplateNetworkInterfaceAliasIpRange";
import {
  Compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig,
  Compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig_GetTypes,
} from "./Compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig";
import {
  Compute_InstanceFromTemplateNetworkInterfaceAccessConfig,
  Compute_InstanceFromTemplateNetworkInterfaceAccessConfig_GetTypes,
} from "./Compute_InstanceFromTemplateNetworkInterfaceAccessConfig";

export interface Compute_InstanceFromTemplateNetworkInterface {
  // An array of alias IP ranges for this network interface.
  AliasIpRanges?: Array<Compute_InstanceFromTemplateNetworkInterfaceAliasIpRange>;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  // An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
  Ipv6AccessConfigs?: Array<Compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig>;

  // The name or self_link of the network attached to this interface.
  Network?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  AccessConfigs?: Array<Compute_InstanceFromTemplateNetworkInterfaceAccessConfig>;

  // One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
  Ipv6AccessType?: string;

  // The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  NetworkAttachment?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  // The name or self_link of the subnetwork attached to this interface.
  Subnetwork?: string;

  // The project in which the subnetwork belongs.
  SubnetworkProject?: string;

  // The private IP address assigned to the instance.
  NetworkIp?: string;

  // The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  NicType?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;
}

export function Compute_InstanceFromTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
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
      "Ipv6Address",
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InternalIpv6PrefixLength",
      "The prefix length of the primary internal IPv6 range.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ipv6AccessConfigs",
      "An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.",
      Compute_InstanceFromTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkIp",
      "The private IP address assigned to the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AliasIpRanges",
      "An array of alias IP ranges for this network interface.",
      Compute_InstanceFromTemplateNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecurityPolicy",
      "A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv6AccessType",
      "One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.",
      [],
      false,
      false,
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
      "Name",
      "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "The name or self_link of the subnetwork attached to this interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubnetworkProject",
      "The project in which the subnetwork belongs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The name or self_link of the network attached to this interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StackType",
      "The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AccessConfigs",
      "Access configurations, i.e. IPs via which this instance can be accessed via the Internet.",
      Compute_InstanceFromTemplateNetworkInterfaceAccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NicType",
      "The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET",
      [],
      false,
      true,
    ),
  ];
}
