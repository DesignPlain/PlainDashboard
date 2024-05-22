import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition";

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch {
  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse;

  // Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.
  condition?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition;

  // Name of the branch.
  name?: string;

  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the branch.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep_GetTypes(),
      true,
      false,
    ),
  ];
}
