import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceBootDiskInitializeParams,
  compute_InstanceBootDiskInitializeParams_GetTypes,
} from "./compute_InstanceBootDiskInitializeParams";

export interface compute_InstanceBootDisk {
  /*
The self_link of the encryption key that is
stored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`
and `disk_encryption_key_raw` may be set.
*/
  kmsKeySelfLink?: string;

  /*
The mode in which to attach this disk, either `READ_WRITE`
or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode.
*/
  mode?: string;

  /*
The name or self_link of the existing disk (such as those managed by
`gcp.compute.Disk`) or disk image. To create an instance from a snapshot, first create a
`gcp.compute.Disk` from a snapshot and reference it here.
*/
  source?: string;

  /*
Whether the disk will be auto-deleted when the instance
is deleted. Defaults to true.
*/
  autoDelete?: boolean;

  /*
Name with which attached disk will be accessible.
On the instance, this device will be `/dev/disk/by-id/google-{{device_name}}`.
*/
  deviceName?: string;

  /*
A 256-bit [customer-supplied encryption key]
(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),
encoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)
to encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw`
may be set.
*/
  diskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  diskEncryptionKeySha256?: string;

  /*
Parameters for a new disk that will be created
alongside the new instance. Either `initialize_params` or `source` must be set.
Structure is documented below.
*/
  initializeParams?: compute_InstanceBootDiskInitializeParams;
}

export function compute_InstanceBootDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "initializeParams",
      "Parameters for a new disk that will be created\nalongside the new instance. Either `initialize_params` or `source` must be set.\nStructure is documented below.",
      () => compute_InstanceBootDiskInitializeParams_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self_link of the encryption key that is\nstored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`\nand `disk_encryption_key_raw` may be set.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode in which to attach this disk, either `READ_WRITE`\nor `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The name or self_link of the existing disk (such as those managed by\n`gcp.compute.Disk`) or disk image. To create an instance from a snapshot, first create a\n`gcp.compute.Disk` from a snapshot and reference it here.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "Whether the disk will be auto-deleted when the instance\nis deleted. Defaults to true.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name with which attached disk will be accessible.\nOn the instance, this device will be `/dev/disk/by-id/google-{{device_name}}`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskEncryptionKeyRaw",
      "A 256-bit [customer-supplied encryption key]\n(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),\nencoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)\nto encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw`\nmay be set.",
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
  ];
}
