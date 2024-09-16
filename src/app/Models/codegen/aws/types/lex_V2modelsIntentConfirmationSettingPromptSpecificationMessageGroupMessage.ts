import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard';
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage';
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage';
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload';

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage {
  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
  ];
}
