import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceNetworkInterfaceIpv6AccessConfig {
  // The name of the instance. One of `name` or `self_link` must be provided.
  Name?: string;

  // The [networking tier][network-tier] used for configuring this instance. One of `PREMIUM` or `STANDARD`.
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
  ExternalIpv6?: string;

  // The prefix length of the external IPv6 range.
  ExternalIpv6PrefixLength?: string;
}

export function Compute_getInstanceNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExternalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalIpv6PrefixLength",
      "The prefix length of the external IPv6 range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance. One of `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkTier",
      "The [networking tier][network-tier] used for configuring this instance. One of `PREMIUM` or `STANDARD`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The DNS domain name for the public PTR record.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecurityPolicy",
      "A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.",
      [],
      true,
      false,
    ),
  ];
}
