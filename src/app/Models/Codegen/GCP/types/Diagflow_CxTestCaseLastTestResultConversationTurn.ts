import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInput,
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnUserInput";

export interface Diagflow_CxTestCaseLastTestResultConversationTurn {
  /*
The virtual agent output.
Structure is documented below.
*/
  VirtualAgentOutput?: Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput;

  /*
The user input.
Structure is documented below.
*/
  UserInput?: Diagflow_CxTestCaseLastTestResultConversationTurnUserInput;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VirtualAgentOutput",
      "The virtual agent output.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UserInput",
      "The user input.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes(),
      false,
      false,
    ),
  ];
}
