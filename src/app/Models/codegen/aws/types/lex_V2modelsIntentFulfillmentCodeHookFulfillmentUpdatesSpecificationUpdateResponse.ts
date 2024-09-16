import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup,
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup_GetTypes,
} from './lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup';

export interface lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse {
  // Frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
  frequencyInSeconds?: number;

  // Between 1-5 configuration block message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup>;

  // Whether the user can interrupt the start message while it is playing.
  allowInterrupt?: boolean;
}

export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messageGroups',
      'Between 1-5 configuration block message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user. See `message_group`.',
      () =>
        lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowInterrupt',
      'Whether the user can interrupt the start message while it is playing.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'frequencyInSeconds',
      'Frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.',
      () => [],
      true,
      false,
    ),
  ];
}
