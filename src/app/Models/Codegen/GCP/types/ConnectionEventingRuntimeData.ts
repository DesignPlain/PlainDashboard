import { ConnectionEventingRuntimeDataStatus } from "./ConnectionEventingRuntimeDataStatus";

export interface ConnectionEventingRuntimeData {
  // Events listener endpoint. The value will populated after provisioning the events listener.
  EventsListenerEndpoint?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  Statuses?: Array<ConnectionEventingRuntimeDataStatus>;
}
