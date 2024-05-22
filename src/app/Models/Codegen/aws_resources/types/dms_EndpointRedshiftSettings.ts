import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointRedshiftSettings {
  // Amazon Resource Name (ARN) of the IAM Role with permissions to read from or write to the S3 Bucket for intermediate storage.
  serviceAccessRoleArn?: string;

  // Custom S3 Bucket Object prefix for intermediate storage.
  bucketFolder?: string;

  // Custom S3 Bucket name for intermediate storage.
  bucketName?: string;

  // The server-side encryption mode that you want to encrypt your intermediate .csv object files copied to S3. Defaults to `SSE_S3`. Valid values are `SSE_S3` and `SSE_KMS`.
  encryptionMode?: string;

  // ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`.
  serverSideEncryptionKmsKeyId?: string;
}

export function dms_EndpointRedshiftSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "Amazon Resource Name (ARN) of the IAM Role with permissions to read from or write to the S3 Bucket for intermediate storage.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketFolder",
      "Custom S3 Bucket Object prefix for intermediate storage.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Custom S3 Bucket name for intermediate storage.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionMode",
      "The server-side encryption mode that you want to encrypt your intermediate .csv object files copied to S3. Defaults to `SSE_S3`. Valid values are `SSE_S3` and `SSE_KMS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverSideEncryptionKmsKeyId",
      "ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`.",
      [],
      false,
      false,
    ),
  ];
}
