import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceTemplateNetworkInterfaceAccessConfig {
  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  NatIp?: string;

  /*
The [networking tier][network-tier] used for configuring
this instance template. This field can take the following values: PREMIUM or
STANDARD. If this field is not specified, it is assumed to be PREMIUM.
*/
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;
}

export function Compute_getInstanceTemplateNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NatIp",
      "The IP address that will be 1:1 mapped to the instance's\nnetwork ip. If not given, one will be generated.",
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
    new DynamicUIProps(
      InputType.String,
      "PublicPtrDomainName",
      "The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.",
      [],
      true,
      false,
    ),
  ];
}
