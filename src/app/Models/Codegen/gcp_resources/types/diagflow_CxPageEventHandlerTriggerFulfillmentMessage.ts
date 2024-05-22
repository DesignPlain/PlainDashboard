import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageTelephonyTransferCall,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageTelephonyTransferCall_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessageTelephonyTransferCall";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageText,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageText_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessageText";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageConversationSuccess,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageConversationSuccess_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessageConversationSuccess";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageLiveAgentHandoff,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageLiveAgentHandoff_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessageLiveAgentHandoff";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText";
import {
  diagflow_CxPageEventHandlerTriggerFulfillmentMessagePlayAudio,
  diagflow_CxPageEventHandlerTriggerFulfillmentMessagePlayAudio_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillmentMessagePlayAudio";

export interface diagflow_CxPageEventHandlerTriggerFulfillmentMessage {
  /*
The text response message.
Structure is documented below.
*/
  text?: diagflow_CxPageEventHandlerTriggerFulfillmentMessageText;

  // The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  channel?: string;

  /*
Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.
Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.
You may set this, for example:
- In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.
- In a webhook response when you determine that you handled the customer issue.
Structure is documented below.
*/
  conversationSuccess?: diagflow_CxPageEventHandlerTriggerFulfillmentMessageConversationSuccess;

  /*
Indicates that the conversation should be handed off to a live agent.
Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
You may set this, for example:
- In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.
- In a webhook response when you determine that the customer issue can only be handled by a human.
Structure is documented below.
*/
  liveAgentHandoff?: diagflow_CxPageEventHandlerTriggerFulfillmentMessageLiveAgentHandoff;

  /*
A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
Structure is documented below.
*/
  outputAudioText?: diagflow_CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText;

  // A custom, platform-specific payload.
  payload?: string;

  /*
Specifies an audio clip to be played by the client as part of the response.
Structure is documented below.
*/
  playAudio?: diagflow_CxPageEventHandlerTriggerFulfillmentMessagePlayAudio;

  /*
Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
Structure is documented below.
*/
  telephonyTransferCall?: diagflow_CxPageEventHandlerTriggerFulfillmentMessageTelephonyTransferCall;
}

export function diagflow_CxPageEventHandlerTriggerFulfillmentMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "text",
      "The text response message.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessageText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "channel",
      "The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conversationSuccess",
      "Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.\nDialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.\nYou may set this, for example:\n* In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.\n* In a webhook response when you determine that you handled the customer issue.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessageConversationSuccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "liveAgentHandoff",
      "Indicates that the conversation should be handed off to a live agent.\nDialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.\nYou may set this, for example:\n* In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.\n* In a webhook response when you determine that the customer issue can only be handled by a human.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessageLiveAgentHandoff_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputAudioText",
      "A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessageOutputAudioText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "payload",
      "A custom, platform-specific payload.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "playAudio",
      "Specifies an audio clip to be played by the client as part of the response.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessagePlayAudio_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "telephonyTransferCall",
      "Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillmentMessageTelephonyTransferCall_GetTypes(),
      false,
      false,
    ),
  ];
}
