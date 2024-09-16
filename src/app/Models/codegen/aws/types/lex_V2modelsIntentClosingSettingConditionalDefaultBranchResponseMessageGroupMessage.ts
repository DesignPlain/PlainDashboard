import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage';
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage';

export interface lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage {
  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage;
}

export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
