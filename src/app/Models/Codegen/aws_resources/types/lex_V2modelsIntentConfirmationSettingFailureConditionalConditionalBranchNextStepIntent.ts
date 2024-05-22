import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot,
  lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot";

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent {
  // Name of the intent.
  name?: string;

  // Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.
  slots?: Array<lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot>;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the intent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "slots",
      "Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.",
      lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot_GetTypes(),
      false,
      false,
    ),
  ];
}
