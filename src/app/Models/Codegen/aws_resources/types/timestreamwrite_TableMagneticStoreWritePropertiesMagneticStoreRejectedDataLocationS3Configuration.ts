import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
  // KMS key arn for the customer s3 location when encrypting with a KMS managed key.
  kmsKeyId?: string;

  // Object key prefix for the customer S3 location.
  objectKeyPrefix?: string;

  // Bucket name of the customer S3 bucket.
  bucketName?: string;

  // Encryption option for the customer s3 location. Options are S3 server side encryption with an S3-managed key or KMS managed key. Valid values are `SSE_KMS` and `SSE_S3`.
  encryptionOption?: string;
}

export function timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "KMS key arn for the customer s3 location when encrypting with a KMS managed key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectKeyPrefix",
      "Object key prefix for the customer S3 location.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Bucket name of the customer S3 bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionOption",
      "Encryption option for the customer s3 location. Options are S3 server side encryption with an S3-managed key or KMS managed key. Valid values are `SSE_KMS` and `SSE_S3`.",
      [],
      false,
      false,
    ),
  ];
}
