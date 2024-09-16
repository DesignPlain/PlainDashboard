import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot';

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent {
  // Name of the intent.
  name?: string;

  // Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.
  slots?: Array<lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot>;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the intent.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'slots',
      "Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot_GetTypes(),
      false,
      false,
    ),
  ];
}
