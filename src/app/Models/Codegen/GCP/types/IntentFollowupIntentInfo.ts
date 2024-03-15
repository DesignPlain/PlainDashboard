export interface IntentFollowupIntentInfo {
  /*
The unique identifier of the followup intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  FollowupIntentName?: string;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  ParentFollowupIntentName?: string;
}
