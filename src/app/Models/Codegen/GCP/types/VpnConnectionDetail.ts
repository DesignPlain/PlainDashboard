import { VpnConnectionDetailCloudVpn } from "./VpnConnectionDetailCloudVpn";
import { VpnConnectionDetailCloudRouter } from "./VpnConnectionDetailCloudRouter";

export interface VpnConnectionDetail {
  /*
(Output)
The Cloud Router info.
Structure is documented below.
*/
  CloudRouters?: Array<VpnConnectionDetailCloudRouter>;

  /*
(Output)
Each connection has multiple Cloud VPN gateways.
Structure is documented below.
*/
  CloudVpns?: Array<VpnConnectionDetailCloudVpn>;

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
