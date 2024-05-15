import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage,
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse,
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent,
  Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent";

export interface Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput {
  /*
The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.
Structure is documented below.
*/
  CurrentPage?: Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage;

  // The session parameters available to the bot at this point.
  SessionParameters?: string;

  /*
The text responses from the agent for the turn.
Structure is documented below.
*/
  TextResponses?: Array<Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse>;

  /*
The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.
Structure is documented below.
*/
  TriggeredIntent?: Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent;
}

export function Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CurrentPage",
      "The [Page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#Page) on which the utterance was spoken.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputCurrentPage_GetTypes(),
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
      InputType.Array,
      "TextResponses",
      "The text responses from the agent for the turn.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TriggeredIntent",
      "The [Intent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents#Intent) that triggered the response.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(),
      false,
      false,
    ),
  ];
}
