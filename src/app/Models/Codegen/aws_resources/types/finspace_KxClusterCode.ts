import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface finspace_KxClusterCode {
  // Unique name for the S3 bucket.
  s3Bucket?: string;

  // Full S3 path (excluding bucket) to the .zip file that contains the code to be loaded onto the cluster when it’s started.
  s3Key?: string;

  // Version of an S3 Object.
  s3ObjectVersion?: string;
}

export function finspace_KxClusterCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3ObjectVersion",
      "Version of an S3 Object.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Bucket",
      "Unique name for the S3 bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Key",
      "Full S3 path (excluding bucket) to the .zip file that contains the code to be loaded onto the cluster when it’s started.",
      [],
      true,
      false,
    ),
  ];
}
