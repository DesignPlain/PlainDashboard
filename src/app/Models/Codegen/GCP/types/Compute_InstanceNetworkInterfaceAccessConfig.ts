import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceNetworkInterfaceAccessConfig {
  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  NatIp?: string;

  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM or STANDARD tier is valid for IPv6.
*/
  NetworkTier?: string;

  /*
The domain name to be used when creating DNSv6
records for the external IPv6 ranges..
*/
  PublicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;
}

export function Compute_InstanceNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NatIp",
      "The IP address that will be 1:1 mapped to the instance's\nnetwork ip. If not given, one will be generated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkTier",
      "The service-level to be provided for IPv6 traffic when the\nsubnet has an external subnet. Only PREMIUM or STANDARD tier is valid for IPv6.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The domain name to be used when creating DNSv6\nrecords for the external IPv6 ranges..",
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
  ];
}
