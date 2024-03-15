export interface InstanceBootDiskInitializeParams {
  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true.
*/
  EnableConfidentialCompute?: boolean;

  /*
The image from which to initialize this disk. This can be
one of: the image's `self_link`, `projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`. If referred by family, the
images names must include the family name. If they don't, use the
[gcp.compute.Image data source](https://www.terraform.io/docs/providers/google/d/compute_image.html).
For instance, the image `centos-6-v20180104` includes its family name `centos-6`.
These images can be referred by family name here.
*/
  Image?: string;

  /*
A set of key/value label pairs assigned to the disk. This
field is only applicable for persistent disks.
*/
  Labels?: Map<string, string>;

  /*
Indicates how many IOPS to provision for the disk.
This sets the number of I/O operations per second that the disk can handle.
For more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).
Note: Updating currently is only supported for hyperdisk skus via disk update
api/gcloud without the need to delete and recreate the disk, hyperdisk allows
for an update of IOPS every 4 hours. To update your hyperdisk more frequently,
you'll need to manually delete and recreate it.
*/
  ProvisionedIops?: number;

  /*
Indicates how much throughput to provision for the disk.
This sets the number of throughput mb per second that the disk can handle.
For more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).
Note: Updating currently is only supported for hyperdisk skus via disk update
api/gcloud without the need to delete and recreate the disk, hyperdisk allows
for an update of throughput every 4 hours. To update your hyperdisk more
frequently, you'll need to manually delete and recreate it.
*/
  ProvisionedThroughput?: number;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  /*
The size of the image in gigabytes. If not specified, it
will inherit the size of its base image.
*/
  Size?: number;

  // The GCE disk type. Such as pd-standard, pd-balanced or pd-ssd.
  Type?: string;
}
