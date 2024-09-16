import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping,
  bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping_GetTypes,
} from './bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping';

export interface bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration {
  // The names of the fields to which to map information about the vector store. This block supports the following arguments:
  fieldMapping?: bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping;

  // Namespace to be used to write new data to your database.
  namespace?: string;

  // Endpoint URL for your index management page.
  connectionString?: string;

  // ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
  credentialsSecretArn?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'fieldMapping',
      'The names of the fields to which to map information about the vector store. This block supports the following arguments:',
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'Namespace to be used to write new data to your database.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'connectionString',
      'Endpoint URL for your index management page.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'credentialsSecretArn',
      'ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.',
      () => [],
      true,
      false,
    ),
  ];
}
