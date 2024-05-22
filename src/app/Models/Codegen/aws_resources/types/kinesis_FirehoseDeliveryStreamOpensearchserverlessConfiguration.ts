import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration";
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig";
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions";
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration";

export interface kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration {
  // The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
  collectionEndpoint?: string;

  // Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.
  s3BackupMode?: string;

  // The S3 Configuration. See `s3_configuration` block below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration;

  // The VPC configuration for the delivery stream to connect to OpenSearch Serverless associated with the VPC. See `vpc_config` block below for details.
  vpcConfig?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig;

  // Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.
  bufferingInterval?: number;

  // Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.
  bufferingSize?: number;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions;

  // The Serverless offering for Amazon OpenSearch Service index name.
  indexName?: string;

  // The data processing configuration.  See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration;

  // After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time, in seconds between 0 to 7200, during which Kinesis Data Firehose retries delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.
  retryDuration?: number;

  // The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.  The pattern needs to be `arn:.-`.
  roleArn?: string;
}

export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bufferingSize",
      "Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLoggingOptions",
      "The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexName",
      "The Serverless offering for Amazon OpenSearch Service index name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingConfiguration",
      "The data processing configuration.  See `processing_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "The S3 Configuration. See `s3_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingInterval",
      "Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConfig",
      "The VPC configuration for the delivery stream to connect to OpenSearch Serverless associated with the VPC. See `vpc_config` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryDuration",
      "After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time, in seconds between 0 to 7200, during which Kinesis Data Firehose retries delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.  The pattern needs to be `arn:.*`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collectionEndpoint",
      "The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BackupMode",
      "Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.",
      [],
      false,
      true,
    ),
  ];
}
