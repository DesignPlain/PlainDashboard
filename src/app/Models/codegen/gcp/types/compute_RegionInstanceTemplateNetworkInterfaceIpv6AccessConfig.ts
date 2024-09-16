import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.
  externalIpv6?: string;

  // The prefix length of the external IPv6 range.
  externalIpv6PrefixLength?: string;

  // The name of this access configuration.
  name?: string;

  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.
*/
  networkTier?: string;

  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  publicPtrDomainName?: string;
}

export function compute_RegionInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'externalIpv6',
      'The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'externalIpv6PrefixLength',
      'The prefix length of the external IPv6 range.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of this access configuration.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkTier',
      'The service-level to be provided for IPv6 traffic when the\nsubnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicPtrDomainName',
      'The domain name to be used when creating DNSv6 records for the external IPv6 ranges.',
      () => [],
      false,
      true,
    ),
  ];
}
