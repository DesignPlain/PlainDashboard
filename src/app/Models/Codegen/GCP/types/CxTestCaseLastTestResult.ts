import { CxTestCaseLastTestResultConversationTurn } from "./CxTestCaseLastTestResultConversationTurn";

export interface CxTestCaseLastTestResult {
  // The time that the test was run. A timestamp in RFC3339 text format.
  TestTime?: string;

  /*
The conversation turns uttered during the test case replay in chronological order.
Structure is documented below.
*/
  ConversationTurns?: Array<CxTestCaseLastTestResultConversationTurn>;

  // Environment where the test was run. If not set, it indicates the draft environment.
  Environment?: string;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  Name?: string;

  /*
Whether the test case passed in the agent environment.
- PASSED: The test passed.
- FAILED: The test did not pass.
Possible values are: `PASSED`, `FAILED`.
*/
  TestResult?: string;
}
