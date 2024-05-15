import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent {
  /*
(Output)
The human-readable name of the intent, unique within the agent.
*/
  DisplayName?: string;

  /*
The unique identifier of the intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
*/
  Name?: string;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "(Output)\nThe human-readable name of the intent, unique within the agent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The unique identifier of the intent.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
  ];
}
