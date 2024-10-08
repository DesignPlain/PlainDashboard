import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage';

export interface lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
  ];
}
