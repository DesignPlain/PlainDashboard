import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration,
  bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration_GetTypes,
} from "./bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration";

export interface bedrock_AgentAgentPromptOverrideConfiguration {
  // ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the `prompt_configurations` block must contain a `parser_mode` value that is set to `OVERRIDDEN`.
  overrideLambda?: string;

  // Configurations to override a prompt template in one part of an agent sequence. See `prompt_configurations` Block for details.
  promptConfigurations?: Array<bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration>;
}

export function bedrock_AgentAgentPromptOverrideConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "overrideLambda",
      "ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the `prompt_configurations` block must contain a `parser_mode` value that is set to `OVERRIDDEN`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "promptConfigurations",
      "Configurations to override a prompt template in one part of an agent sequence. See `prompt_configurations` Block for details.",
      () =>
        bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
