import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage';

export interface lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
