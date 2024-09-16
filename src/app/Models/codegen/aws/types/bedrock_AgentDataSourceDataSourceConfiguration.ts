import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentDataSourceDataSourceConfigurationS3Configuration,
  bedrock_AgentDataSourceDataSourceConfigurationS3Configuration_GetTypes,
} from './bedrock_AgentDataSourceDataSourceConfigurationS3Configuration';

export interface bedrock_AgentDataSourceDataSourceConfiguration {
  // Details about the configuration of the S3 object containing the data source. See `s3_data_source_configuration` block for details.
  s3Configuration?: bedrock_AgentDataSourceDataSourceConfigurationS3Configuration;

  // Type of storage for the data source. Valid values: `S3`.
  type?: string;
}

export function bedrock_AgentDataSourceDataSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of storage for the data source. Valid values: `S3`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Configuration',
      'Details about the configuration of the S3 object containing the data source. See `s3_data_source_configuration` block for details.',
      () =>
        bedrock_AgentDataSourceDataSourceConfigurationS3Configuration_GetTypes(),
      false,
      false,
    ),
  ];
}
