import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition';

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch {
  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse;

  // Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.
  condition?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition;

  // Name of the branch.
  name?: string;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'nextStep',
      'Configuration block for the next step in the conversation. See `next_step`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'response',
      'Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'condition',
      "Configuration block for the expression to evaluate. If the condition is true, the branch's actions are taken. See `condition`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the branch.',
      () => [],
      true,
      false,
    ),
  ];
}
