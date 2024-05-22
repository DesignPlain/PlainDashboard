import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent {
  /*
The unique identifier of the intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
*/
  name?: string;

  /*
(Output)
The human-readable name of the intent, unique within the agent.
*/
  displayName?: string;
}

export function diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The unique identifier of the intent.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "(Output)\nThe human-readable name of the intent, unique within the agent.",
      [],
      false,
      false,
    ),
  ];
}
