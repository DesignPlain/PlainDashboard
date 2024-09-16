import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction';
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent';

export interface lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep {
  // Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
  sessionAttributes?: Map<string, string>;

  // Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.
  dialogAction?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction;

  // Configuration block for override settings to configure the intent state. See `intent`.
  intent?: lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep_GetTypes(): DynamicUIProps[] {
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
        lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'intent',
      'Configuration block for override settings to configure the intent state. See `intent`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent_GetTypes(),
      false,
      false,
    ),
  ];
}
