import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage";

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
  ];
}
