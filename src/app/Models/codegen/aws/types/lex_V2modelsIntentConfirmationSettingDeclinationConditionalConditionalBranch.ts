import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep";

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch {
  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse;

  // Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.
  condition?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition;

  // Name of the branch.
  name?: string;

  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the branch.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
