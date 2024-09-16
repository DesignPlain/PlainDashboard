import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_InstanceAttachedDisk {
  /*
Name with which the attached disk will be accessible
under `/dev/disk/by-id/google--`
*/
  deviceName?: string;

  /*
A 256-bit [customer-supplied encryption key]
(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),
encoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)
to encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw` may be set.
*/
  diskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  diskEncryptionKeySha256?: string;

  /*
The self_link of the encryption key that is
stored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`
and `disk_encryption_key_raw` may be set.
*/
  kmsKeySelfLink?: string;

  /*
Either "READ_ONLY" or "READ_WRITE", defaults to "READ_WRITE"
If you have a persistent disk with data that you want to share
between multiple instances, detach it from any read-write instances and
attach it to one or more instances in read-only mode.
*/
  mode?: string;

  // The name or self_link of the disk to attach to this instance.
  source?: string;
}

export function compute_InstanceAttachedDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Name with which the attached disk will be accessible\nunder `/dev/disk/by-id/google-*`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'diskEncryptionKeyRaw',
      'A 256-bit [customer-supplied encryption key]\n(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),\nencoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)\nto encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw` may be set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'diskEncryptionKeySha256',
      'The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeySelfLink',
      'The self_link of the encryption key that is\nstored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`\nand `disk_encryption_key_raw` may be set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      'Either "READ_ONLY" or "READ_WRITE", defaults to "READ_WRITE"\nIf you have a persistent disk with data that you want to share\nbetween multiple instances, detach it from any read-write instances and\nattach it to one or more instances in read-only mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'source',
      'The name or self_link of the disk to attach to this instance.',
      () => [],
      true,
      false,
    ),
  ];
}
