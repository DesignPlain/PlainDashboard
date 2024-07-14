import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration";
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration";
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions";
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration";

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration {
  // The S3 Configuration. See `s3_configuration` block below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration;

  // The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.
  accessKey?: string;

  // Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
  bufferingInterval?: number;

  // Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
  bufferingSize?: number;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;

  // The request configuration.  See `request_configuration` block below for details.
  requestConfiguration?: kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;

  // Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs. The pattern needs to be `arn:.-`.
  roleArn?: string;

  // Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`.
  s3BackupMode?: string;

  // The HTTP endpoint name.
  name?: string;

  // The data processing configuration.  See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;

  // Total amount of seconds Firehose spends on retries. This duration starts after the initial attempt fails, It does not include the time periods during which Firehose waits for acknowledgment from the specified destination after each attempt. Valid values between `0` and `7200`. Default is `300`.
  retryDuration?: number;

  // The HTTP endpoint URL to which Kinesis Firehose sends your data.
  url?: string;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BackupMode",
      "Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingInterval",
      "Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingSize",
      "Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestConfiguration",
      "The request configuration.  See `request_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs. The pattern needs to be `arn:.*`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The HTTP endpoint name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingConfiguration",
      "The data processing configuration.  See `processing_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryDuration",
      "Total amount of seconds Firehose spends on retries. This duration starts after the initial attempt fails, It does not include the time periods during which Firehose waits for acknowledgment from the specified destination after each attempt. Valid values between `0` and `7200`. Default is `300`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The HTTP endpoint URL to which Kinesis Firehose sends your data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "The S3 Configuration. See `s3_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessKey",
      "The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLoggingOptions",
      "The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.",
      kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
