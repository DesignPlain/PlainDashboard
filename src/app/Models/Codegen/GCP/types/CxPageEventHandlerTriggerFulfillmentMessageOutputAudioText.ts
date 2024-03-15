export interface CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  AllowPlaybackInterruption?: boolean;

  // The SSML text to be synthesized. For more information, see SSML.
  Ssml?: string;

  // The raw text to be synthesized.
  Text?: string;
}
