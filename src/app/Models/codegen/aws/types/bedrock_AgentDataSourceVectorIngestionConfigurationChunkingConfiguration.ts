import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration,
  bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration_GetTypes,
} from './bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration';

export interface bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration {
  // Option for chunking your source data, either in fixed-sized chunks or as one chunk. Valid values: `FIXED_SIZE`, `NONE`.
  chunkingStrategy?: string;

  // Configurations for when you choose fixed-size chunking. If you set the chunking_strategy as `NONE`, exclude this field. See `fixed_size_chunking_configuration` for details.
  fixedSizeChunkingConfiguration?: bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration;
}

export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'chunkingStrategy',
      'Option for chunking your source data, either in fixed-sized chunks or as one chunk. Valid values: `FIXED_SIZE`, `NONE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fixedSizeChunkingConfiguration',
      'Configurations for when you choose fixed-size chunking. If you set the chunking_strategy as `NONE`, exclude this field. See `fixed_size_chunking_configuration` for details.',
      () =>
        bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
