import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateNetworkInterface {
  /*
Associate a public ip address with the network interface.
Boolean value, can be left unset.
*/
  associatePublicIpAddress?: string;

  // Description of the network interface.
  description?: string;

  // The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa`.
  interfaceType?: string;

  // The number of IPv4 prefixes to be automatically assigned to the network interface. Conflicts with `ipv4_prefixes`
  ipv4PrefixCount?: number;

  // One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Conflicts with `ipv6_address_count`
  ipv6Addresses?: Array<string>;

  // The number of IPv6 prefixes to be automatically assigned to the network interface. Conflicts with `ipv6_prefixes`
  ipv6PrefixCount?: number;

  // The ID of the network interface to attach.
  networkInterfaceId?: string;

  // A list of security group IDs to associate.
  securityGroups?: Array<string>;

  // Whether the network interface should be destroyed on instance termination.
  deleteOnTermination?: string;

  // The integer index of the network interface attachment.
  deviceIndex?: number;

  // The number of secondary private IPv4 addresses to assign to a network interface. Conflicts with `ipv4_addresses`
  ipv4AddressCount?: number;

  // The number of IPv6 addresses to assign to a network interface. Conflicts with `ipv6_addresses`
  ipv6AddressCount?: number;

  // The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
  networkCardIndex?: number;

  //
  primaryIpv6?: string;

  // The primary private IPv4 address.
  privateIpAddress?: string;

  // The VPC Subnet ID to associate.
  subnetId?: string;

  /*
Associate a Carrier IP address with `eth0` for a new network interface.
Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface.
Boolean value, can be left unset.
*/
  associateCarrierIpAddress?: string;

  // One or more private IPv4 addresses to associate. Conflicts with `ipv4_address_count`
  ipv4Addresses?: Array<string>;

  // One or more IPv4 prefixes to be assigned to the network interface. Conflicts with `ipv4_prefix_count`
  ipv4Prefixes?: Array<string>;

  // One or more IPv6 prefixes to be assigned to the network interface. Conflicts with `ipv6_prefix_count`
  ipv6Prefixes?: Array<string>;
}

export function ec2_LaunchTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ipv6AddressCount",
      "The number of IPv6 addresses to assign to a network interface. Conflicts with `ipv6_addresses`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "networkCardIndex",
      "The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The VPC Subnet ID to associate.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ipv6PrefixCount",
      "The number of IPv6 prefixes to be automatically assigned to the network interface. Conflicts with `ipv6_prefixes`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "A list of security group IDs to associate.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deleteOnTermination",
      "Whether the network interface should be destroyed on instance termination.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "deviceIndex",
      "The integer index of the network interface attachment.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "The ID of the network interface to attach.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primaryIpv6",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "The primary private IPv4 address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "associateCarrierIpAddress",
      "Associate a Carrier IP address with `eth0` for a new network interface.\nUse this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface.\nBoolean value, can be left unset.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "associatePublicIpAddress",
      "Associate a public ip address with the network interface.\nBoolean value, can be left unset.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the network interface.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ipv4PrefixCount",
      "The number of IPv4 prefixes to be automatically assigned to the network interface. Conflicts with `ipv4_prefixes`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6Addresses",
      "One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Conflicts with `ipv6_address_count`",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ipv4AddressCount",
      "The number of secondary private IPv4 addresses to assign to a network interface. Conflicts with `ipv4_addresses`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv4Addresses",
      "One or more private IPv4 addresses to associate. Conflicts with `ipv4_address_count`",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv4Prefixes",
      "One or more IPv4 prefixes to be assigned to the network interface. Conflicts with `ipv4_prefix_count`",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6Prefixes",
      "One or more IPv6 prefixes to be assigned to the network interface. Conflicts with `ipv6_prefix_count`",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interfaceType",
      "The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa`.",
      () => [],
      false,
      false,
    ),
  ];
}
