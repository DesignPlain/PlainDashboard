import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf {
  // The dtmf digits.
  Digits?: string;

  // The finish digit (if any).
  FinishDigit?: string;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Digits",
      "The dtmf digits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FinishDigit",
      "The finish digit (if any).",
      [],
      false,
      false,
    ),
  ];
}
