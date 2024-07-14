import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceNetworkInterfaceAccessConfig {
  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM or STANDARD tier is valid for IPv6.
*/
  networkTier?: string;

  /*
The domain name to be used when creating DNSv6
records for the external IPv6 ranges..
*/
  publicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;

  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  natIp?: string;
}

export function compute_InstanceNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkTier",
      "The service-level to be provided for IPv6 traffic when the\nsubnet has an external subnet. Only PREMIUM or STANDARD tier is valid for IPv6.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicPtrDomainName",
      "The domain name to be used when creating DNSv6\nrecords for the external IPv6 ranges..",
      [],
      false,
      false,
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
      "natIp",
      "The IP address that will be 1:1 mapped to the instance's\nnetwork ip. If not given, one will be generated.",
      [],
      false,
      false,
    ),
  ];
}
