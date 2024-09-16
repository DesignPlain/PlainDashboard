import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig,
  bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig_GetTypes,
} from './bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig';
import {
  bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig,
  bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig_GetTypes,
} from './bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig';

export interface bedrock_GuardrailSensitiveInformationPolicyConfig {
  // List of entities. See PII Entities Config for more information.
  piiEntitiesConfigs?: Array<bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig>;

  // List of regex. See Regexes Config for more information.
  regexesConfigs?: Array<bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig>;
}

export function bedrock_GuardrailSensitiveInformationPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'regexesConfigs',
      'List of regex. See Regexes Config for more information.',
      () =>
        bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'piiEntitiesConfigs',
      'List of entities. See PII Entities Config for more information.',
      () =>
        bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
