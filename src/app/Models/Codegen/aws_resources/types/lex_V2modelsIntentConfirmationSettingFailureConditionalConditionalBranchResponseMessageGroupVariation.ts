import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage";

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
  ];
}
