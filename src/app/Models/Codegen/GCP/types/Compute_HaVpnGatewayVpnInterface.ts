import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_HaVpnGatewayVpnInterface {
  // The numeric ID of this VPN gateway interface.
  Id?: number;

  /*
URL of the interconnect attachment resource. When the value
of this field is present, the VPN Gateway will be used for
IPsec-encrypted Cloud Interconnect; all Egress or Ingress
traffic for this VPN Gateway interface will go through the
specified interconnect attachment resource.
Not currently available publicly.
*/
  InterconnectAttachment?: string;

  /*
(Output)
The external IP address for this VPN gateway interface.
*/
  IpAddress?: string;
}

export function Compute_HaVpnGatewayVpnInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Id",
      "The numeric ID of this VPN gateway interface.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "InterconnectAttachment",
      "URL of the interconnect attachment resource. When the value\nof this field is present, the VPN Gateway will be used for\nIPsec-encrypted Cloud Interconnect; all Egress or Ingress\ntraffic for this VPN Gateway interface will go through the\nspecified interconnect attachment resource.\nNot currently available publicly.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "(Output)\nThe external IP address for this VPN gateway interface.",
      [],
      false,
      false,
    ),
  ];
}
