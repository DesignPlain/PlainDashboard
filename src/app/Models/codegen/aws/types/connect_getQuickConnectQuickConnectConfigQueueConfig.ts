import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_getQuickConnectQuickConnectConfigQueueConfig {
  // Identifier of the contact flow.
  contactFlowId?: string;

  // Identifier for the queue.
  queueId?: string;
}

export function connect_getQuickConnectQuickConnectConfigQueueConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contactFlowId',
      'Identifier of the contact flow.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'queueId',
      'Identifier for the queue.',
      () => [],
      true,
      false,
    ),
  ];
}
