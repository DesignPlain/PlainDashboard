import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes,
} from './lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage';
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes,
} from './lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage';
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes,
} from './lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload';
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes,
} from './lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard';

export interface lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage {
  // Configuration block for a message in plain text format. See `plain_text_message`.
  plainTextMessage?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage;

  // Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.
  ssmlMessage?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage;

  // Configuration block for a message in a custom format defined by the client application. See `custom_payload`.
  customPayload?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload;

  // Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.
  imageResponseCard?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard;
}

export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      'Configuration block for a message in Speech Synthesis Markup Language (SSML). See `ssml_message`.',
      () =>
        lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPayload',
      'Configuration block for a message in a custom format defined by the client application. See `custom_payload`.',
      () =>
        lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      'Configuration block for a message that defines a response card that the client application can show to the user. See `image_response_card`.',
      () =>
        lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      'Configuration block for a message in plain text format. See `plain_text_message`.',
      () =>
        lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
