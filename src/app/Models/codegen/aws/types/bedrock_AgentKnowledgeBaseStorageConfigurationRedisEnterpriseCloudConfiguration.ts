import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping,
  bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping";

export interface bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration {
  // ARN of the secret that you created in AWS Secrets Manager that is linked to your Redis Enterprise Cloud database.
  credentialsSecretArn?: string;

  // Endpoint URL of the Redis Enterprise Cloud database.
  endpoint?: string;

  // The names of the fields to which to map information about the vector store. This block supports the following arguments:
  fieldMapping?: bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping;

  // Name of the vector index.
  vectorIndexName?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "credentialsSecretArn",
      "ARN of the secret that you created in AWS Secrets Manager that is linked to your Redis Enterprise Cloud database.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "Endpoint URL of the Redis Enterprise Cloud database.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldMapping",
      "The names of the fields to which to map information about the vector store. This block supports the following arguments:",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vectorIndexName",
      "Name of the vector index.",
      () => [],
      true,
      false,
    ),
  ];
}
