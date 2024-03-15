export interface CxAgentAdvancedSettingsDtmfSettings {
  // The digit that terminates a DTMF digit sequence.
  FinishDigit?: string;

  // Max length of DTMF digits.
  MaxDigits?: number;

  // If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  Enabled?: boolean;
}
