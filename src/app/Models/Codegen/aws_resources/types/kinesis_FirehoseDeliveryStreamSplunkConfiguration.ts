import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration";
import {
  kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration,
  kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration";
import {
  kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions";

export interface kinesis_FirehoseDeliveryStreamSplunkConfiguration {
  // Defines how documents should be delivered to Amazon S3.  Valid values are `FailedEventsOnly` and `AllEvents`.  Default value is `FailedEventsOnly`.
  s3BackupMode?: string;

  // The S3 Configuration. See `s3_configuration` block below for details.
  s3Configuration?: kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration;

  // Buffer incoming data to the specified size, in MBs between 1 to 5, before delivering it to the destination.  The default value is 5MB.
  bufferingSize?: number;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;

  // The data processing configuration.  See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;

  // The HEC endpoint type. Valid values are `Raw` or `Event`. The default value is `Raw`.
  hecEndpointType?: string;

  // The GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
  hecToken?: string;

  // After an initial failure to deliver to Splunk, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.
  retryDuration?: number;

  // Buffer incoming data for the specified period of time, in seconds between 0 to 60, before delivering it to the destination.  The default value is 60s.
  bufferingInterval?: number;

  // The amount of time, in seconds between 180 and 600, that Kinesis Firehose waits to receive an acknowledgment from Splunk after it sends it data.
  hecAcknowledgmentTimeout?: number;

  // The HTTP Event Collector (HEC) endpoint to which Kinesis Firehose sends your data.
  hecEndpoint?: string;
}

export function kinesis_FirehoseDeliveryStreamSplunkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hecEndpointType",
      "The HEC endpoint type. Valid values are `Raw` or `Event`. The default value is `Raw`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryDuration",
      "After an initial failure to deliver to Splunk, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hecAcknowledgmentTimeout",
      "The amount of time, in seconds between 180 and 600, that Kinesis Firehose waits to receive an acknowledgment from Splunk after it sends it data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingConfiguration",
      "The data processing configuration.  See `processing_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "The S3 Configuration. See `s3_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingSize",
      "Buffer incoming data to the specified size, in MBs between 1 to 5, before delivering it to the destination.  The default value is 5MB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLoggingOptions",
      "The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.",
      kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hecToken",
      "The GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingInterval",
      "Buffer incoming data for the specified period of time, in seconds between 0 to 60, before delivering it to the destination.  The default value is 60s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hecEndpoint",
      "The HTTP Event Collector (HEC) endpoint to which Kinesis Firehose sends your data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BackupMode",
      "Defines how documents should be delivered to Amazon S3.  Valid values are `FailedEventsOnly` and `AllEvents`.  Default value is `FailedEventsOnly`.",
      [],
      false,
      false,
    ),
  ];
}
