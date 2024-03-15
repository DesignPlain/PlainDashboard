import { InstanceTemplateDiskDiskEncryptionKey } from "./InstanceTemplateDiskDiskEncryptionKey";
import { InstanceTemplateDiskSourceSnapshotEncryptionKey } from "./InstanceTemplateDiskSourceSnapshotEncryptionKey";
import { InstanceTemplateDiskSourceImageEncryptionKey } from "./InstanceTemplateDiskSourceImageEncryptionKey";

export interface InstanceTemplateDisk {
  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  Source?: string;

  // - A list (short name or id) of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: string;

  /*
The source snapshot to create this disk.
> --Note:-- Either `source`, `source_image`, or `source_snapshot` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  SourceSnapshot?: string;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  AutoDelete?: boolean;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  DeviceName?: string;

  /*
Encrypts or decrypts a disk using a customer-supplied encryption key.

If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.

If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.

If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.

Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group. Structure documented below.
*/
  DiskEncryptionKey?: InstanceTemplateDiskDiskEncryptionKey;

  /*
Name of the disk. When not provided, this defaults
to the name of the instance.
*/
  DiskName?: string;

  /*
The size of the image in gigabytes. If not
specified, it will inherit the size of its base image. For SCRATCH disks,
the size must be exactly 375GB.
*/
  DiskSizeGb?: number;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  DiskType?: string;

  /*
The customer-supplied encryption
key of the source snapshot. Structure
documented below.
*/
  SourceSnapshotEncryptionKey?: InstanceTemplateDiskSourceSnapshotEncryptionKey;

  // Indicates that this is a boot disk.
  Boot?: boolean;

  /*
A set of ket/value label pairs to assign to disk created from
this template
*/
  Labels?: Map<string, string>;

  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If you are attaching or creating a boot disk, this must
read-write mode.
*/
  Mode?: string;

  // A set of key/value resource manager tag pairs to bind to this disk. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
  ResourceManagerTags?: Map<string, string>;

  /*
The customer-supplied encryption
key of the source image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied encryption keys, so you
cannot create disks for instances in a managed instance group if the source
images are encrypted with your own keys. Structure
documented below.
*/
  SourceImageEncryptionKey?: InstanceTemplateDiskSourceImageEncryptionKey;

  /*
The type of GCE disk, can be either `"SCRATCH"` or
`"PERSISTENT"`.
*/
  Type?: string;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  Interface?: string;

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
}
