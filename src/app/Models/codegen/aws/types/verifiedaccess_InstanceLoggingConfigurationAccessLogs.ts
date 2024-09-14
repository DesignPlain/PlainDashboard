import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedaccess_InstanceLoggingConfigurationAccessLogsS3,
  verifiedaccess_InstanceLoggingConfigurationAccessLogsS3_GetTypes,
} from "./verifiedaccess_InstanceLoggingConfigurationAccessLogsS3";
import {
  verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs,
  verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs_GetTypes,
} from "./verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs";
import {
  verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose,
  verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose_GetTypes,
} from "./verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose";

export interface verifiedaccess_InstanceLoggingConfigurationAccessLogs {
  // The logging version to use. Refer to [VerifiedAccessLogOptions](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VerifiedAccessLogOptions.html) for the allowed values.
  logVersion?: string;

  // A block that specifies configures sending Verified Access logs to S3. Detailed below.
  s3?: verifiedaccess_InstanceLoggingConfigurationAccessLogsS3;

  // A block that specifies configures sending Verified Access logs to CloudWatch Logs. Detailed below.
  cloudwatchLogs?: verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs;

  // Include trust data sent by trust providers into the logs.
  includeTrustContext?: boolean;

  // A block that specifies configures sending Verified Access logs to Kinesis. Detailed below.
  kinesisDataFirehose?: verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose;
}

export function verifiedaccess_InstanceLoggingConfigurationAccessLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "A block that specifies configures sending Verified Access logs to CloudWatch Logs. Detailed below.",
      () =>
        verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTrustContext",
      "Include trust data sent by trust providers into the logs.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisDataFirehose",
      "A block that specifies configures sending Verified Access logs to Kinesis. Detailed below.",
      () =>
        verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logVersion",
      "The logging version to use. Refer to [VerifiedAccessLogOptions](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VerifiedAccessLogOptions.html) for the allowed values.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "A block that specifies configures sending Verified Access logs to S3. Detailed below.",
      () => verifiedaccess_InstanceLoggingConfigurationAccessLogsS3_GetTypes(),
      false,
      false,
    ),
  ];
}
