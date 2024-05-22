import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot";

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent {
  // Name of the intent.
  name?: string;

  // Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.
  slots?: Array<lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot>;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "slots",
      "Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.",
      lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the intent.",
      [],
      false,
      false,
    ),
  ];
}
