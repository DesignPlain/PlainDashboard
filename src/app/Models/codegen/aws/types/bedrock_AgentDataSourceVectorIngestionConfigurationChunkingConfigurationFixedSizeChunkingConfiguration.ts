import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
  // Percentage of overlap between adjacent chunks of a data source.
  overlapPercentage?: number;

  // Maximum number of tokens to include in a chunk.
  maxTokens?: number;
}

export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'overlapPercentage',
      'Percentage of overlap between adjacent chunks of a data source.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxTokens',
      'Maximum number of tokens to include in a chunk.',
      () => [],
      true,
      false,
    ),
  ];
}
