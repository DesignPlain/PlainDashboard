import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions_GetTypes,
} from './kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions_GetTypes,
} from './kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig_GetTypes,
} from './kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration_GetTypes,
} from './kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration';

export interface kinesis_FirehoseDeliveryStreamOpensearchConfiguration {
  // Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.
  bufferingInterval?: number;

  // Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.
  bufferingSize?: number;

  // The OpenSearch index rotation period.  Index rotation appends a timestamp to the IndexName to facilitate expiration of old data.  Valid values are `NoRotation`, `OneHour`, `OneDay`, `OneWeek`, and `OneMonth`.  The default value is `OneDay`.
  indexRotationPeriod?: string;

  // The endpoint to use when communicating with the cluster. Conflicts with `domain_arn`.
  clusterEndpoint?: string;

  // The method for setting up document ID. See [`document_id_options` block] below for details.
  documentIdOptions?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions;

  // The Elasticsearch type name with maximum length of 100 characters. Types are deprecated in OpenSearch_1.1. TypeName must be empty.
  typeName?: string;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions;

  // The ARN of the Amazon ES domain.  The pattern needs to be `arn:.-`.  Conflicts with `cluster_endpoint`.
  domainArn?: string;

  // The OpenSearch index name.
  indexName?: string;

  // The data processing configuration. See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration;

  // The VPC configuration for the delivery stream to connect to OpenSearch associated with the VPC. See `vpc_config` block below for details.
  vpcConfig?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig;

  // After an initial failure to deliver to Amazon OpenSearch, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.
  retryDuration?: number;

  // The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES Configuration API and for indexing documents.  The IAM role must have permission for `DescribeDomain`, `DescribeDomains`, and `DescribeDomainConfig`.  The pattern needs to be `arn:.-`.
  roleArn?: string;

  // Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.
  s3BackupMode?: string;

  // The S3 Configuration. See `s3_configuration` block below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration;
}

export function kinesis_FirehoseDeliveryStreamOpensearchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'retryDuration',
      'After an initial failure to deliver to Amazon OpenSearch, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'indexRotationPeriod',
      'The OpenSearch index rotation period.  Index rotation appends a timestamp to the IndexName to facilitate expiration of old data.  Valid values are `NoRotation`, `OneHour`, `OneDay`, `OneWeek`, and `OneMonth`.  The default value is `OneDay`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Configuration',
      'The S3 Configuration. See `s3_configuration` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'typeName',
      'The Elasticsearch type name with maximum length of 100 characters. Types are deprecated in OpenSearch_1.1. TypeName must be empty.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'documentIdOptions',
      'The method for setting up document ID. See [`document_id_options` block] below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'processingConfiguration',
      'The data processing configuration. See `processing_configuration` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'vpcConfig',
      'The VPC configuration for the delivery stream to connect to OpenSearch associated with the VPC. See `vpc_config` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      's3BackupMode',
      'Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterEndpoint',
      'The endpoint to use when communicating with the cluster. Conflicts with `domain_arn`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bufferingSize',
      'Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudwatchLoggingOptions',
      'The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'domainArn',
      'The ARN of the Amazon ES domain.  The pattern needs to be `arn:.*`.  Conflicts with `cluster_endpoint`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'indexName',
      'The OpenSearch index name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES Configuration API and for indexing documents.  The IAM role must have permission for `DescribeDomain`, `DescribeDomains`, and `DescribeDomainConfig`.  The pattern needs to be `arn:.*`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bufferingInterval',
      'Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.',
      () => [],
      false,
      false,
    ),
  ];
}
