import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification {
  // Time for which a bot waits before re-prompting a customer for text input.
  startTimeoutMs?: number;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "startTimeoutMs",
      "Time for which a bot waits before re-prompting a customer for text input.",
      () => [],
      true,
      false,
    ),
  ];
}
