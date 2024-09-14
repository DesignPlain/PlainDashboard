import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxTestCaseTestCaseConversationTurnUserInput,
  diagflow_CxTestCaseTestCaseConversationTurnUserInput_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnUserInput";
import {
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput,
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput";

export interface diagflow_CxTestCaseTestCaseConversationTurn {
  /*
The user input.
Structure is documented below.
*/
  userInput?: diagflow_CxTestCaseTestCaseConversationTurnUserInput;

  /*
The virtual agent output.
Structure is documented below.
*/
  virtualAgentOutput?: diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput;
}

export function diagflow_CxTestCaseTestCaseConversationTurn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "userInput",
      "The user input.\nStructure is documented below.",
      () => diagflow_CxTestCaseTestCaseConversationTurnUserInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "virtualAgentOutput",
      "The virtual agent output.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes(),
      false,
      false,
    ),
  ];
}
