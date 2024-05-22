import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_FeatureGroupOfflineStoreConfigS3StorageConfig {
  // The AWS Key Management Service (KMS) key ID of the key used to encrypt any objects written into the OfflineStore S3 location.
  kmsKeyId?: string;

  // The S3 path where offline records are written.
  resolvedOutputS3Uri?: string;

  // The S3 URI, or location in Amazon S3, of OfflineStore.
  s3Uri?: string;
}

export function sagemaker_FeatureGroupOfflineStoreConfigS3StorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The AWS Key Management Service (KMS) key ID of the key used to encrypt any objects written into the OfflineStore S3 location.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "resolvedOutputS3Uri",
      "The S3 path where offline records are written.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The S3 URI, or location in Amazon S3, of OfflineStore.",
      [],
      true,
      true,
    ),
  ];
}
