import { ConnectionProfileAlloydbSettings } from "./ConnectionProfileAlloydbSettings";

export interface ConnectionProfileAlloydb {
  // Required. The AlloyDB cluster ID that this connection profile is associated with.
  ClusterId?: string;

  /*
Immutable. Metadata used to create the destination AlloyDB cluster.
Structure is documented below.
*/
  Settings?: ConnectionProfileAlloydbSettings;
}
