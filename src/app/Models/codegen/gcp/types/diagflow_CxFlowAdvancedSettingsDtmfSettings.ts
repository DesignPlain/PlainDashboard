import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxFlowAdvancedSettingsDtmfSettings {
  // If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  enabled?: boolean;

  // The digit that terminates a DTMF digit sequence.
  finishDigit?: string;

  // Max length of DTMF digits.
  maxDigits?: number;
}

export function diagflow_CxFlowAdvancedSettingsDtmfSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'finishDigit',
      'The digit that terminates a DTMF digit sequence.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxDigits',
      'Max length of DTMF digits.',
      () => [],
      false,
      false,
    ),
  ];
}
