import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceBootDiskInitializeParams,
  Compute_InstanceBootDiskInitializeParams_GetTypes,
} from "./Compute_InstanceBootDiskInitializeParams";

export interface Compute_InstanceBootDisk {
  /*
Whether the disk will be auto-deleted when the instance
is deleted. Defaults to true.
*/
  AutoDelete?: boolean;

  /*
Name with which attached disk will be accessible.
On the instance, this device will be `/dev/disk/by-id/google-{{device_name}}`.
*/
  DeviceName?: string;

  /*
A 256-bit [customer-supplied encryption key]
(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),
encoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)
to encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw`
may be set.
*/
  DiskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  DiskEncryptionKeySha256?: string;

  /*
Parameters for a new disk that will be created
alongside the new instance. Either `initialize_params` or `source` must be set.
Structure is documented below.
*/
  InitializeParams?: Compute_InstanceBootDiskInitializeParams;

  /*
The self_link of the encryption key that is
stored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`
and `disk_encryption_key_raw` may be set.
*/
  KmsKeySelfLink?: string;

  /*
The mode in which to attach this disk, either `READ_WRITE`
or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode.
*/
  Mode?: string;

  /*
The name or self_link of the existing disk (such as those managed by
`gcp.compute.Disk`) or disk image. To create an instance from a snapshot, first create a
`gcp.compute.Disk` from a snapshot and reference it here.
*/
  Source?: string;
}

export function Compute_InstanceBootDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "The mode in which to attach this disk, either `READ_WRITE`\nor `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The name or self_link of the existing disk (such as those managed by\n`gcp.compute.Disk`) or disk image. To create an instance from a snapshot, first create a\n`gcp.compute.Disk` from a snapshot and reference it here.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoDelete",
      "Whether the disk will be auto-deleted when the instance\nis deleted. Defaults to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "Name with which attached disk will be accessible.\nOn the instance, this device will be `/dev/disk/by-id/google-{{device_name}}`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskEncryptionKeyRaw",
      "A 256-bit [customer-supplied encryption key]\n(https://cloud.google.com/compute/docs/disks/customer-supplied-encryption),\nencoded in [RFC 4648 base64](https://tools.ietf.org/html/rfc4648#section-4)\nto encrypt this disk. Only one of `kms_key_self_link` and `disk_encryption_key_raw`\nmay be set.",
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
      "Parameters for a new disk that will be created\nalongside the new instance. Either `initialize_params` or `source` must be set.\nStructure is documented below.",
      Compute_InstanceBootDiskInitializeParams_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The self_link of the encryption key that is\nstored in Google Cloud KMS to encrypt this disk. Only one of `kms_key_self_link`\nand `disk_encryption_key_raw` may be set.",
      [],
      false,
      true,
    ),
  ];
}
