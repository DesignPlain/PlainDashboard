import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig {
  /*
BGP autonomous system number (ASN) for the network that contains the
external peer device.
*/
  asn?: number;

  /*
The IP address of the control plane node that connects to the external
peer.
If you don't specify any control plane nodes, all control plane nodes
can connect to the external peer. If you specify one or more IP addresses,
only the nodes specified participate in peering sessions.
*/
  controlPlaneNodes?: Array<string>;

  // The IP address of the external peer device.
  ipAddress?: string;
}

export function gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "asn",
      "BGP autonomous system number (ASN) for the network that contains the\nexternal peer device.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "controlPlaneNodes",
      "The IP address of the control plane node that connects to the external\npeer.\nIf you don't specify any control plane nodes, all control plane nodes\ncan connect to the external peer. If you specify one or more IP addresses,\nonly the nodes specified participate in peering sessions.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "The IP address of the external peer device.",
      () => [],
      true,
      false,
    ),
  ];
}
