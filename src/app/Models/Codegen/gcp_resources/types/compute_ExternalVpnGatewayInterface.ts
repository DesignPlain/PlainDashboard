import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_ExternalVpnGatewayInterface {
  /*
The numeric ID for this interface. Allowed values are based on the redundancy type
of this external VPN gateway
- `0 - SINGLE_IP_INTERNALLY_REDUNDANT`
- `0, 1 - TWO_IPS_REDUNDANCY`
- `0, 1, 2, 3 - FOUR_IPS_REDUNDANCY`
*/
  id?: number;

  /*
IP address of the interface in the external VPN gateway.
Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine.
*/
  ipAddress?: string;
}

export function compute_ExternalVpnGatewayInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "id",
      "The numeric ID for this interface. Allowed values are based on the redundancy type\nof this external VPN gateway\n* `0 - SINGLE_IP_INTERNALLY_REDUNDANT`\n* `0, 1 - TWO_IPS_REDUNDANCY`\n* `0, 1, 2, 3 - FOUR_IPS_REDUNDANCY`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "IP address of the interface in the external VPN gateway.\nOnly IPv4 is supported. This IP address can be either from\nyour on-premise gateway or another Cloud provider's VPN gateway,\nit cannot be an IP address from Google Compute Engine.",
      [],
      false,
      true,
    ),
  ];
}
