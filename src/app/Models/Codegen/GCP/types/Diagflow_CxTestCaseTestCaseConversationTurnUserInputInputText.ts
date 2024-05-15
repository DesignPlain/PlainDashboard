import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText {
  // The natural language text to be processed. Text length must not exceed 256 characters.
  Text?: string;
}

export function Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Text",
      "The natural language text to be processed. Text length must not exceed 256 characters.",
      [],
      true,
      false,
    ),
  ];
}
