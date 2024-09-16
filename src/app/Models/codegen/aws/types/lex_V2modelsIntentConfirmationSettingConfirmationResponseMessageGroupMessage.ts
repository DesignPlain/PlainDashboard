import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload';

export interface lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage {
  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard;

  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
  ];
}
