export interface CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  AllowPlaybackInterruption?: boolean;

  // URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  AudioUri?: string;
}
