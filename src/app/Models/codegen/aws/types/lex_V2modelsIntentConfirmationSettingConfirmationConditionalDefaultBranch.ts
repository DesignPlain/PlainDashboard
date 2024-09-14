import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse";

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch {
  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep_GetTypes(),
      false,
      false,
    ),
  ];
}
