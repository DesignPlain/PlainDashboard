import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_getImageApplicationIconS3Location {
  // S3 key of the S3 object.
  s3Key?: string;

  // S3 bucket of the S3 object.
  s3Bucket?: string;
}

export function appstream_getImageApplicationIconS3Location_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3Key',
      'S3 key of the S3 object.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3Bucket',
      'S3 bucket of the S3 object.',
      () => [],
      true,
      false,
    ),
  ];
}
