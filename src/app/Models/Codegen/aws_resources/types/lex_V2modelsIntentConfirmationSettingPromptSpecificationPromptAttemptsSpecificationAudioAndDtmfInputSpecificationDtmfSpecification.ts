import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
  // Maximum number of DTMF digits allowed in an utterance.
  maxLength?: number;

  // DTMF character that clears the accumulated DTMF digits and immediately ends the input.
  deletionCharacter?: string;

  // DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
  endCharacter?: string;

  // How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
  endTimeoutMs?: number;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deletionCharacter",
      "DTMF character that clears the accumulated DTMF digits and immediately ends the input.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endCharacter",
      "DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "endTimeoutMs",
      "How long the bot should wait after the last DTMF character input before assuming that the input has concluded.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxLength",
      "Maximum number of DTMF digits allowed in an utterance.",
      [],
      true,
      false,
    ),
  ];
}
