import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse {
  // A collection of text responses.
  Texts?: Array<string>;
}

export function Diagflow_CxTestCaseTestCaseConversationTurnVirtualAgentOutputTextResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Texts",
      "A collection of text responses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
