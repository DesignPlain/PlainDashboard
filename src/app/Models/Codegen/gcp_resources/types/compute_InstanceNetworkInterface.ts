import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceNetworkInterfaceAccessConfig,
  compute_InstanceNetworkInterfaceAccessConfig_GetTypes,
} from "./compute_InstanceNetworkInterfaceAccessConfig";
import {
  compute_InstanceNetworkInterfaceAliasIpRange,
  compute_InstanceNetworkInterfaceAliasIpRange_GetTypes,
} from "./compute_InstanceNetworkInterfaceAliasIpRange";
import {
  compute_InstanceNetworkInterfaceIpv6AccessConfig,
  compute_InstanceNetworkInterfaceIpv6AccessConfig_GetTypes,
} from "./compute_InstanceNetworkInterfaceIpv6AccessConfig";

export interface compute_InstanceNetworkInterface {
  // The URL of the network attachment that this interface should connect to in the following format: `projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}`.
  networkAttachment?: string;

  // The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  queueCount?: number;

  // The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.
  stackType?: string;

  // Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  accessConfigs?: Array<compute_InstanceNetworkInterfaceAccessConfig>;

  /*
An
array of alias IP ranges for this network interface. Can only be specified for network
interfaces on subnet-mode networks. Structure documented below.
*/
  aliasIpRanges?: Array<compute_InstanceNetworkInterfaceAliasIpRange>;

  // The prefix length of the primary internal IPv6 range.
  internalIpv6PrefixLength?: number;

  /*
An array of IPv6 access configurations for this interface.
Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig
specified, then this instance will have no external IPv6 Internet access. Structure documented below.
*/
  ipv6AccessConfigs?: Array<compute_InstanceNetworkInterfaceIpv6AccessConfig>;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;

  /*
One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet.
This field is always inherited from its subnetwork.
*/
  ipv6AccessType?: string;

  // An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  ipv6Address?: string;

  /*
The private IP address to assign to the instance. If
empty, the address will be automatically assigned.
*/
  networkIp?: string;

  // The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.
  nicType?: string;

  /*
The name or self_link of the subnetwork to attach this
interface to. Either `network` or `subnetwork` must be provided. If network isn't provided
it will be inferred from the subnetwork. The subnetwork must exist in the same region this
instance will be created in. If the network resource is in
[legacy](https://cloud.google.com/vpc/docs/legacy) mode, do not specify this field. If the
network is in auto subnet mode, specifying the subnetwork is optional. If the network is
in custom subnet mode, specifying the subnetwork is required.
*/
  subnetwork?: string;

  /*
The project in which the subnetwork belongs.
If the `subnetwork` is a self_link, this field is ignored in favor of the project
defined in the subnetwork self_link. If the `subnetwork` is a name and this
field is not provided, the provider project is used.
*/
  subnetworkProject?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  /*
The name or self_link of the network to attach this interface to.
Either `network` or `subnetwork` must be provided. If network isn't provided it will
be inferred from the subnetwork.
*/
  network?: string;
}

export function compute_InstanceNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkAttachment",
      "The URL of the network attachment that this interface should connect to in the following format: `projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityPolicy",
      "A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkIp",
      "The private IP address to assign to the instance. If\nempty, the address will be automatically assigned.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nicType",
      "The type of vNIC to be used on this interface. Possible values: GVNIC, VIRTIO_NET.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "stackType",
      "The stack type for this network interface to identify whether the IPv6 feature is enabled or not. Values are IPV4_IPV6 or IPV4_ONLY. If not specified, IPV4_ONLY will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6AccessType",
      "One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet.\nThis field is always inherited from its subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6Address",
      "An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queueCount",
      "The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessConfigs",
      "Access configurations, i.e. IPs via which this instance can be accessed via the Internet.",
      compute_InstanceNetworkInterfaceAccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "internalIpv6PrefixLength",
      "The prefix length of the primary internal IPv6 range.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name or self_link of the subnetwork to attach this\ninterface to. Either `network` or `subnetwork` must be provided. If network isn't provided\nit will be inferred from the subnetwork. The subnetwork must exist in the same region this\ninstance will be created in. If the network resource is in\n[legacy](https://cloud.google.com/vpc/docs/legacy) mode, do not specify this field. If the\nnetwork is in auto subnet mode, specifying the subnetwork is optional. If the network is\nin custom subnet mode, specifying the subnetwork is required.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The name or self_link of the network to attach this interface to.\nEither `network` or `subnetwork` must be provided. If network isn't provided it will\nbe inferred from the subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aliasIpRanges",
      "An\narray of alias IP ranges for this network interface. Can only be specified for network\ninterfaces on subnet-mode networks. Structure documented below.",
      compute_InstanceNetworkInterfaceAliasIpRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6AccessConfigs",
      "An array of IPv6 access configurations for this interface.\nCurrently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig\nspecified, then this instance will have no external IPv6 Internet access. Structure documented below.",
      compute_InstanceNetworkInterfaceIpv6AccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetworkProject",
      "The project in which the subnetwork belongs.\nIf the `subnetwork` is a self_link, this field is ignored in favor of the project\ndefined in the subnetwork self_link. If the `subnetwork` is a name and this\nfield is not provided, the provider project is used.",
      [],
      false,
      false,
    ),
  ];
}
