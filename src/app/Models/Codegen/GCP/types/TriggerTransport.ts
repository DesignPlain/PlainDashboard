import { TriggerTransportPubsub } from "./TriggerTransportPubsub";

export interface TriggerTransport {
  // The Pub/Sub topic and subscription used by Eventarc as delivery intermediary.
  Pubsub?: TriggerTransportPubsub;
}
