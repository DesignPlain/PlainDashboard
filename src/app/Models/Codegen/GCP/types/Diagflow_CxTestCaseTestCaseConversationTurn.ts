import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnUserInput,
  Diagflow_CxTestCaseTestCaseConversationTurnUserInput_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnUserInput";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput,
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput";

export interface Diagflow_CxTestCaseTestCaseConversationTurn {
  /*
The user input.
Structure is documented below.
*/
  UserInput?: Diagflow_CxTestCaseTestCaseConversationTurnUserInput;

  /*
The virtual agent output.
Structure is documented below.
*/
  VirtualAgentOutput?: Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput;
}

export function Diagflow_CxTestCaseTestCaseConversationTurn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "UserInput",
      "The user input.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnUserInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VirtualAgentOutput",
      "The virtual agent output.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes(),
      false,
      false,
    ),
  ];
}
