import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  PublicPtrDomainName?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.
  ExternalIpv6?: string;

  // The prefix length of the external IPv6 range.
  ExternalIpv6PrefixLength?: string;

  // The name of this access configuration.
  Name?: string;

  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.
*/
  NetworkTier?: string;
}

export function Compute_RegionInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The domain name to be used when creating DNSv6 records for the external IPv6 ranges.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalIpv6PrefixLength",
      "The prefix length of the external IPv6 range.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of this access configuration.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkTier",
      "The service-level to be provided for IPv6 traffic when the\nsubnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.",
      [],
      true,
      true,
    ),
  ];
}
