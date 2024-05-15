import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceTemplateNetworkInterfaceAccessConfig {
  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  NatIp?: string;

  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.
*/
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;
}

export function Compute_RegionInstanceTemplateNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NatIp",
      "The IP address that will be 1:1 mapped to the instance's\nnetwork ip. If not given, one will be generated.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkTier",
      "The service-level to be provided for IPv6 traffic when the\nsubnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.",
      [],
      false,
      true,
    ),
  ];
}
