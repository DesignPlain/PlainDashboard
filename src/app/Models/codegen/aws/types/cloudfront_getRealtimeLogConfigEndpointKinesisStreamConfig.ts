import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig {
  // (Required) ARN of the Kinesis data stream.
  streamArn?: string;

  /*
(Required) ARN of an IAM role that CloudFront can use to send real-time log data to the Kinesis data stream.
See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) for more information.
*/
  roleArn?: string;
}

export function cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamArn",
      "(Required) ARN of the Kinesis data stream.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "(Required) ARN of an IAM role that CloudFront can use to send real-time log data to the Kinesis data stream.\nSee the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) for more information.",
      () => [],
      true,
      false,
    ),
  ];
}
