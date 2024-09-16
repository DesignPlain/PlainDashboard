import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent {
  // Name of the event.
  event?: string;
}

export function diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'event',
      'Name of the event.',
      () => [],
      true,
      false,
    ),
  ];
}
