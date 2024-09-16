import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
  // ARN of the model used to create vector embeddings for the knowledge base.
  embeddingModelArn?: string;
}

export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'embeddingModelArn',
      'ARN of the model used to create vector embeddings for the knowledge base.',
      () => [],
      true,
      false,
    ),
  ];
}
