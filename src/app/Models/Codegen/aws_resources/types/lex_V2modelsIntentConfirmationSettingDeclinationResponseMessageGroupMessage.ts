import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload";

export interface lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage {
  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
