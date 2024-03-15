export interface TriggerWebhookConfig {
  // Resource name for the secret required as a URL parameter.
  Secret?: string;

  /*
(Output)
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  State?: string;
}
