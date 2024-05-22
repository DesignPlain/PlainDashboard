import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_VpnConnectionDetailCloudVpn {
  /*
(Output)
The created Cloud VPN gateway name.
*/
  gateway?: string;
}

export function edgecontainer_VpnConnectionDetailCloudVpn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gateway",
      "(Output)\nThe created Cloud VPN gateway name.",
      [],
      false,
      false,
    ),
  ];
}
