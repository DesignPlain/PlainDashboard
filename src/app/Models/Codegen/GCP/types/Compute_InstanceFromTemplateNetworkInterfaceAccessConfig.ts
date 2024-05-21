import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceFromTemplateNetworkInterfaceAccessConfig {
  // The IP address that is be 1:1 mapped to the instance's network ip.
  natIp?: string;

  // The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
  networkTier?: string;

  // The DNS domain name for the public PTR record.
  publicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  securityPolicy?: string;
}

export function compute_InstanceFromTemplateNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicPtrDomainName",
      "The DNS domain name for the public PTR record.",
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
      "The IP address that is be 1:1 mapped to the instance's network ip.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkTier",
      "The networking tier used for configuring this instance. One of PREMIUM or STANDARD.",
      [],
      false,
      false,
    ),
  ];
}
