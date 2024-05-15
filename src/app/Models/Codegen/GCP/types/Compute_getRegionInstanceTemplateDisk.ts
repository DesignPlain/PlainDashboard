import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getRegionInstanceTemplateDiskDiskEncryptionKey,
  Compute_getRegionInstanceTemplateDiskDiskEncryptionKey_GetTypes,
} from "./Compute_getRegionInstanceTemplateDiskDiskEncryptionKey";
import {
  Compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey,
  Compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes,
} from "./Compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey";
import {
  Compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey,
  Compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes,
} from "./Compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey";

export interface Compute_getRegionInstanceTemplateDisk {
  /*
The customer-supplied encryption key of the source
image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied
encryption keys, so you cannot create disks for
instances in a managed instance group if the source
images are encrypted with your own keys.
*/
  SourceImageEncryptionKeys?: Array<Compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  AutoDelete?: boolean;

  /*
(Optional) A set of ket/value label pairs to assign to disk created from
this template
*/
  Labels?: Map<string, string>;

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

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  // The customer-supplied encryption key of the source snapshot.
  SourceSnapshotEncryptionKeys?: Array<Compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey>;

  /*
The source snapshot to create this disk. When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.
*/
  SourceSnapshot?: string;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  DeviceName?: string;

  // Encrypts or decrypts a disk using a customer-supplied encryption key.
  DiskEncryptionKeys?: Array<Compute_getRegionInstanceTemplateDiskDiskEncryptionKey>;

  /*
The size of the image in gigabytes. If not
specified, it will inherit the size of its base image. For SCRATCH disks,
the size must be exactly 375GB.
*/
  DiskSizeGb?: number;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  Interface?: string;

  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source` or `source_image` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  Source?: string;

  // Indicates that this is a boot disk.
  Boot?: boolean;

  /*
Name of the disk. When not provided, this defaults
to the name of the instance.
*/
  DiskName?: string;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  DiskType?: string;

  // (Optional) -- A list of short names of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: Array<string>;

  /*
The image from which to
initialize this disk. This can be one of: the image's `self_link`,
`projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`.
> --Note:-- Either `source` or `source_image` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  SourceImage?: string;
}

export function Compute_getRegionInstanceTemplateDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SourceImageEncryptionKeys",
      "The customer-supplied encryption key of the source\nimage. Required if the source image is protected by a\ncustomer-supplied encryption key.\n\nInstance templates do not store customer-supplied\nencryption keys, so you cannot create disks for\ninstances in a managed instance group if the source\nimages are encrypted with your own keys.",
      Compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "(Optional) A set of ket/value label pairs to assign to disk created from\nthis template",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ProvisionedIops",
      "Indicates how many IOPS to provision for the disk. This\nsets the number of I/O operations per second that the disk can handle.\nValues must be between 10,000 and 120,000. For more details, see the\n[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceSnapshotEncryptionKeys",
      "The customer-supplied encryption key of the source snapshot.",
      Compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DiskEncryptionKeys",
      "Encrypts or decrypts a disk using a customer-supplied encryption key.",
      Compute_getRegionInstanceTemplateDiskDiskEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interface",
      "Specifies the disk interface to use for attaching this disk,\nwhich is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI\nand the request will fail if you attempt to attach a persistent disk in any other format\nthan SCSI. Local SSDs can use either NVME or SCSI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "The mode in which to attach this disk, either READ_WRITE\nor READ_ONLY. If you are attaching or creating a boot disk, this must\nread-write mode.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "A unique device name that is reflected into the\n/dev/  tree of a Linux operating system running within the instance. If not\nspecified, the server chooses a default device name to apply to this disk.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoDelete",
      "Whether or not the disk should be auto-deleted.\nThis defaults to true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Boot",
      "Indicates that this is a boot disk.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskName",
      "Name of the disk. When not provided, this defaults\nto the name of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceImage",
      "The image from which to\ninitialize this disk. This can be one of: the image's `self_link`,\n`projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`.\n> **Note:** Either `source` or `source_image` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceSnapshot",
      "The source snapshot to create this disk. When creating\na new instance, one of initializeParams.sourceSnapshot,\ninitializeParams.sourceImage, or disks.source is\nrequired except for local SSD.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "The size of the image in gigabytes. If not\nspecified, it will inherit the size of its base image. For SCRATCH disks,\nthe size must be exactly 375GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Source",
      "The name (**not self_link**)\nof the disk (such as those managed by `gcp.compute.Disk`) to attach.\n> **Note:** Either `source` or `source_image` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      'The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,\n`"pd-balanced"` or `"pd-standard"`.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResourcePolicies",
      "(Optional) -- A list of short names of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
