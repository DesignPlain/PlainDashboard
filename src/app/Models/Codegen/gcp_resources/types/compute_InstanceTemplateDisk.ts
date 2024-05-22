import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceTemplateDiskSourceSnapshotEncryptionKey,
  compute_InstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes,
} from "./compute_InstanceTemplateDiskSourceSnapshotEncryptionKey";
import {
  compute_InstanceTemplateDiskDiskEncryptionKey,
  compute_InstanceTemplateDiskDiskEncryptionKey_GetTypes,
} from "./compute_InstanceTemplateDiskDiskEncryptionKey";
import {
  compute_InstanceTemplateDiskSourceImageEncryptionKey,
  compute_InstanceTemplateDiskSourceImageEncryptionKey_GetTypes,
} from "./compute_InstanceTemplateDiskSourceImageEncryptionKey";

export interface compute_InstanceTemplateDisk {
  // - A list (short name or id) of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  /*
The image from which to
initialize this disk. This can be one of: the image's `self_link`,
`projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  sourceImage?: string;

  /*
The customer-supplied encryption
key of the source snapshot. Structure
documented below.
*/
  sourceSnapshotEncryptionKey?: compute_InstanceTemplateDiskSourceSnapshotEncryptionKey;

  /*
The size of the image in gigabytes. If not
specified, it will inherit the size of its base image. For SCRATCH disks,
the size must be exactly 375GB.
*/
  diskSizeGb?: number;

  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If you are attaching or creating a boot disk, this must
read-write mode.
*/
  mode?: string;

  // A set of key/value resource manager tag pairs to bind to this disk. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  resourceManagerTags?: Map<string, string>;

  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  source?: string;

  /*
The source snapshot to create this disk.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  sourceSnapshot?: string;

  /*
The type of GCE disk, can be either `"SCRATCH"` or
`"PERSISTENT"`.
*/
  type?: string;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  autoDelete?: boolean;

  /*
Encrypts or decrypts a disk using a customer-supplied encryption key.

If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.

If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.

If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.

Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group. Structure documented below.
*/
  diskEncryptionKey?: compute_InstanceTemplateDiskDiskEncryptionKey;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  diskType?: string;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  interface?: string;

  /*
A set of ket/value label pairs to assign to disk created from
this template
*/
  labels?: Map<string, string>;

  /*
Indicates how many IOPS to provision for the disk. This
sets the number of I/O operations per second that the disk can handle.
Values must be between 10,000 and 120,000. For more details, see the
[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).
*/
  provisionedIops?: number;

  /*
The customer-supplied encryption
key of the source image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied encryption keys, so you
cannot create disks for instances in a managed instance group if the source
images are encrypted with your own keys. Structure
documented below.
*/
  sourceImageEncryptionKey?: compute_InstanceTemplateDiskSourceImageEncryptionKey;

  // Indicates that this is a boot disk.
  boot?: boolean;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  deviceName?: string;

  /*
Name of the disk. When not provided, this defaults
to the name of the instance.
*/
  diskName?: string;
}

export function compute_InstanceTemplateDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourcePolicies",
      "- A list (short name or id) of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "The size of the image in gigabytes. If not\nspecified, it will inherit the size of its base image. For SCRATCH disks,\nthe size must be exactly 375GB.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The name (**not self_link**)\nof the disk (such as those managed by `gcp.compute.Disk`) to attach.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "diskEncryptionKey",
      "Encrypts or decrypts a disk using a customer-supplied encryption key.\n\nIf you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.\n\nIf you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.\n\nIf you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.\n\nInstance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group. Structure documented below.",
      compute_InstanceTemplateDiskDiskEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A set of ket/value label pairs to assign to disk created from\nthis template",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "A unique device name that is reflected into the\n/dev/  tree of a Linux operating system running within the instance. If not\nspecified, the server chooses a default device name to apply to this disk.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A set of key/value resource manager tag pairs to bind to this disk. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'The type of GCE disk, can be either `"SCRATCH"` or\n`"PERSISTENT"`.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      'The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,\n`"pd-balanced"` or `"pd-standard"`.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      "Specifies the disk interface to use for attaching this disk,\nwhich is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI\nand the request will fail if you attempt to attach a persistent disk in any other format\nthan SCSI. Local SSDs can use either NVME or SCSI.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedIops",
      "Indicates how many IOPS to provision for the disk. This\nsets the number of I/O operations per second that the disk can handle.\nValues must be between 10,000 and 120,000. For more details, see the\n[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "boot",
      "Indicates that this is a boot disk.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceImage",
      "The image from which to\ninitialize this disk. This can be one of: the image's `self_link`,\n`projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceSnapshotEncryptionKey",
      "The customer-supplied encryption\nkey of the source snapshot. Structure\ndocumented below.",
      compute_InstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceSnapshot",
      "The source snapshot to create this disk.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceImageEncryptionKey",
      "The customer-supplied encryption\nkey of the source image. Required if the source image is protected by a\ncustomer-supplied encryption key.\n\nInstance templates do not store customer-supplied encryption keys, so you\ncannot create disks for instances in a managed instance group if the source\nimages are encrypted with your own keys. Structure\ndocumented below.",
      compute_InstanceTemplateDiskSourceImageEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskName",
      "Name of the disk. When not provided, this defaults\nto the name of the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode in which to attach this disk, either READ_WRITE\nor READ_ONLY. If you are attaching or creating a boot disk, this must\nread-write mode.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "Whether or not the disk should be auto-deleted.\nThis defaults to true.",
      [],
      false,
      true,
    ),
  ];
}
