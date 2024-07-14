import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot,
  lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot";

export interface lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntent {
  // Name of the intent.
  name?: string;

  // Configuration block for all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden. See `slot`.
  slots?: Array<lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot>;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntent_GetTypes(): DynamicUIProps[] {
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
      lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot_GetTypes(),
      false,
      false,
    ),
  ];
}
