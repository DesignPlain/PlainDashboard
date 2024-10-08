import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse {
  // A collection of text responses.
  texts?: Array<string>;
}

export function diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'texts',
      'A collection of text responses.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
