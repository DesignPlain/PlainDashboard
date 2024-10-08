import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard';

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
