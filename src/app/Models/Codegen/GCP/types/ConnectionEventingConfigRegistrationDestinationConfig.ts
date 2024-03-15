import { ConnectionEventingConfigRegistrationDestinationConfigDestination } from "./ConnectionEventingConfigRegistrationDestinationConfigDestination";

export interface ConnectionEventingConfigRegistrationDestinationConfig {
  /*
destinations for the connection
Structure is documented below.
*/
  Destinations?: Array<ConnectionEventingConfigRegistrationDestinationConfigDestination>;

  // Key for the connection
  Key?: string;
}
