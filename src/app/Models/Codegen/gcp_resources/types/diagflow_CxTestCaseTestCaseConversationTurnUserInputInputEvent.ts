import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent {
  // Name of the event.
  event?: string;
}

export function diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "event",
      "Name of the event.",
      [],
      true,
      false,
    ),
  ];
}
