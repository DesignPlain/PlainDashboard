import { CxTestCaseLastTestResultConversationTurnUserInput } from "./CxTestCaseLastTestResultConversationTurnUserInput";
import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutput } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutput";

export interface CxTestCaseLastTestResultConversationTurn {
  /*
The user input.
Structure is documented below.
*/
  UserInput?: CxTestCaseLastTestResultConversationTurnUserInput;

  /*
The virtual agent output.
Structure is documented below.
*/
  VirtualAgentOutput?: CxTestCaseLastTestResultConversationTurnVirtualAgentOutput;
}
