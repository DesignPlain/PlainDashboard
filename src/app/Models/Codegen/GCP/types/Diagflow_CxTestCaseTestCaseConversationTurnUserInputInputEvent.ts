import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent {
  // Name of the event.
  Event?: string;
}

export function Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Event",
      "Name of the event.",
      [],
      true,
      false,
    ),
  ];
}
