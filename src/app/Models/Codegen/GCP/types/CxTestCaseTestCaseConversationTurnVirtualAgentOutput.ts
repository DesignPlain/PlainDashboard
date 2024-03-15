import { CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse } from "./CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse";
import { CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent } from "./CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent";
import { CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage } from "./CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage";

export interface CxTestCaseTestCaseConversationTurnVirtualAgentOutput {
  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  TextResponses?: Array<CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse>;

  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  TriggeredIntent?: CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent;

  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  CurrentPage?: CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage;

  // The session parameters available to the bot at this point.
  SessionParameters?: string;
}
