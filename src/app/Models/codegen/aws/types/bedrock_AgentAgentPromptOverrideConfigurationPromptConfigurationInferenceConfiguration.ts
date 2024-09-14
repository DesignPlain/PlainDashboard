import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration {
  // List of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.
  stopSequences?: Array<string>;

  // Likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
  temperature?: number;

  // Number of top most-likely candidates, between 0 and 500, from which the model chooses the next token in the sequence.
  topK?: number;

  // Top percentage of the probability distribution of next tokens, between 0 and 1 (denoting 0%!a(MISSING)nd 100%!)(MISSING), from which the model chooses the next token in the sequence.
  topP?: number;

  // Maximum number of tokens to allow in the generated response.
  maxLength?: number;
}

export function bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "topK",
      "Number of top most-likely candidates, between 0 and 500, from which the model chooses the next token in the sequence.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "topP",
      "Top percentage of the probability distribution of next tokens, between 0 and 1 (denoting 0% and 100%), from which the model chooses the next token in the sequence.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxLength",
      "Maximum number of tokens to allow in the generated response.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stopSequences",
      "List of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "temperature",
      "Likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.",
      () => [],
      true,
      false,
    ),
  ];
}
