import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration,
  bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration_GetTypes,
} from './bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration';

export interface bedrock_AgentDataSourceVectorIngestionConfiguration {
  // Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. See `chunking_configuration` block for details.
  chunkingConfiguration?: bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration;
}

export function bedrock_AgentDataSourceVectorIngestionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'chunkingConfiguration',
      'Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. See `chunking_configuration` block for details.',
      () =>
        bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
