import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_HaVpnGatewayVpnInterface {
  // The numeric ID of this VPN gateway interface.
  id?: number;

  /*
URL of the interconnect attachment resource. When the value
of this field is present, the VPN Gateway will be used for
IPsec-encrypted Cloud Interconnect; all Egress or Ingress
traffic for this VPN Gateway interface will go through the
specified interconnect attachment resource.
Not currently available publicly.
*/
  interconnectAttachment?: string;

  /*
(Output)
The external IP address for this VPN gateway interface.
*/
  ipAddress?: string;
}

export function compute_HaVpnGatewayVpnInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'id',
      'The numeric ID of this VPN gateway interface.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'interconnectAttachment',
      'URL of the interconnect attachment resource. When the value\nof this field is present, the VPN Gateway will be used for\nIPsec-encrypted Cloud Interconnect; all Egress or Ingress\ntraffic for this VPN Gateway interface will go through the\nspecified interconnect attachment resource.\nNot currently available publicly.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      '(Output)\nThe external IP address for this VPN gateway interface.',
      () => [],
      false,
      false,
    ),
  ];
}
