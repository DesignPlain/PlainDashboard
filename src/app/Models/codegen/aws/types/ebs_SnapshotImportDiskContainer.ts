import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ebs_SnapshotImportDiskContainerUserBucket,
  ebs_SnapshotImportDiskContainerUserBucket_GetTypes,
} from './ebs_SnapshotImportDiskContainerUserBucket';

export interface ebs_SnapshotImportDiskContainer {
  // The description of the disk image being imported.
  description?: string;

  // The format of the disk image being imported. One of `VHD` or `VMDK`.
  format?: string;

  // The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon S3 URL (s3://..). One of `url` or `user_bucket` must be set.
  url?: string;

  // The Amazon S3 bucket for the disk image. One of `url` or `user_bucket` must be set. Detailed below.
  userBucket?: ebs_SnapshotImportDiskContainerUserBucket;
}

export function ebs_SnapshotImportDiskContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'format',
      'The format of the disk image being imported. One of `VHD` or `VMDK`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'url',
      'The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon S3 URL (s3://..). One of `url` or `user_bucket` must be set.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'userBucket',
      'The Amazon S3 bucket for the disk image. One of `url` or `user_bucket` must be set. Detailed below.',
      () => ebs_SnapshotImportDiskContainerUserBucket_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the disk image being imported.',
      () => [],
      false,
      true,
    ),
  ];
}
