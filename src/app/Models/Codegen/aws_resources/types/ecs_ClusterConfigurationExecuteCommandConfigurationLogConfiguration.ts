import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration {
  // Whether or not to enable encryption on the CloudWatch logs. If not specified, encryption will be disabled.
  cloudWatchEncryptionEnabled?: boolean;

  // The name of the CloudWatch log group to send logs to.
  cloudWatchLogGroupName?: string;

  // Whether or not to enable encryption on the logs sent to S3. If not specified, encryption will be disabled.
  s3BucketEncryptionEnabled?: boolean;

  // The name of the S3 bucket to send logs to.
  s3BucketName?: string;

  // An optional folder in the S3 bucket to place logs in.
  s3KeyPrefix?: string;
}

export function ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The name of the S3 bucket to send logs to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "An optional folder in the S3 bucket to place logs in.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cloudWatchEncryptionEnabled",
      "Whether or not to enable encryption on the CloudWatch logs. If not specified, encryption will be disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudWatchLogGroupName",
      "The name of the CloudWatch log group to send logs to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "s3BucketEncryptionEnabled",
      "Whether or not to enable encryption on the logs sent to S3. If not specified, encryption will be disabled.",
      [],
      false,
      false,
    ),
  ];
}
