import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceNetworkInterfaceIpv6AccessConfig {
  // The [networking tier][network-tier] used for configuring this instance. One of `PREMIUM` or `STANDARD`.
  networkTier?: string;

  // The DNS domain name for the public PTR record.
  publicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
  externalIpv6?: string;

  // The prefix length of the external IPv6 range.
  externalIpv6PrefixLength?: string;

  // The name of the instance. One of `name` or `self_link` must be provided.
  name?: string;
}

export function compute_getInstanceNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkTier",
      "The [networking tier][network-tier] used for configuring this instance. One of `PREMIUM` or `STANDARD`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicPtrDomainName",
      "The DNS domain name for the public PTR record.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityPolicy",
      "A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalIpv6PrefixLength",
      "The prefix length of the external IPv6 range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance. One of `name` or `self_link` must be provided.",
      () => [],
      true,
      false,
    ),
  ];
}
