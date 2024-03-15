import { CxTestCaseTestCaseConversationTurnUserInput } from "./CxTestCaseTestCaseConversationTurnUserInput";
import { CxTestCaseTestCaseConversationTurnVirtualAgentOutput } from "./CxTestCaseTestCaseConversationTurnVirtualAgentOutput";

export interface CxTestCaseTestCaseConversationTurn {
  /*
The user input.
Structure is documented below.
*/
  UserInput?: CxTestCaseTestCaseConversationTurnUserInput;

  /*
The virtual agent output.
Structure is documented below.
*/
  VirtualAgentOutput?: CxTestCaseTestCaseConversationTurnVirtualAgentOutput;
}
