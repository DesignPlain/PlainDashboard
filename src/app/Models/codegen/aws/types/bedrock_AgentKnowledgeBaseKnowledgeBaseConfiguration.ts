import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration,
  bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration_GetTypes,
} from './bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration';

export interface bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration {
  // Type of data that the data source is converted into for the knowledge base. Valid Values: `VECTOR`.
  type?: string;

  // Details about the embeddings model that'sused to convert the data source. See `vector_knowledge_base_configuration` block for details.
  vectorKnowledgeBaseConfiguration?: bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration;
}

export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of data that the data source is converted into for the knowledge base. Valid Values: `VECTOR`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'vectorKnowledgeBaseConfiguration',
      "Details about the embeddings model that'sused to convert the data source. See `vector_knowledge_base_configuration` block for details.",
      () =>
        bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
