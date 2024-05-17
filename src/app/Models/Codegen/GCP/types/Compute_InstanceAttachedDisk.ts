import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceAttachedDisk {
  /*
A 256-bit [customer-supplied encryption key]
(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),
encoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)
to encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw` may be set.
*/
  DiskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  DiskEncryptionKeySha256?: string;

  /*
The self_link of the encryption key that is
stored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`
and `disk_encryption_key_raw` may be set.
*/
  KmsKeySelfLink?: string;

  /*
Either "READ_ONLY" or "READ_WRITE", defaults to "READ_WRITE"
If you have a persistent disk with data that you want to share
between multiple instances, detach it from any read-write instances and
attach it to one or more instances in read-only mode.
*/
  Mode?: string;

  // The name or self_link of the disk to attach to this instance.
  Source?: string;

  /*
Name with which the attached disk will be accessible
under `/dev/disk/by-id/google--`
*/
  DeviceName?: string;
}

export function Compute_InstanceAttachedDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DiskEncryptionKeySha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The self_link of the encryption key that is\nstored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`\nand `disk_encryption_key_raw` may be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      'Either "READ_ONLY" or "READ_WRITE", defaults to "READ_WRITE"\nIf you have a persistent disk with data that you want to share\nbetween multiple instances, detach it from any read-write instances and\nattach it to one or more instances in read-only mode.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The name or self_link of the disk to attach to this instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "Name with which the attached disk will be accessible\nunder `/dev/disk/by-id/google-*`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskEncryptionKeyRaw",
      "A 256-bit [customer-supplied encryption key]\n(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),\nencoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)\nto encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw` may be set.",
      [],
      false,
      false,
    ),
  ];
}
