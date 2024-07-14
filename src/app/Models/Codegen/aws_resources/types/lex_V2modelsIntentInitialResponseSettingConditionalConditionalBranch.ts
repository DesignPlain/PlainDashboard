import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep,
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse,
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition,
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition";

export interface lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranch {
  // Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.
  condition?: lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition;

  // Name of the branch.
  name?: string;

  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.",
      lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition_GetTypes(),
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
      lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
