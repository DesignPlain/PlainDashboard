import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceFromMachineImageNetworkInterfaceIpv6AccessConfig {
  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
  externalIpv6?: string;

  // The prefix length of the external IPv6 range.
  externalIpv6PrefixLength?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  // The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  networkTier?: string;

  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  publicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;
}

export function compute_InstanceFromMachineImageNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalIpv6PrefixLength",
      "The prefix length of the external IPv6 range.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkTier",
      "The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicPtrDomainName",
      "The domain name to be used when creating DNSv6 records for the external IPv6 ranges.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityPolicy",
      "A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.",
      () => [],
      false,
      false,
    ),
  ];
}
