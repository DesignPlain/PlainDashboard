import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse {
  // A collection of text responses.
  texts?: Array<string>;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputTextResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "texts",
      "A collection of text responses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
