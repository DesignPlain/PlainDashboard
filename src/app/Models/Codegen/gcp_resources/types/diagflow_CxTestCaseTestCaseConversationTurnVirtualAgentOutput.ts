import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage,
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage";
import {
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse,
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse";
import {
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent,
  diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent";

export interface diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput {
  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  triggeredIntent?: diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent;

  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  currentPage?: diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage;

  // The session parameters available to the bot at this point.
  sessionParameters?: string;

  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  textResponses?: Array<diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse>;
}

export function diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "currentPage",
      "The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.\nStructure is documented below.",
      diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionParameters",
      "The session parameters available to the bot at this point.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textResponses",
      "The text responses from the agent for the turn.\nStructure is documented below.",
      diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "triggeredIntent",
      "The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.\nStructure is documented below.",
      diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(),
      false,
      false,
    ),
  ];
}
