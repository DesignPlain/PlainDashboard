import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceFromTemplateBootDiskInitializeParams,
  compute_InstanceFromTemplateBootDiskInitializeParams_GetTypes,
} from "./compute_InstanceFromTemplateBootDiskInitializeParams";

export interface compute_InstanceFromTemplateBootDisk {
  // Parameters with which a disk was created alongside the instance.
  initializeParams?: compute_InstanceFromTemplateBootDiskInitializeParams;

  // The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  kmsKeySelfLink?: string;

  // Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  mode?: string;

  // The name or self_link of the disk attached to this instance.
  source?: string;

  // Whether the disk will be auto-deleted when the instance is deleted.
  autoDelete?: boolean;

  // Name with which attached disk will be accessible under /dev/disk/by-id/
  deviceName?: string;

  // A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  diskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  diskEncryptionKeySha256?: string;
}

export function compute_InstanceFromTemplateBootDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      'Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The name or self_link of the disk attached to this instance.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "Whether the disk will be auto-deleted when the instance is deleted.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name with which attached disk will be accessible under /dev/disk/by-id/",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskEncryptionKeyRaw",
      "A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskEncryptionKeySha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "initializeParams",
      "Parameters with which a disk was created alongside the instance.",
      () => compute_InstanceFromTemplateBootDiskInitializeParams_GetTypes(),
      false,
      true,
    ),
  ];
}
