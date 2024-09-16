import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf {
  // The finish digit (if any).
  finishDigit?: string;

  // The dtmf digits.
  digits?: string;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'finishDigit',
      'The finish digit (if any).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'digits',
      'The dtmf digits.',
      () => [],
      false,
      false,
    ),
  ];
}
