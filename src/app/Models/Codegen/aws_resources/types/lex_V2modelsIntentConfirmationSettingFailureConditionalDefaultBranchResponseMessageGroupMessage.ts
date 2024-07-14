import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage";

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage {
  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
  ];
}
