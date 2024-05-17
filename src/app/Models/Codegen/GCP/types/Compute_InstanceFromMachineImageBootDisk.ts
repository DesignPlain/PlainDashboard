import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromMachineImageBootDiskInitializeParams,
  Compute_InstanceFromMachineImageBootDiskInitializeParams_GetTypes,
} from "./Compute_InstanceFromMachineImageBootDiskInitializeParams";

export interface Compute_InstanceFromMachineImageBootDisk {
  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  DiskEncryptionKeySha256?: string;

  // Parameters with which a disk was created alongside the instance.
  InitializeParams?: Compute_InstanceFromMachineImageBootDiskInitializeParams;

  // The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  KmsKeySelfLink?: string;

  // Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  Mode?: string;

  // The name or self_link of the disk attached to this instance.
  Source?: string;

  // Whether the disk will be auto-deleted when the instance is deleted.
  AutoDelete?: boolean;

  // Name with which attached disk will be accessible under /dev/disk/by-id/
  DeviceName?: string;

  // A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  DiskEncryptionKeyRaw?: string;
}

export function Compute_InstanceFromMachineImageBootDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      'Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The name or self_link of the disk attached to this instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoDelete",
      "Whether the disk will be auto-deleted when the instance is deleted.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "Name with which attached disk will be accessible under /dev/disk/by-id/",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskEncryptionKeyRaw",
      "A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskEncryptionKeySha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InitializeParams",
      "Parameters with which a disk was created alongside the instance.",
      Compute_InstanceFromMachineImageBootDiskInitializeParams_GetTypes(),
      false,
      true,
    ),
  ];
}
