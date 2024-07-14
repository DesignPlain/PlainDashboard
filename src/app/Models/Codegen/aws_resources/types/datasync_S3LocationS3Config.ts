import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface datasync_S3LocationS3Config {
  // ARN of the IAM Role used to connect to the S3 Bucket.
  bucketAccessRoleArn?: string;
}

export function datasync_S3LocationS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketAccessRoleArn",
      "ARN of the IAM Role used to connect to the S3 Bucket.",
      [],
      true,
      true,
    ),
  ];
}
