import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_VpnConnectionDetailCloudVpn,
  Edgecontainer_VpnConnectionDetailCloudVpn_GetTypes,
} from "./Edgecontainer_VpnConnectionDetailCloudVpn";
import {
  Edgecontainer_VpnConnectionDetailCloudRouter,
  Edgecontainer_VpnConnectionDetailCloudRouter_GetTypes,
} from "./Edgecontainer_VpnConnectionDetailCloudRouter";

export interface Edgecontainer_VpnConnectionDetail {
  /*
(Output)
The Cloud Router info.
Structure is documented below.
*/
  CloudRouters?: Array<Edgecontainer_VpnConnectionDetailCloudRouter>;

  /*
(Output)
Each connection has multiple Cloud VPN gateways.
Structure is documented below.
*/
  CloudVpns?: Array<Edgecontainer_VpnConnectionDetailCloudVpn>;

  /*
(Output)
The error message. This is only populated when state=ERROR.
*/
  Error?: string;

  /*
(Output)
The current connection state.
*/
  State?: string;
}

export function Edgecontainer_VpnConnectionDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CloudRouters",
      "(Output)\nThe Cloud Router info.\nStructure is documented below.",
      Edgecontainer_VpnConnectionDetailCloudRouter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CloudVpns",
      "(Output)\nEach connection has multiple Cloud VPN gateways.\nStructure is documented below.",
      Edgecontainer_VpnConnectionDetailCloudVpn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Error",
      "(Output)\nThe error message. This is only populated when state=ERROR.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nThe current connection state.",
      [],
      false,
      false,
    ),
  ];
}
