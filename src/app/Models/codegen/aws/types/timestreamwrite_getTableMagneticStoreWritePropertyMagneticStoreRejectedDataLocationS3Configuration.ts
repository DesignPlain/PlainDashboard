import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration {
  // Name of S3 bucket.
  bucketName?: string;

  //
  encryptionOption?: string;

  // AWS KMS key ID for S3 location with AWS maanged key.
  kmsKeyId?: string;

  // Object key preview for S3 location.
  objectKeyPrefix?: string;
}

export function timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of S3 bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionOption",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "AWS KMS key ID for S3 location with AWS maanged key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectKeyPrefix",
      "Object key preview for S3 location.",
      () => [],
      true,
      false,
    ),
  ];
}
