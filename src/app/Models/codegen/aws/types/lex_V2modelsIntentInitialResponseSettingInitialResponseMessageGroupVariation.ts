import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage';

export interface lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
