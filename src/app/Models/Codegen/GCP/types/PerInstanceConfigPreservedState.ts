import { PerInstanceConfigPreservedStateInternalIp } from "./PerInstanceConfigPreservedStateInternalIp";
import { PerInstanceConfigPreservedStateDisk } from "./PerInstanceConfigPreservedStateDisk";
import { PerInstanceConfigPreservedStateExternalIp } from "./PerInstanceConfigPreservedStateExternalIp";

export interface PerInstanceConfigPreservedState {
  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  Metadata?: Map<string, string>;

  /*
Stateful disks for the instance.
Structure is documented below.
*/
  Disks?: Array<PerInstanceConfigPreservedStateDisk>;

  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  ExternalIps?: Array<PerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  InternalIps?: Array<PerInstanceConfigPreservedStateInternalIp>;
}
