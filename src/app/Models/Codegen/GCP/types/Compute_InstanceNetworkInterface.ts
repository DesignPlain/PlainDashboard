import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceNetworkInterfaceIpv6AccessConfig,
  Compute_InstanceNetworkInterfaceIpv6AccessConfig_GetTypes,
} from "./Compute_InstanceNetworkInterfaceIpv6AccessConfig";
import {
  Compute_InstanceNetworkInterfaceAliasIpRange,
  Compute_InstanceNetworkInterfaceAliasIpRange_GetTypes,
} from "./Compute_InstanceNetworkInterfaceAliasIpRange";
import {
  Compute_InstanceNetworkInterfaceAccessConfig,
  Compute_InstanceNetworkInterfaceAccessConfig_GetTypes,
} from "./Compute_InstanceNetworkInterfaceAccessConfig";

export interface Compute_InstanceNetworkInterface {
  // The URL of the network attachment that this interface should connect to in the following format: `projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}`.
  NetworkAttachment?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  NetworkIp?: string;

  /*
The project in which the subnetwork belongs.
If the `subnetwork` is a self_link, this field is ignored in favor of the project
defined in the subnetwork self_link. If the `subnetwork` is a name and this
field is not provided, the provider project is used.
*/
  SubnetworkProject?: string;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.
  StackType?: string;

  // The prefix length of the primary internal IPv6 range.
  InternalIpv6PrefixLength?: number;

  /*
An array of IPv6 access configurations for this interface.
Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig
specified, then this instance will have no external IPv6 Internet access. Structure documented below.
*/
  Ipv6AccessConfigs?: Array<Compute_InstanceNetworkInterfaceIpv6AccessConfig>;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  Ipv6Address?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  AliasIpRanges?: Array<Compute_InstanceNetworkInterfaceAliasIpRange>;

  /*
One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet.
This field is always inherited from its subnetwork.
*/
  Ipv6AccessType?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  QueueCount?: number;

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

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  AccessConfigs?: Array<Compute_InstanceNetworkInterfaceAccessConfig>;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;

  /*
The name or self_link of the network to attach this interface to.
Either `network` or `subnetwork` must be provided. If network isn't provided it will
be inferred from the subnetwork.
*/
  Network?: string;

  // The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.
  NicType?: string;
}

export function Compute_InstanceNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StackType",
      "The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.",
      [],
      false,
      false,
    ),
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
      "The name or self_link of the subnetwork to attach this\ninterface to. Either `network` or `subnetwork` must be provided. If network isn't provided\nit will be inferred from the subnetwork. The subnetwork must exist in the same region this\ninstance will be created in. If the network resource is in\n[legacy](https://cloud.google.com/vpc/docs/legacy) mode, do not specify this field. If the\nnetwork is in auto subnet mode, specifying the subnetwork is optional. If the network is\nin custom subnet mode, specifying the subnetwork is required.",
      [],
      false,
      false,
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
      InputType.String,
      "Ipv6AccessType",
      "One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet.\nThis field is always inherited from its subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubnetworkProject",
      "The project in which the subnetwork belongs.\nIf the `subnetwork` is a self_link, this field is ignored in favor of the project\ndefined in the subnetwork self_link. If the `subnetwork` is a name and this\nfield is not provided, the provider project is used.",
      [],
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
      "NetworkAttachment",
      "The URL of the network attachment that this interface should connect to in the following format: `projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}`.",
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
      "An array of IPv6 access configurations for this interface.\nCurrently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig\nspecified, then this instance will have no external IPv6 Internet access. Structure documented below.",
      Compute_InstanceNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AliasIpRanges",
      "An\narray of alias IP ranges for this network interface. Can only be specified for network\ninterfaces on subnet-mode networks. Structure documented below.",
      Compute_InstanceNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AccessConfigs",
      "Access configurations, i.e. IPs via which this instance can be accessed via the Internet.",
      Compute_InstanceNetworkInterfaceAccessConfig_GetTypes(),
      false,
      false,
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
      "Network",
      "The name or self_link of the network to attach this interface to.\nEither `network` or `subnetwork` must be provided. If network isn't provided it will\nbe inferred from the subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NicType",
      "The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.",
      [],
      false,
      true,
    ),
  ];
}
