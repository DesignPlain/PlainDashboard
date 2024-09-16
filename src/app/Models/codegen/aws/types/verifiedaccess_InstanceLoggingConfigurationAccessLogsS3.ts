import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_InstanceLoggingConfigurationAccessLogsS3 {
  // Indicates whether logging is enabled.
  enabled?: boolean;

  // The bucket prefix.
  prefix?: string;

  // The name of S3 bucket.
  bucketName?: string;

  // The ID of the AWS account that owns the Amazon S3 bucket.
  bucketOwner?: string;
}

export function verifiedaccess_InstanceLoggingConfigurationAccessLogsS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'The bucket prefix.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'The name of S3 bucket.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketOwner',
      'The ID of the AWS account that owns the Amazon S3 bucket.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Indicates whether logging is enabled.',
      () => [],
      true,
      false,
    ),
  ];
}
