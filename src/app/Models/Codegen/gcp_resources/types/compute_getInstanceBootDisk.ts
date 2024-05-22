import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getInstanceBootDiskInitializeParam,
  compute_getInstanceBootDiskInitializeParam_GetTypes,
} from "./compute_getInstanceBootDiskInitializeParam";

export interface compute_getInstanceBootDisk {
  // Read/write mode for the disk. One of `"READ_ONLY"` or `"READ_WRITE"`.
  mode?: string;

  // The name or self_link of the disk attached to this instance.
  source?: string;

  // Whether the disk will be auto-deleted when the instance is deleted.
  autoDelete?: boolean;

  /*
Name with which the attached disk is accessible
under `/dev/disk/by-id/`
*/
  deviceName?: string;

  // A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  diskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  diskEncryptionKeySha256?: string;

  /*
Parameters with which a disk was created alongside the instance.
Structure is documented below.
*/
  initializeParams?: Array<compute_getInstanceBootDiskInitializeParam>;

  // The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  kmsKeySelfLink?: string;
}

export function compute_getInstanceBootDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "initializeParams",
      "Parameters with which a disk was created alongside the instance.\nStructure is documented below.",
      compute_getInstanceBootDiskInitializeParam_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      'Read/write mode for the disk. One of `"READ_ONLY"` or `"READ_WRITE"`.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The name or self_link of the disk attached to this instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "Whether the disk will be auto-deleted when the instance is deleted.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name with which the attached disk is accessible\nunder `/dev/disk/by-id/`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskEncryptionKeyRaw",
      "A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskEncryptionKeySha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.",
      [],
      true,
      false,
    ),
  ];
}
