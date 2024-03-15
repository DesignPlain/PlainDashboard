import { ManagedZonePeeringConfigTargetNetwork } from "./ManagedZonePeeringConfigTargetNetwork";

export interface ManagedZonePeeringConfig {
  /*
The network with which to peer.
Structure is documented below.
*/
  TargetNetwork?: ManagedZonePeeringConfigTargetNetwork;
}
