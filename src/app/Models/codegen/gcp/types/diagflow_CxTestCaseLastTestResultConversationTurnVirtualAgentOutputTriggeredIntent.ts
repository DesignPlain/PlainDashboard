import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent {
  /*
(Output)
The human-readable name of the intent, unique within the agent.
*/
  displayName?: string;

  /*
The unique identifier of the intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
*/
  name?: string;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTriggeredIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "(Output)\nThe human-readable name of the intent, unique within the agent.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The unique identifier of the intent.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.",
      () => [],
      false,
      false,
    ),
  ];
}
