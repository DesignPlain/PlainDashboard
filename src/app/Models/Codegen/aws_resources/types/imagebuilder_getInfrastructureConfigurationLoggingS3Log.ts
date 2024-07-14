import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_getInfrastructureConfigurationLoggingS3Log {
  // Name of the S3 Bucket for logging.
  s3BucketName?: string;

  // Key prefix for S3 Bucket logging.
  s3KeyPrefix?: string;
}

export function imagebuilder_getInfrastructureConfigurationLoggingS3Log_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the S3 Bucket for logging.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "Key prefix for S3 Bucket logging.",
      [],
      true,
      false,
    ),
  ];
}
