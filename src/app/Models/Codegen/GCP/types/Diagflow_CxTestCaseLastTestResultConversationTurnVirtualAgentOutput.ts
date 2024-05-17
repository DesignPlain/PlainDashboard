import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus,
  Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput {
  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  TextResponses?: Array<Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse>;

  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  TriggeredIntent?: Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent;

  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  CurrentPage?: Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage;

  /*
The list of differences between the original run and the replay for this output, if any.
Structure is documented below.
*/
  Differences?: Array<Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference>;

  // The session parameters available to the bot at this point.
  SessionParameters?: string;

  /*
Response error from the agent in the test result. If set, other output is empty.
Structure is documented below.
*/
  Status?: Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TextResponses",
      "The text responses from the agent for the turn.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TriggeredIntent",
      "The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CurrentPage",
      "The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Differences",
      "The list of differences between the original run and the replay for this output, if any.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SessionParameters",
      "The session parameters available to the bot at this point.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Status",
      "Response error from the agent in the test result. If set, other output is empty.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
