import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig {
  /*
The ARN of an IAM role that CloudFront can use to send real-time log data to the Kinesis data stream.
See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) for more information.
*/
  roleArn?: string;

  // The ARN of the Kinesis data stream.
  streamArn?: string;
}

export function cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of an IAM role that CloudFront can use to send real-time log data to the Kinesis data stream.\nSee the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) for more information.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamArn",
      "The ARN of the Kinesis data stream.",
      [],
      true,
      false,
    ),
  ];
}
