import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration';

export interface kinesis_FirehoseDeliveryStreamSnowflakeConfiguration {
  // The name of the content column.
  contentColumnName?: string;

  // The passphrase for the private key.
  keyPassphrase?: string;

  // After an initial failure to deliver to Snowflake, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 60s.  There will be no retry if the value is 0.
  retryDuration?: number;

  // The S3 backup mode.
  s3BackupMode?: string;

  // The Secrets Manager configuration. See `secrets_manager_configuration` block below for details. This value is required if `user` and `private_key` are not provided.
  secretsManagerConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration;

  // The configuration for Snowflake role.
  snowflakeRoleConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration;

  // The VPC configuration for Snowflake.
  snowflakeVpcConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions;

  // The name of the metadata column.
  metadataColumnName?: string;

  // The ARN of the IAM role.
  roleArn?: string;

  // The Snowflake schema name.
  schema?: string;

  // The URL of the Snowflake account. Format: https://[account_identifier].snowflakecomputing.com.
  accountUrl?: string;

  // The private key for authentication. This value is required if `secrets_manager_configuration` is not provided.
  privateKey?: string;

  // The user for authentication. This value is required if `secrets_manager_configuration` is not provided.
  user?: string;

  // The data loading option.
  dataLoadingOption?: string;

  // The Snowflake database name.
  database?: string;

  // The processing configuration. See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration;

  // The S3 configuration. See `s3_configuration` block below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration;

  // The Snowflake table name.
  table?: string;
}

export function kinesis_FirehoseDeliveryStreamSnowflakeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schema',
      'The Snowflake schema name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountUrl',
      'The URL of the Snowflake account. Format: https://[account_identifier].snowflakecomputing.com.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'snowflakeRoleConfiguration',
      'The configuration for Snowflake role.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'retryDuration',
      'After an initial failure to deliver to Snowflake, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 60s.  There will be no retry if the value is 0.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3BackupMode',
      'The S3 backup mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'snowflakeVpcConfiguration',
      'The VPC configuration for Snowflake.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateKey',
      'The private key for authentication. This value is required if `secrets_manager_configuration` is not provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'processingConfiguration',
      'The processing configuration. See `processing_configuration` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Configuration',
      'The S3 configuration. See `s3_configuration` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contentColumnName',
      'The name of the content column.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'table',
      'The Snowflake table name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'user',
      'The user for authentication. This value is required if `secrets_manager_configuration` is not provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'secretsManagerConfiguration',
      'The Secrets Manager configuration. See `secrets_manager_configuration` block below for details. This value is required if `user` and `private_key` are not provided.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudwatchLoggingOptions',
      'The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'metadataColumnName',
      'The name of the metadata column.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataLoadingOption',
      'The data loading option.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'database',
      'The Snowflake database name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyPassphrase',
      'The passphrase for the private key.',
      () => [],
      false,
      false,
    ),
  ];
}
