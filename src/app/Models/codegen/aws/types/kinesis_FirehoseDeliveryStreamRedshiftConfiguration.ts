import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions_GetTypes,
} from './kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration';

export interface kinesis_FirehoseDeliveryStreamRedshiftConfiguration {
  // The S3 Configuration. See s3_configuration below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration;

  // The jdbcurl of the redshift cluster.
  clusterJdbcurl?: string;

  // The password for the username above. This value is required if `secrets_manager_configuration` is not provided.
  password?: string;

  // The Amazon S3 backup mode.  Valid values are `Disabled` and `Enabled`.  Default value is `Disabled`.
  s3BackupMode?: string;

  // The data table columns that will be targeted by the copy command.
  dataTableColumns?: string;

  // The name of the table in the redshift cluster that the s3 bucket will copy to.
  dataTableName?: string;

  //
  secretsManagerConfiguration?: kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration;

  // The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of DurationInSeconds is 0 (zero) or if the first delivery attempt takes longer than the current value.
  retryDuration?: number;

  // The username that the firehose delivery stream will assume. It is strongly recommended that the username and password provided is used exclusively for Amazon Kinesis Firehose purposes, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. This value is required if `secrets_manager_configuration` is not provided.
  username?: string;

  // The arn of the role the stream assumes.
  roleArn?: string;

  /*
The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object.
`secrets_manager_configuration` - (Optional) The Secrets Manager configuration. See `secrets_manager_configuration` block below for details. This value is required if `username` and `password` are not provided.
*/
  s3BackupConfiguration?: kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;

  // Copy options for copying the data from the s3 intermediate bucket into redshift, for example to change the default delimiter. For valid values, see the [AWS documentation](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html)
  copyOptions?: string;

  // The data processing configuration.  See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
}

export function kinesis_FirehoseDeliveryStreamRedshiftConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'retryDuration',
      'The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of DurationInSeconds is 0 (zero) or if the first delivery attempt takes longer than the current value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The arn of the role the stream assumes.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudwatchLoggingOptions',
      'The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'copyOptions',
      'Copy options for copying the data from the s3 intermediate bucket into redshift, for example to change the default delimiter. For valid values, see the [AWS documentation](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterJdbcurl',
      'The jdbcurl of the redshift cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'The password for the username above. This value is required if `secrets_manager_configuration` is not provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3BackupMode',
      'The Amazon S3 backup mode.  Valid values are `Disabled` and `Enabled`.  Default value is `Disabled`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'secretsManagerConfiguration',
      '',
      () =>
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Configuration',
      'The S3 Configuration. See s3_configuration below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3BackupConfiguration',
      'The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object.\n`secrets_manager_configuration` - (Optional) The Secrets Manager configuration. See `secrets_manager_configuration` block below for details. This value is required if `username` and `password` are not provided.',
      () =>
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataTableColumns',
      'The data table columns that will be targeted by the copy command.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataTableName',
      'The name of the table in the redshift cluster that the s3 bucket will copy to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'The username that the firehose delivery stream will assume. It is strongly recommended that the username and password provided is used exclusively for Amazon Kinesis Firehose purposes, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. This value is required if `secrets_manager_configuration` is not provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'processingConfiguration',
      'The data processing configuration.  See `processing_configuration` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
