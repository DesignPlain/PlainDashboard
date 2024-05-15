import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxAgentAdvancedSettingsDtmfSettings {
  // If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  Enabled?: boolean;

  // The digit that terminates a DTMF digit sequence.
  FinishDigit?: string;

  // Max length of DTMF digits.
  MaxDigits?: number;
}

export function Diagflow_CxAgentAdvancedSettingsDtmfSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      'If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FinishDigit",
      "The digit that terminates a DTMF digit sequence.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxDigits",
      "Max length of DTMF digits.",
      [],
      false,
      false,
    ),
  ];
}
