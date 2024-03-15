export interface CxPageEventHandlerTriggerFulfillmentMessageText {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  AllowPlaybackInterruption?: boolean;

  // A collection of text responses.
  Texts?: Array<string>;
}
