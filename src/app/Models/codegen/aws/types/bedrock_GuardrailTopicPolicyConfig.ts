import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_GuardrailTopicPolicyConfigTopicsConfig,
  bedrock_GuardrailTopicPolicyConfigTopicsConfig_GetTypes,
} from './bedrock_GuardrailTopicPolicyConfigTopicsConfig';

export interface bedrock_GuardrailTopicPolicyConfig {
  // List of topic configs in topic policy. See Topics Config for more information.
  topicsConfigs?: Array<bedrock_GuardrailTopicPolicyConfigTopicsConfig>;
}

export function bedrock_GuardrailTopicPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'topicsConfigs',
      'List of topic configs in topic policy. See Topics Config for more information.',
      () => bedrock_GuardrailTopicPolicyConfigTopicsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
