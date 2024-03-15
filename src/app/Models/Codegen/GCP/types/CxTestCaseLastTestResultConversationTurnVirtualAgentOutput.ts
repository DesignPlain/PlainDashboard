import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent";
import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage";
import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference";
import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus";
import { CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse } from "./CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse";

export interface CxTestCaseLastTestResultConversationTurnVirtualAgentOutput {
  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  CurrentPage?: CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage;

  /*
The list of differences between the original run and the replay for this output, if any.
Structure is documented below.
*/
  Differences?: Array<CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference>;

  // The session parameters available to the bot at this point.
  SessionParameters?: string;

  /*
Response error from the agent in the test result. If set, other output is empty.
Structure is documented below.
*/
  Status?: CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus;

  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  TextResponses?: Array<CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse>;

  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  TriggeredIntent?: CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent;
}
