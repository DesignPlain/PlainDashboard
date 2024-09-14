import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference,
  diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference";

export interface diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput {
  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  textResponses?: Array<diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse>;

  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  triggeredIntent?: diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent;

  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  currentPage?: diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage;

  /*
The list of differences between the original run and the replay for this output, if any.
Structure is documented below.
*/
  differences?: Array<diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference>;

  // The session parameters available to the bot at this point.
  sessionParameters?: string;

  /*
Response error from the agent in the test result. If set, other output is empty.
Structure is documented below.
*/
  status?: diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "triggeredIntent",
      "The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "currentPage",
      "The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "differences",
      "The list of differences between the original run and the replay for this output, if any.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionParameters",
      "The session parameters available to the bot at this point.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "status",
      "Response error from the agent in the test result. If set, other output is empty.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textResponses",
      "The text responses from the agent for the turn.\nStructure is documented below.",
      () =>
        diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
