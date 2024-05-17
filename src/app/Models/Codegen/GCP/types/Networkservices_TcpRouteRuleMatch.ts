import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_TcpRouteRuleMatch {
  /*
Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.
*/
  Address?: string;

  // Specifies the destination port to match against.
  Port?: string;
}

export function Networkservices_TcpRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Address",
      'Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.\nBy default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address\'.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Port",
      "Specifies the destination port to match against.",
      [],
      true,
      false,
    ),
  ];
}
