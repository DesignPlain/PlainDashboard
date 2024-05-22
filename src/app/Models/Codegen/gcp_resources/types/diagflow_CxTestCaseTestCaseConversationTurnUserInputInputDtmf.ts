import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf {
  // The dtmf digits.
  digits?: string;

  // The finish digit (if any).
  finishDigit?: string;
}

export function diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "digits",
      "The dtmf digits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "finishDigit",
      "The finish digit (if any).",
      [],
      false,
      false,
    ),
  ];
}
