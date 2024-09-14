import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage";

export interface lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessage {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage;
}

export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      () =>
        lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      () =>
        lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      () =>
        lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      () =>
        lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
