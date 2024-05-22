import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_InventoryDestinationBucketEncryptionSseKms,
  s3_InventoryDestinationBucketEncryptionSseKms_GetTypes,
} from "./s3_InventoryDestinationBucketEncryptionSseKms";
import {
  s3_InventoryDestinationBucketEncryptionSseS3,
  s3_InventoryDestinationBucketEncryptionSseS3_GetTypes,
} from "./s3_InventoryDestinationBucketEncryptionSseS3";

export interface s3_InventoryDestinationBucketEncryption {
  // Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
  sseKms?: s3_InventoryDestinationBucketEncryptionSseKms;

  // Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
  sseS3?: s3_InventoryDestinationBucketEncryptionSseS3;
}

export function s3_InventoryDestinationBucketEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sseKms",
      "Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).",
      s3_InventoryDestinationBucketEncryptionSseKms_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sseS3",
      "Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.",
      s3_InventoryDestinationBucketEncryptionSseS3_GetTypes(),
      false,
      false,
    ),
  ];
}
