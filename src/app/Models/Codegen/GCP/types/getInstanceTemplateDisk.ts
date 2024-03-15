import { getInstanceTemplateDiskSourceImageEncryptionKey } from "./getInstanceTemplateDiskSourceImageEncryptionKey";
import { getInstanceTemplateDiskSourceSnapshotEncryptionKey } from "./getInstanceTemplateDiskSourceSnapshotEncryptionKey";
import { getInstanceTemplateDiskDiskEncryptionKey } from "./getInstanceTemplateDiskDiskEncryptionKey";

export interface getInstanceTemplateDisk {
  /*
The source snapshot to create this disk. When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.
*/
  SourceSnapshot?: string;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  DiskType?: string;

  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If you are attaching or creating a boot disk, this must
read-write mode.
*/
  Mode?: string;

  // (Optional) -- A list of short names of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  ResourcePolicies?: Array<string>;

  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source` or `source_image` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  Source?: string;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  DeviceName?: string;

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
Indicates how many IOPS to provision for the disk. This
sets the number of I/O operations per second that the disk can handle.
Values must be between 10,000 and 120,000. For more details, see the
[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).
*/
  ProvisionedIops?: number;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  AutoDelete?: boolean;

  // Indicates that this is a boot disk.
  Boot?: boolean;

  /*
(Optional) A set of ket/value label pairs to assign to disk created from
this template
*/
  Labels?: Map<string, string>;

  // The customer-supplied encryption key of the source snapshot.
  SourceSnapshotEncryptionKeys?: Array<getInstanceTemplateDiskSourceSnapshotEncryptionKey>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;

  // Encrypts or decrypts a disk using a customer-supplied encryption key.
  DiskEncryptionKeys?: Array<getInstanceTemplateDiskDiskEncryptionKey>;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  Interface?: string;

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

  /*
The customer-supplied encryption key of the source
image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied
encryption keys, so you cannot create disks for
instances in a managed instance group if the source
images are encrypted with your own keys.
*/
  SourceImageEncryptionKeys?: Array<getInstanceTemplateDiskSourceImageEncryptionKey>;
}
