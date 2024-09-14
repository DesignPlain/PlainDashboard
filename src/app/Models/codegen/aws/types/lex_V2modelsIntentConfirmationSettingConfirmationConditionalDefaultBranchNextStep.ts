import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction";

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep {
  // Configuration block for override settings to configure the intent state. See `intent`.
  intent?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent;

  // Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
  sessionAttributes?: Map<string, string>;

  // Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.
  dialogAction?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "intent",
      "Configuration block for override settings to configure the intent state. See `intent`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "sessionAttributes",
      "Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dialogAction",
      "Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction_GetTypes(),
      false,
      false,
    ),
  ];
}
