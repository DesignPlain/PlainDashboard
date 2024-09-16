import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_GuardrailTopicPolicyConfigTopicsConfig {
  // Definition of topic in topic policy.
  definition?: string;

  // List of text examples.
  examples?: Array<string>;

  // Name of topic in topic policy.
  name?: string;

  // Type of topic in a policy.
  type?: string;
}

export function bedrock_GuardrailTopicPolicyConfigTopicsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'definition',
      'Definition of topic in topic policy.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'examples',
      'List of text examples.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of topic in topic policy.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of topic in a policy.',
      () => [],
      true,
      false,
    ),
  ];
}
