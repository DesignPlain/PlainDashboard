import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_GuardrailContentPolicyConfigFiltersConfig,
  bedrock_GuardrailContentPolicyConfigFiltersConfig_GetTypes,
} from './bedrock_GuardrailContentPolicyConfigFiltersConfig';

export interface bedrock_GuardrailContentPolicyConfig {
  // List of content filter configs in content policy. See Filters Config for more information.
  filtersConfigs?: Array<bedrock_GuardrailContentPolicyConfigFiltersConfig>;
}

export function bedrock_GuardrailContentPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'filtersConfigs',
      'List of content filter configs in content policy. See Filters Config for more information.',
      () => bedrock_GuardrailContentPolicyConfigFiltersConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
