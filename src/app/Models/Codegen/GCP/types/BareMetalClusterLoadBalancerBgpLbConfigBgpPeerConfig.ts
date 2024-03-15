export interface BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig {
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
