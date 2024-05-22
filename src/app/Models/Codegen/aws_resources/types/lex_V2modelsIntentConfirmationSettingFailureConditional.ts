import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch";

export interface lex_V2modelsIntentConfirmationSettingFailureConditional {
  // Whether a conditional branch is active. When active is false, the conditions are not evaluated.
  active?: boolean;

  // Configuration blocks for conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true. See `conditional_branch`.
  conditionalBranches?: Array<lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch>;

  // Configuration block for the conditional branch that should be followed when the conditions for other branches are not satisfied. A branch is made up of a condition, a response and a next step. See `default_branch`.
  defaultBranch?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditional_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Whether a conditional branch is active. When active is false, the conditions are not evaluated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditionalBranches",
      "Configuration blocks for conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true. See `conditional_branch`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultBranch",
      "Configuration block for the conditional branch that should be followed when the conditions for other branches are not satisfied. A branch is made up of a condition, a response and a next step. See `default_branch`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch_GetTypes(),
      true,
      false,
    ),
  ];
}
