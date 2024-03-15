import { ConnectionDestinationConfigDestination } from "./ConnectionDestinationConfigDestination";

export interface ConnectionDestinationConfig {
  /*
The destinations for the key.
Structure is documented below.
*/
  Destinations?: Array<ConnectionDestinationConfigDestination>;

  // The key is the destination identifier that is supported by the Connector.
  Key?: string;
}
