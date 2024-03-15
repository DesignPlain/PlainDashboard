import { RegionPerInstanceConfigPreservedStateDisk } from "./RegionPerInstanceConfigPreservedStateDisk";
import { RegionPerInstanceConfigPreservedStateExternalIp } from "./RegionPerInstanceConfigPreservedStateExternalIp";
import { RegionPerInstanceConfigPreservedStateInternalIp } from "./RegionPerInstanceConfigPreservedStateInternalIp";

export interface RegionPerInstanceConfigPreservedState {
  /*
Stateful disks for the instance.
Structure is documented below.
*/
  Disks?: Array<RegionPerInstanceConfigPreservedStateDisk>;

  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  ExternalIps?: Array<RegionPerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  InternalIps?: Array<RegionPerInstanceConfigPreservedStateInternalIp>;

  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  Metadata?: Map<string, string>;
}
