import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_GuardrailWordPolicyConfigWordsConfig {
  // The custom word text.
  text?: string;
}

export function bedrock_GuardrailWordPolicyConfigWordsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'text',
      'The custom word text.',
      () => [],
      true,
      false,
    ),
  ];
}
