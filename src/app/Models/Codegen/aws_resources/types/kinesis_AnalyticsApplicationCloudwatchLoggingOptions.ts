import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesis_AnalyticsApplicationCloudwatchLoggingOptions {
  // The ARN of the Kinesis Analytics Application.
  id?: string;

  // The ARN of the CloudWatch Log Stream.
  logStreamArn?: string;

  // The ARN of the IAM Role used to send application messages.
  roleArn?: string;
}

export function kinesis_AnalyticsApplicationCloudwatchLoggingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ARN of the Kinesis Analytics Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logStreamArn",
      "The ARN of the CloudWatch Log Stream.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM Role used to send application messages.",
      [],
      true,
      false,
    ),
  ];
}
