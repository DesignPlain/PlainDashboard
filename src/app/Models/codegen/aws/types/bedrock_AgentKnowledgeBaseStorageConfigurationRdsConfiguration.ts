import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping,
  bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping_GetTypes,
} from "./bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping";

export interface bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration {
  // ARN of the vector store.
  resourceArn?: string;

  // Name of the table in the database.
  tableName?: string;

  // ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
  credentialsSecretArn?: string;

  // Name of your Amazon RDS database.
  databaseName?: string;

  // Names of the fields to which to map information about the vector store. This block supports the following arguments:
  fieldMapping?: bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "credentialsSecretArn",
      "ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of your Amazon RDS database.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldMapping",
      "Names of the fields to which to map information about the vector store. This block supports the following arguments:",
      () =>
        bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "ARN of the vector store.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "Name of the table in the database.",
      () => [],
      true,
      false,
    ),
  ];
}
