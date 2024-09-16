import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeTargetParametersSqsQueueParameters {
  // This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of sent messages.
  messageDeduplicationId?: string;

  // The FIFO message group ID to use as the target.
  messageGroupId?: string;
}

export function pipes_PipeTargetParametersSqsQueueParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'messageGroupId',
      'The FIFO message group ID to use as the target.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageDeduplicationId',
      'This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of sent messages.',
      () => [],
      false,
      false,
    ),
  ];
}
