import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard";

export interface lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation {
  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
  ];
}
