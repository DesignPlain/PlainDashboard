import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes,
} from './diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput';
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInput,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes,
} from './diagflow_CxTestCaseLastTestResultConversationTurnUserInput';

export interface diagflow_CxTestCaseLastTestResultConversationTurn {
  /*
The virtual agent output.
Structure is documented below.
*/
  virtualAgentOutput?: diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput;

  /*
The user input.
Structure is documented below.
*/
  userInput?: diagflow_CxTestCaseLastTestResultConversationTurnUserInput;
}

export function diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'virtualAgentOutput',
      'The virtual agent output.\nStructure is documented below.',
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'userInput',
      'The user input.\nStructure is documented below.',
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes(),
      false,
      false,
    ),
  ];
}
