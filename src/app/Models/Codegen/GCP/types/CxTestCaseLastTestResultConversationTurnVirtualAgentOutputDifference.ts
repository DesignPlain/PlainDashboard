export interface CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference {
  // A human readable description of the diff, showing the actual output vs expected output.
  Description?: string;

  /*
The type of diff.
- INTENT: The intent.
- PAGE: The page.
- PARAMETERS: The parameters.
- UTTERANCE: The message utterance.
- FLOW: The flow.
Possible values are: `INTENT`, `PAGE`, `PARAMETERS`, `UTTERANCE`, `FLOW`.
*/
  Type?: string;
}
