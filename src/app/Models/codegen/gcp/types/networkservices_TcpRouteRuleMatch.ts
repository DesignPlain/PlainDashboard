import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_TcpRouteRuleMatch {
  /*
Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.
*/
  address?: string;

  // Specifies the destination port to match against.
  port?: string;
}

export function networkservices_TcpRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      'Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.\nBy default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address\'.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "port",
      "Specifies the destination port to match against.",
      () => [],
      true,
      false,
    ),
  ];
}
