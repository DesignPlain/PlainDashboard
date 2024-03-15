export interface TriggerPubsubConfig {
  // Service account that will make the push request.
  ServiceAccountEmail?: string;

  /*
(Output)
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  State?: string;

  /*
(Output)
Output only. Name of the subscription.
*/
  Subscription?: string;

  // The name of the topic from which this subscription is receiving messages.
  Topic?: string;
}