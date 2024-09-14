import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse";

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch {
  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      () =>
        lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      () =>
        lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep_GetTypes(),
      false,
      false,
    ),
  ];
}
