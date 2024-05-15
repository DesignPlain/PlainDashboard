import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  // The name of the instance template. One of `name`, `filter` or `self_link_unique` must be provided.
  Name?: string;

  /*
The [networking tier][network-tier] used for configuring
this instance template. This field can take the following values: PREMIUM or
STANDARD. If this field is not specified, it is assumed to be PREMIUM.
*/
  NetworkTier?: string;

  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  PublicPtrDomainName?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.
  ExternalIpv6?: string;

  // The prefix length of the external IPv6 range.
  ExternalIpv6PrefixLength?: string;
}

export function Compute_getInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The domain name to be used when creating DNSv6 records for the external IPv6 ranges.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.",
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
      "The name of the instance template. One of `name`, `filter` or `self_link_unique` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkTier",
      "The [networking tier][network-tier] used for configuring\nthis instance template. This field can take the following values: PREMIUM or\nSTANDARD. If this field is not specified, it is assumed to be PREMIUM.",
      [],
      true,
      false,
    ),
  ];
}
