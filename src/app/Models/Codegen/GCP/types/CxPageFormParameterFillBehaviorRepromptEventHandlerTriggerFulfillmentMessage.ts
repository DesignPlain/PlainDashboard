import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageOutputAudioText } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageOutputAudioText";
import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio";
import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageTelephonyTransferCall } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageTelephonyTransferCall";
import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageText } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageText";
import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageConversationSuccess } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageConversationSuccess";
import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageLiveAgentHandoff } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageLiveAgentHandoff";

export interface CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage {
  // A custom, platform-specific payload.
  Payload?: string;

  /*
Specifies an audio clip to be played by the client as part of the response.
Structure is documented below.
*/
  PlayAudio?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio;

  /*
Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
Structure is documented below.
*/
  TelephonyTransferCall?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageTelephonyTransferCall;

  /*
The text response message.
Structure is documented below.
*/
  Text?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageText;

  // The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  Channel?: string;

  /*
Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.
Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.
You may set this, for example:
- In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.
- In a webhook response when you determine that you handled the customer issue.
Structure is documented below.
*/
  ConversationSuccess?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageConversationSuccess;

  /*
Indicates that the conversation should be handed off to a live agent.
Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
You may set this, for example:
- In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.
- In a webhook response when you determine that the customer issue can only be handled by a human.
Structure is documented below.
*/
  LiveAgentHandoff?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageLiveAgentHandoff;

  /*
A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
Structure is documented below.
*/
  OutputAudioText?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageOutputAudioText;
}
