import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
  // Whether audio input is allowed.
  allowAudioInput?: boolean;

  // Whether DTMF input is allowed.
  allowDtmfInput?: boolean;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowAudioInput',
      'Whether audio input is allowed.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowDtmfInput',
      'Whether DTMF input is allowed.',
      () => [],
      true,
      false,
    ),
  ];
}
