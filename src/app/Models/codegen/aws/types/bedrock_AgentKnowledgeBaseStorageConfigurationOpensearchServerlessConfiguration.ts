import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping,
  bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping_GetTypes,
} from './bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping';

export interface bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration {
  // The names of the fields to which to map information about the vector store. This block supports the following arguments:
  fieldMapping?: bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping;

  // Name of the vector store.
  vectorIndexName?: string;

  // ARN of the OpenSearch Service vector store.
  collectionArn?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vectorIndexName',
      'Name of the vector store.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'collectionArn',
      'ARN of the OpenSearch Service vector store.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fieldMapping',
      'The names of the fields to which to map information about the vector store. This block supports the following arguments:',
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping_GetTypes(),
      false,
      false,
    ),
  ];
}
