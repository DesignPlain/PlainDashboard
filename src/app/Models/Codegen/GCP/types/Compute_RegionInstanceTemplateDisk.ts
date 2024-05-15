import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionInstanceTemplateDiskSourceImageEncryptionKey,
  Compute_RegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes,
} from "./Compute_RegionInstanceTemplateDiskSourceImageEncryptionKey";
import {
  Compute_RegionInstanceTemplateDiskSourceSnapshotEncryptionKey,
  Compute_RegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes,
} from "./Compute_RegionInstanceTemplateDiskSourceSnapshotEncryptionKey";
import {
  Compute_RegionInstanceTemplateDiskDiskEncryptionKey,
  Compute_RegionInstanceTemplateDiskDiskEncryptionKey_GetTypes,
} from "./Compute_RegionInstanceTemplateDiskDiskEncryptionKey";

export interface Compute_RegionInstanceTemplateDisk {
  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If you are attaching or creating a boot disk, this must
read-write mode.
*/
  Mode?: string;

  /*
Indicates how many IOPS to provision for the disk. This
sets the number of I/O operations per second that the disk can handle.
Values must be between 10,000 and 120,000. For more details, see the
[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).
*/
  ProvisionedIops?: number;

  /*
The image from which to
initialize this disk. This can be one of: the image's `self_link`,
`projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  SourceImage?: string;

  /*
The customer-supplied encryption
key of the source image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied encryption keys, so you
cannot create disks for instances in a managed instance group if the source
images are encrypted with your own keys. Structure
documented below.
*/
  SourceImageEncryptionKey?: Compute_RegionInstanceTemplateDiskSourceImageEncryptionKey;

  /*
The customer-supplied encryption
key of the source snapshot. Structure
documented below.
*/
  SourceSnapshotEncryptionKey?: Compute_RegionInstanceTemplateDiskSourceSnapshotEncryptionKey;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  AutoDelete?: boolean;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  DiskType?: string;

  /*
The type of GCE disk, can be either `"SCRATCH"` or
`"PERSISTENT"`.
*/
  Type?: string;

  /*
The size of the image in gigabytes. If not
specified, it will inherit the size of its base image. For SCRATCH disks,
the size must be exactly 375GB.
*/
  DiskSizeGb?: number;

  // A set of key/value resource manager tag pairs to bind to this disk. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  ResourceManagerTags?: Map<string, string>;

  /*
The source snapshot to create this disk.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  SourceSnapshot?: string;

  // Indicates that this is a boot disk.
  Boot?: boolean;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  DeviceName?: string;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  Interface?: string;

  /*
A set of ket/value label pairs to assign to disk created from
this template
*/
  Labels?: Map<string, string>;

  // - A list (short name or id) of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  Source?: string;

  /*
Encrypts or decrypts a disk using a customer-supplied encryption key.

If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.

If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.

If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.

Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group. Structure documented below.
*/
  DiskEncryptionKey?: Compute_RegionInstanceTemplateDiskDiskEncryptionKey;

  /*
Name of the disk. When not provided, this defaults
to the name of the instance.
*/
  DiskName?: string;
}

export function Compute_RegionInstanceTemplateDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Boot",
      "Indicates that this is a boot disk.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A set of ket/value label pairs to assign to disk created from\nthis template",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceImage",
      "The image from which to\ninitialize this disk. This can be one of: the image's `self_link`,\n`projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoDelete",
      "Whether or not the disk should be auto-deleted.\nThis defaults to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      'The type of GCE disk, can be either `"SCRATCH"` or\n`"PERSISTENT"`.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A set of key/value resource manager tag pairs to bind to this disk. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interface",
      "Specifies the disk interface to use for attaching this disk,\nwhich is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI\nand the request will fail if you attempt to attach a persistent disk in any other format\nthan SCSI. Local SSDs can use either NVME or SCSI.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The name (**not self_link**)\nof the disk (such as those managed by `gcp.compute.Disk`) to attach.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DiskEncryptionKey",
      "Encrypts or decrypts a disk using a customer-supplied encryption key.\n\nIf you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.\n\nIf you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.\n\nIf you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.\n\nInstance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group. Structure documented below.",
      Compute_RegionInstanceTemplateDiskDiskEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "The mode in which to attach this disk, either READ_WRITE\nor READ_ONLY. If you are attaching or creating a boot disk, this must\nread-write mode.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SourceImageEncryptionKey",
      "The customer-supplied encryption\nkey of the source image. Required if the source image is protected by a\ncustomer-supplied encryption key.\n\nInstance templates do not store customer-supplied encryption keys, so you\ncannot create disks for instances in a managed instance group if the source\nimages are encrypted with your own keys. Structure\ndocumented below.",
      Compute_RegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SourceSnapshotEncryptionKey",
      "The customer-supplied encryption\nkey of the source snapshot. Structure\ndocumented below.",
      Compute_RegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      'The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,\n`"pd-balanced"` or `"pd-standard"`.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "The size of the image in gigabytes. If not\nspecified, it will inherit the size of its base image. For SCRATCH disks,\nthe size must be exactly 375GB.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceSnapshot",
      "The source snapshot to create this disk.\n> **Note:** Either `source`, `source_image`, or `source_snapshot` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "A unique device name that is reflected into the\n/dev/  tree of a Linux operating system running within the instance. If not\nspecified, the server chooses a default device name to apply to this disk.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourcePolicies",
      "- A list (short name or id) of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ProvisionedIops",
      "Indicates how many IOPS to provision for the disk. This\nsets the number of I/O operations per second that the disk can handle.\nValues must be between 10,000 and 120,000. For more details, see the\n[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskName",
      "Name of the disk. When not provided, this defaults\nto the name of the instance.",
      [],
      false,
      true,
    ),
  ];
}
