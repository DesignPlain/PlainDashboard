import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceNetworkInterfaceAccessConfig {
  // The [networking tier][network-tier] used for configuring this instance. One of `PREMIUM` or `STANDARD`.
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  /*
The IP address that is be 1:1 mapped to the instance's
network ip.
*/
  NatIp?: string;
}

export function Compute_getInstanceNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NatIp",
      "The IP address that is be 1:1 mapped to the instance's\nnetwork ip.",
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
