import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent";

export interface lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep {
  // Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.
  dialogAction?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction;

  // Configuration block for override settings to configure the intent state. See `intent`.
  intent?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent;

  // Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
  sessionAttributes?: Map<string, string>;
}

export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dialogAction",
      "Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "intent",
      "Configuration block for override settings to configure the intent state. See `intent`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "sessionAttributes",
      "Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
