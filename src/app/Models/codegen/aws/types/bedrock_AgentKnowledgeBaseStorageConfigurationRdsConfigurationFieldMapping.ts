import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping {
  // Name of the field in which Amazon Bedrock stores metadata about the vector store.
  metadataField?: string;

  // Name of the field in which Amazon Bedrock stores the ID for each entry.
  primaryKeyField?: string;

  // Name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
  textField?: string;

  // Name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
  vectorField?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'metadataField',
      'Name of the field in which Amazon Bedrock stores metadata about the vector store.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'primaryKeyField',
      'Name of the field in which Amazon Bedrock stores the ID for each entry.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'textField',
      'Name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vectorField',
      'Name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.',
      () => [],
      true,
      false,
    ),
  ];
}
