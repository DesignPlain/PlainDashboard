import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_QuickConnectQuickConnectConfigQueueConfig {
  // Specifies the identifier of the contact flow.
  contactFlowId?: string;

  // Specifies the identifier for the queue.
  queueId?: string;
}

export function connect_QuickConnectQuickConnectConfigQueueConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contactFlowId',
      'Specifies the identifier of the contact flow.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'queueId',
      'Specifies the identifier for the queue.',
      () => [],
      true,
      false,
    ),
  ];
}
