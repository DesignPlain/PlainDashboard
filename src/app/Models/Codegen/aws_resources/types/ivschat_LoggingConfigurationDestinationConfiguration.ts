import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs,
  ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs_GetTypes,
} from "./ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs";
import {
  ivschat_LoggingConfigurationDestinationConfigurationFirehose,
  ivschat_LoggingConfigurationDestinationConfigurationFirehose_GetTypes,
} from "./ivschat_LoggingConfigurationDestinationConfigurationFirehose";
import {
  ivschat_LoggingConfigurationDestinationConfigurationS3,
  ivschat_LoggingConfigurationDestinationConfigurationS3_GetTypes,
} from "./ivschat_LoggingConfigurationDestinationConfigurationS3";

export interface ivschat_LoggingConfigurationDestinationConfiguration {
  // An Amazon CloudWatch Logs destination configuration where chat activity will be logged.
  cloudwatchLogs?: ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs;

  // An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.
  firehose?: ivschat_LoggingConfigurationDestinationConfigurationFirehose;

  // An Amazon S3 destination configuration where chat activity will be logged.
  s3?: ivschat_LoggingConfigurationDestinationConfigurationS3;
}

export function ivschat_LoggingConfigurationDestinationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "An Amazon CloudWatch Logs destination configuration where chat activity will be logged.",
      ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.",
      ivschat_LoggingConfigurationDestinationConfigurationFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "An Amazon S3 destination configuration where chat activity will be logged.",
      ivschat_LoggingConfigurationDestinationConfigurationS3_GetTypes(),
      false,
      false,
    ),
  ];
}
