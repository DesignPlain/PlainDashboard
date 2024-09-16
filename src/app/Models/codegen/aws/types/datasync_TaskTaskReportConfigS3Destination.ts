import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datasync_TaskTaskReportConfigS3Destination {
  // Specifies the Amazon Resource Name (ARN) of the IAM policy that allows DataSync to upload a task report to your S3 bucket.
  bucketAccessRoleArn?: string;

  // Specifies the ARN of the S3 bucket where DataSync uploads your report.
  s3BucketArn?: string;

  // Specifies a bucket prefix for your report.
  subdirectory?: string;
}

export function datasync_TaskTaskReportConfigS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketAccessRoleArn',
      'Specifies the Amazon Resource Name (ARN) of the IAM policy that allows DataSync to upload a task report to your S3 bucket.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3BucketArn',
      'Specifies the ARN of the S3 bucket where DataSync uploads your report.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subdirectory',
      'Specifies a bucket prefix for your report.',
      () => [],
      false,
      false,
    ),
  ];
}
