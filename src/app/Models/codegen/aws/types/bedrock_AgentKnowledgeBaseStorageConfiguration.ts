import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration,
  bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration,
  bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration,
  bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration,
  bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration";

export interface bedrock_AgentKnowledgeBaseStorageConfiguration {
  // The storage configuration of the knowledge base in Amazon OpenSearch Service. See `opensearch_serverless_configuration` block for details.
  opensearchServerlessConfiguration?: bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration;

  // The storage configuration of the knowledge base in Pinecone. See `pinecone_configuration` block for details.
  pineconeConfiguration?: bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration;

  // Details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html). See `rds_configuration` block for details.
  rdsConfiguration?: bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration;

  // The storage configuration of the knowledge base in Redis Enterprise Cloud. See `redis_enterprise_cloud_configuration` block for details.
  redisEnterpriseCloudConfiguration?: bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration;

  // Vector store service in which the knowledge base is stored. Valid Values: `OPENSEARCH_SERVERLESS`, `PINECONE`, `REDIS_ENTERPRISE_CLOUD`, `RDS`.
  type?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "opensearchServerlessConfiguration",
      "The storage configuration of the knowledge base in Amazon OpenSearch Service. See `opensearch_serverless_configuration` block for details.",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pineconeConfiguration",
      "The storage configuration of the knowledge base in Pinecone. See `pinecone_configuration` block for details.",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rdsConfiguration",
      "Details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html). See `rds_configuration` block for details.",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redisEnterpriseCloudConfiguration",
      "The storage configuration of the knowledge base in Redis Enterprise Cloud. See `redis_enterprise_cloud_configuration` block for details.",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Vector store service in which the knowledge base is stored. Valid Values: `OPENSEARCH_SERVERLESS`, `PINECONE`, `REDIS_ENTERPRISE_CLOUD`, `RDS`.",
      () => [],
      true,
      false,
    ),
  ];
}
