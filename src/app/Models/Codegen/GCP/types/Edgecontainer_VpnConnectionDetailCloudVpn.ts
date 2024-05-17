import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_VpnConnectionDetailCloudVpn {
  /*
(Output)
The created Cloud VPN gateway name.
*/
  Gateway?: string;
}

export function Edgecontainer_VpnConnectionDetailCloudVpn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Gateway",
      "(Output)\nThe created Cloud VPN gateway name.",
      [],
      false,
      false,
    ),
  ];
}
