import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentClosingSettingConditional,
  lex_V2modelsIntentClosingSettingConditional_GetTypes,
} from './lex_V2modelsIntentClosingSettingConditional';
import {
  lex_V2modelsIntentClosingSettingNextStep,
  lex_V2modelsIntentClosingSettingNextStep_GetTypes,
} from './lex_V2modelsIntentClosingSettingNextStep';
import {
  lex_V2modelsIntentClosingSettingClosingResponse,
  lex_V2modelsIntentClosingSettingClosingResponse_GetTypes,
} from './lex_V2modelsIntentClosingSettingClosingResponse';

export interface lex_V2modelsIntentClosingSetting {
  // Whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the active field isn't specified, the default is true.
  active?: boolean;

  // Configuration block for response that Amazon Lex sends to the user when the intent is complete. See `closing_response`.
  closingResponse?: lex_V2modelsIntentClosingSettingClosingResponse;

  // Configuration block for list of conditional branches associated with the intent's closing response. These branches are executed when the `next_step` attribute is set to `EvalutateConditional`. See `conditional`.
  conditional?: lex_V2modelsIntentClosingSettingConditional;

  // Next step that the bot executes after playing the intent's closing response. See `next_step`.
  nextStep?: lex_V2modelsIntentClosingSettingNextStep;
}

export function lex_V2modelsIntentClosingSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'closingResponse',
      'Configuration block for response that Amazon Lex sends to the user when the intent is complete. See `closing_response`.',
      () => lex_V2modelsIntentClosingSettingClosingResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'conditional',
      "Configuration block for list of conditional branches associated with the intent's closing response. These branches are executed when the `next_step` attribute is set to `EvalutateConditional`. See `conditional`.",
      () => lex_V2modelsIntentClosingSettingConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'nextStep',
      "Next step that the bot executes after playing the intent's closing response. See `next_step`.",
      () => lex_V2modelsIntentClosingSettingNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'active',
      "Whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the active field isn't specified, the default is true.",
      () => [],
      false,
      false,
    ),
  ];
}
