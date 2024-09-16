import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent';
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction';

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep {
  // Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.
  dialogAction?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction;

  // Configuration block for override settings to configure the intent state. See `intent`.
  intent?: lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent;

  // Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
  sessionAttributes?: Map<string, string>;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'sessionAttributes',
      'Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dialogAction',
      'Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.',
      () =>
        lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'intent',
      'Configuration block for override settings to configure the intent state. See `intent`.',
      () =>
        lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent_GetTypes(),
      false,
      false,
    ),
  ];
}
