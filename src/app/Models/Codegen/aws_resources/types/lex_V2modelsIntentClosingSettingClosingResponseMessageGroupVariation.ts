import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage";
import {
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage_GetTypes,
} from "./lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage";

export interface lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPayload",
      "Configuration block for a message in a custom format defined by the client application. See `custom_payload`.",
      lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.",
      lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "Configuration block for a message in plain text format. See `plain_text_message`.",
      lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.",
      lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
