import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  // The ARN for the S3 bucket containing the application code.
  bucketArn?: string;

  // The file key for the object containing the application code.
  fileKey?: string;

  // The version of the object containing the application code.
  objectVersion?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketArn',
      'The ARN for the S3 bucket containing the application code.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileKey',
      'The file key for the object containing the application code.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'objectVersion',
      'The version of the object containing the application code.',
      () => [],
      false,
      false,
    ),
  ];
}
