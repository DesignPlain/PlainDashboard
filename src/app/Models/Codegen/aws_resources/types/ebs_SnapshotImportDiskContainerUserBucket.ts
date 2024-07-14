import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ebs_SnapshotImportDiskContainerUserBucket {
  // The name of the Amazon S3 bucket where the disk image is located.
  s3Bucket?: string;

  // The file name of the disk image.
  s3Key?: string;
}

export function ebs_SnapshotImportDiskContainerUserBucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Bucket",
      "The name of the Amazon S3 bucket where the disk image is located.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Key",
      "The file name of the disk image.",
      [],
      true,
      true,
    ),
  ];
}
