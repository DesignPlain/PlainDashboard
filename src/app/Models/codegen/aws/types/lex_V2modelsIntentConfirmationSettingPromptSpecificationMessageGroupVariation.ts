import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation {
  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}