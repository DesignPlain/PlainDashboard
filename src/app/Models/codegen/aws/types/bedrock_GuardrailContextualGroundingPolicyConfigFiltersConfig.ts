import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig {
  // The threshold for this filter.
  threshold?: number;

  // Type of contextual grounding filter.
  type?: string;
}

export function bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of contextual grounding filter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'threshold',
      'The threshold for this filter.',
      () => [],
      true,
      false,
    ),
  ];
}
