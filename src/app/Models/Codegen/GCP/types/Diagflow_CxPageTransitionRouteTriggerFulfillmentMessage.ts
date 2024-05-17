import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageConversationSuccess,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageConversationSuccess_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageConversationSuccess";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageTelephonyTransferCall,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageTelephonyTransferCall_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageTelephonyTransferCall";
import {
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageText,
  Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageText_GetTypes,
} from "./Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageText";

export interface Diagflow_CxPageTransitionRouteTriggerFulfillmentMessage {
  /*
The text response message.
Structure is documented below.
*/
  Text?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageText;

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
  ConversationSuccess?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageConversationSuccess;

  /*
Indicates that the conversation should be handed off to a live agent.
Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
You may set this, for example:
- In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.
- In a webhook response when you determine that the customer issue can only be handled by a human.
Structure is documented below.
*/
  LiveAgentHandoff?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff;

  /*
A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
Structure is documented below.
*/
  OutputAudioText?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText;

  // A custom, platform-specific payload.
  Payload?: string;

  /*
Specifies an audio clip to be played by the client as part of the response.
Structure is documented below.
*/
  PlayAudio?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio;

  /*
Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
Structure is documented below.
*/
  TelephonyTransferCall?: Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageTelephonyTransferCall;
}

export function Diagflow_CxPageTransitionRouteTriggerFulfillmentMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Payload",
      "A custom, platform-specific payload.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PlayAudio",
      "Specifies an audio clip to be played by the client as part of the response.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TelephonyTransferCall",
      "Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageTelephonyTransferCall_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Text",
      "The text response message.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Channel",
      "The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConversationSuccess",
      "Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.\nDialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.\nYou may set this, for example:\n* In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.\n* In a webhook response when you determine that you handled the customer issue.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageConversationSuccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LiveAgentHandoff",
      "Indicates that the conversation should be handed off to a live agent.\nDialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.\nYou may set this, for example:\n* In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.\n* In a webhook response when you determine that the customer issue can only be handled by a human.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OutputAudioText",
      "A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.\nStructure is documented below.",
      Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText_GetTypes(),
      false,
      false,
    ),
  ];
}
