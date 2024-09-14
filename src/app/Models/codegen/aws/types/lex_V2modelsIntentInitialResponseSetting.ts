import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHook,
  lex_V2modelsIntentInitialResponseSettingCodeHook_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHook";
import {
  lex_V2modelsIntentInitialResponseSettingConditional,
  lex_V2modelsIntentInitialResponseSettingConditional_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditional";
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponse,
  lex_V2modelsIntentInitialResponseSettingInitialResponse_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingInitialResponse";
import {
  lex_V2modelsIntentInitialResponseSettingNextStep,
  lex_V2modelsIntentInitialResponseSettingNextStep_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingNextStep";

export interface lex_V2modelsIntentInitialResponseSetting {
  // Configuration block for the dialog code hook that is called by Amazon Lex at a step of the conversation. See `code_hook`.
  codeHook?: lex_V2modelsIntentInitialResponseSettingCodeHook;

  // Configuration block for conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. See `conditional`.
  conditional?: lex_V2modelsIntentInitialResponseSettingConditional;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `initial_response`.
  initialResponse?: lex_V2modelsIntentInitialResponseSettingInitialResponse;

  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentInitialResponseSettingNextStep;
}

export function lex_V2modelsIntentInitialResponseSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "codeHook",
      "Configuration block for the dialog code hook that is called by Amazon Lex at a step of the conversation. See `code_hook`.",
      () => lex_V2modelsIntentInitialResponseSettingCodeHook_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conditional",
      "Configuration block for conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. See `conditional`.",
      () => lex_V2modelsIntentInitialResponseSettingConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "initialResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `initial_response`.",
      () => lex_V2modelsIntentInitialResponseSettingInitialResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      () => lex_V2modelsIntentInitialResponseSettingNextStep_GetTypes(),
      false,
      false,
    ),
  ];
}
