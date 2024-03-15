import { PacketMirroringMirroredResourcesInstance } from "./PacketMirroringMirroredResourcesInstance";
import { PacketMirroringMirroredResourcesSubnetwork } from "./PacketMirroringMirroredResourcesSubnetwork";

export interface PacketMirroringMirroredResources {
  /*
All the listed instances will be mirrored.  Specify at most 50.
Structure is documented below.
*/
  Instances?: Array<PacketMirroringMirroredResourcesInstance>;

  /*
All instances in one of these subnetworks will be mirrored.
Structure is documented below.
*/
  Subnetworks?: Array<PacketMirroringMirroredResourcesSubnetwork>;

  // All instances with these tags will be mirrored.
  Tags?: Array<string>;
}
