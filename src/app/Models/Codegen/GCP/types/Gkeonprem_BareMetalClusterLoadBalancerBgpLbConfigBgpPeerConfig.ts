import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig {
  /*
BGP autonomous system number (ASN) for the network that contains the
external peer device.
*/
  Asn?: number;

  /*
The IP address of the control plane node that connects to the external
peer.
If you don't specify any control plane nodes, all control plane nodes
can connect to the external peer. If you specify one or more IP addresses,
only the nodes specified participate in peering sessions.
*/
  ControlPlaneNodes?: Array<string>;

  // The IP address of the external peer device.
  IpAddress?: string;
}

export function Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "The IP address of the external peer device.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Asn",
      "BGP autonomous system number (ASN) for the network that contains the\nexternal peer device.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ControlPlaneNodes",
      "The IP address of the control plane node that connects to the external\npeer.\nIf you don't specify any control plane nodes, all control plane nodes\ncan connect to the external peer. If you specify one or more IP addresses,\nonly the nodes specified participate in peering sessions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
