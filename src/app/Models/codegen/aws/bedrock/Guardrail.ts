import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_GuardrailContentPolicyConfig,
  bedrock_GuardrailContentPolicyConfig_GetTypes,
} from '../types/bedrock_GuardrailContentPolicyConfig';
import {
  bedrock_GuardrailSensitiveInformationPolicyConfig,
  bedrock_GuardrailSensitiveInformationPolicyConfig_GetTypes,
} from '../types/bedrock_GuardrailSensitiveInformationPolicyConfig';
import {
  bedrock_GuardrailContextualGroundingPolicyConfig,
  bedrock_GuardrailContextualGroundingPolicyConfig_GetTypes,
} from '../types/bedrock_GuardrailContextualGroundingPolicyConfig';
import {
  bedrock_GuardrailTimeouts,
  bedrock_GuardrailTimeouts_GetTypes,
} from '../types/bedrock_GuardrailTimeouts';
import {
  bedrock_GuardrailTopicPolicyConfig,
  bedrock_GuardrailTopicPolicyConfig_GetTypes,
} from '../types/bedrock_GuardrailTopicPolicyConfig';
import {
  bedrock_GuardrailWordPolicyConfig,
  bedrock_GuardrailWordPolicyConfig_GetTypes,
} from '../types/bedrock_GuardrailWordPolicyConfig';

export interface GuardrailArgs {
  // Description of the guardrail or its version.
  description?: string;

  // The KMS key with which the guardrail was encrypted at rest.
  kmsKeyArn?: string;

  /*
Name of the guardrail.

The following arguments are optional:
*/
  name?: string;

  // Sensitive information policy config for a guardrail. See Sensitive Information Policy Config for more information.
  sensitiveInformationPolicyConfig?: bedrock_GuardrailSensitiveInformationPolicyConfig;

  // Message to return when the guardrail blocks a prompt.
  blockedInputMessaging?: string;

  // Contextual grounding policy config for a guardrail. See Contextual Grounding Policy Config for more information.
  contextualGroundingPolicyConfig?: bedrock_GuardrailContextualGroundingPolicyConfig;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: bedrock_GuardrailTimeouts;

  // Topic policy config for a guardrail. See Topic Policy Config for more information.
  topicPolicyConfig?: bedrock_GuardrailTopicPolicyConfig;

  // Word policy config for a guardrail. See Word Policy Config for more information.
  wordPolicyConfig?: bedrock_GuardrailWordPolicyConfig;

  // Message to return when the guardrail blocks a model response.
  blockedOutputsMessaging?: string;

  // Content policy config for a guardrail. See Content Policy Config for more information.
  contentPolicyConfig?: bedrock_GuardrailContentPolicyConfig;
}
export class Guardrail extends DS_Resource {
  // Topic policy config for a guardrail. See Topic Policy Config for more information.
  public topicPolicyConfig?: bedrock_GuardrailTopicPolicyConfig;

  // ARN of the Guardrail.
  public guardrailArn?: string;

  /*
Name of the guardrail.

The following arguments are optional:
*/
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Status of the Bedrock Guardrail. One of `READY`, `FAILED`.
  public status?: string;

  //
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: bedrock_GuardrailTimeouts;

  // Word policy config for a guardrail. See Word Policy Config for more information.
  public wordPolicyConfig?: bedrock_GuardrailWordPolicyConfig;

  // Content policy config for a guardrail. See Content Policy Config for more information.
  public contentPolicyConfig?: bedrock_GuardrailContentPolicyConfig;

  // Unix epoch timestamp in seconds for when the Guardrail was created.
  public createdAt?: string;

  // Description of the guardrail or its version.
  public description?: string;

  // The KMS key with which the guardrail was encrypted at rest.
  public kmsKeyArn?: string;

  // Sensitive information policy config for a guardrail. See Sensitive Information Policy Config for more information.
  public sensitiveInformationPolicyConfig?: bedrock_GuardrailSensitiveInformationPolicyConfig;

  // Message to return when the guardrail blocks a prompt.
  public blockedInputMessaging?: string;

  // Message to return when the guardrail blocks a model response.
  public blockedOutputsMessaging?: string;

  // Contextual grounding policy config for a guardrail. See Contextual Grounding Policy Config for more information.
  public contextualGroundingPolicyConfig?: bedrock_GuardrailContextualGroundingPolicyConfig;

  // ID of the Guardrail.
  public guardrailId?: string;

  // Version of the Guardrail.
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the guardrail.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sensitiveInformationPolicyConfig',
        'Sensitive information policy config for a guardrail. See Sensitive Information Policy Config for more information.',
        () => bedrock_GuardrailSensitiveInformationPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'wordPolicyConfig',
        'Word policy config for a guardrail. See Word Policy Config for more information.',
        () => bedrock_GuardrailWordPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'blockedOutputsMessaging',
        'Message to return when the guardrail blocks a model response.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'contentPolicyConfig',
        'Content policy config for a guardrail. See Content Policy Config for more information.',
        () => bedrock_GuardrailContentPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the guardrail or its version.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyArn',
        'The KMS key with which the guardrail was encrypted at rest.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'blockedInputMessaging',
        'Message to return when the guardrail blocks a prompt.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'contextualGroundingPolicyConfig',
        'Contextual grounding policy config for a guardrail. See Contextual Grounding Policy Config for more information.',
        () => bedrock_GuardrailContextualGroundingPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => bedrock_GuardrailTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'topicPolicyConfig',
        'Topic policy config for a guardrail. See Topic Policy Config for more information.',
        () => bedrock_GuardrailTopicPolicyConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
