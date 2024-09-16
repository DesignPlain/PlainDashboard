import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration,
  bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration_GetTypes,
} from './bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration';

export interface bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration {
  // prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html).
  basePromptTemplate?: string;

  // Inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `prompt_type`. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html). See `inference_configuration` Block for details.
  inferenceConfigurations?: Array<bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration>;

  // Whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `prompt_type`. If you set the argument as `OVERRIDDEN`, the `override_lambda` argument in the `prompt_override_configuration` block must be specified with the ARN of a Lambda function. Valid values: `DEFAULT`, `OVERRIDDEN`.
  parserMode?: string;

  // Whether to override the default prompt template for this `prompt_type`. Set this argument to `OVERRIDDEN` to use the prompt that you provide in the `base_prompt_template`. If you leave it as `DEFAULT`, the agent uses a default prompt template. Valid values: `DEFAULT`, `OVERRIDDEN`.
  promptCreationMode?: string;

  // Whether to allow the agent to carry out the step specified in the `prompt_type`. If you set this argument to `DISABLED`, the agent skips that step. Valid Values: `ENABLED`, `DISABLED`.
  promptState?: string;

  // Step in the agent sequence that this prompt configuration applies to. Valid values: `PRE_PROCESSING`, `ORCHESTRATION`, `POST_PROCESSING`, `KNOWLEDGE_BASE_RESPONSE_GENERATION`.
  promptType?: string;
}

export function bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'promptType',
      'Step in the agent sequence that this prompt configuration applies to. Valid values: `PRE_PROCESSING`, `ORCHESTRATION`, `POST_PROCESSING`, `KNOWLEDGE_BASE_RESPONSE_GENERATION`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'basePromptTemplate',
      'prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'inferenceConfigurations',
      'Inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `prompt_type`. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html). See `inference_configuration` Block for details.',
      () =>
        bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'parserMode',
      'Whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `prompt_type`. If you set the argument as `OVERRIDDEN`, the `override_lambda` argument in the `prompt_override_configuration` block must be specified with the ARN of a Lambda function. Valid values: `DEFAULT`, `OVERRIDDEN`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'promptCreationMode',
      'Whether to override the default prompt template for this `prompt_type`. Set this argument to `OVERRIDDEN` to use the prompt that you provide in the `base_prompt_template`. If you leave it as `DEFAULT`, the agent uses a default prompt template. Valid values: `DEFAULT`, `OVERRIDDEN`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'promptState',
      'Whether to allow the agent to carry out the step specified in the `prompt_type`. If you set this argument to `DISABLED`, the agent skips that step. Valid Values: `ENABLED`, `DISABLED`.',
      () => [],
      true,
      false,
    ),
  ];
}
