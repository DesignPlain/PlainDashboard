import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig {
  // The location to send logs to. Valid values: `S3`, `CloudWatchLogs`, `KinesisDataFirehose`.
  logDestinationType?: string;

  // The type of log to send. Valid values: `ALERT` or `FLOW`. Alert logs report traffic that matches a `StatefulRule` with an action setting that sends a log message. Flow logs are standard network traffic flow logs.
  logType?: string;

  /*
A map describing the logging destination for the chosen `log_destination_type`.
- For an Amazon S3 bucket, specify the key `bucketName` with the name of the bucket and optionally specify the key `prefix` with a path.
- For a CloudWatch log group, specify the key `logGroup` with the name of the CloudWatch log group.
- For a Kinesis Data Firehose delivery stream, specify the key `deliveryStream` with the name of the delivery stream.
*/
  logDestination?: Map<string, string>;
}

export function networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logDestinationType",
      "The location to send logs to. Valid values: `S3`, `CloudWatchLogs`, `KinesisDataFirehose`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logType",
      "The type of log to send. Valid values: `ALERT` or `FLOW`. Alert logs report traffic that matches a `StatefulRule` with an action setting that sends a log message. Flow logs are standard network traffic flow logs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "logDestination",
      "A map describing the logging destination for the chosen `log_destination_type`.\n* For an Amazon S3 bucket, specify the key `bucketName` with the name of the bucket and optionally specify the key `prefix` with a path.\n* For a CloudWatch log group, specify the key `logGroup` with the name of the CloudWatch log group.\n* For a Kinesis Data Firehose delivery stream, specify the key `deliveryStream` with the name of the delivery stream.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
