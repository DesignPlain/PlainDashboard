import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentInitialResponseSettingNextStepDialogAction,
  lex_V2modelsIntentInitialResponseSettingNextStepDialogAction_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingNextStepDialogAction";
import {
  lex_V2modelsIntentInitialResponseSettingNextStepIntent,
  lex_V2modelsIntentInitialResponseSettingNextStepIntent_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingNextStepIntent";

export interface lex_V2modelsIntentInitialResponseSettingNextStep {
  // Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.
  dialogAction?: lex_V2modelsIntentInitialResponseSettingNextStepDialogAction;

  // Configuration block for override settings to configure the intent state. See `intent`.
  intent?: lex_V2modelsIntentInitialResponseSettingNextStepIntent;

  // Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
  sessionAttributes?: Map<string, string>;
}

export function lex_V2modelsIntentInitialResponseSettingNextStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "sessionAttributes",
      "Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dialogAction",
      "Configuration block for action that the bot executes at runtime when the conversation reaches this step. See `dialog_action`.",
      lex_V2modelsIntentInitialResponseSettingNextStepDialogAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "intent",
      "Configuration block for override settings to configure the intent state. See `intent`.",
      lex_V2modelsIntentInitialResponseSettingNextStepIntent_GetTypes(),
      false,
      false,
    ),
  ];
}
