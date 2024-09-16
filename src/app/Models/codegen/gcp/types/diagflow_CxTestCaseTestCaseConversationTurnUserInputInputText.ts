import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText {
  // The natural language text to be processed. Text length must not exceed 256 characters.
  text?: string;
}

export function diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'text',
      'The natural language text to be processed. Text length must not exceed 256 characters.',
      () => [],
      true,
      false,
    ),
  ];
}
