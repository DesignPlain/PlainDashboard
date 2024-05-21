import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInput,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnUserInput";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput";

export interface diagflow_CxTestCaseLastTestResultConversationTurn {
  /*
The user input.
Structure is documented below.
*/
  userInput?: diagflow_CxTestCaseLastTestResultConversationTurnUserInput;

  /*
The virtual agent output.
Structure is documented below.
*/
  virtualAgentOutput?: diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput;
}

export function diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "userInput",
      "The user input.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "virtualAgentOutput",
      "The virtual agent output.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes(),
      false,
      false,
    ),
  ];
}
