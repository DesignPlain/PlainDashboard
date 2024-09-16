import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
  // Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
  endTimeoutMs?: number;

  // Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
  maxLengthMs?: number;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'endTimeoutMs',
      'Time for which a bot waits after the customer stops speaking to assume the utterance is finished.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxLengthMs',
      'Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.',
      () => [],
      true,
      false,
    ),
  ];
}
