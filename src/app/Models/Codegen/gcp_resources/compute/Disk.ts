import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_DiskSourceImageEncryptionKey,
  compute_DiskSourceImageEncryptionKey_GetTypes,
} from "../types/compute_DiskSourceImageEncryptionKey";
import {
  compute_DiskSourceSnapshotEncryptionKey,
  compute_DiskSourceSnapshotEncryptionKey_GetTypes,
} from "../types/compute_DiskSourceSnapshotEncryptionKey";
import {
  compute_DiskGuestOsFeature,
  compute_DiskGuestOsFeature_GetTypes,
} from "../types/compute_DiskGuestOsFeature";
import {
  compute_DiskAsyncPrimaryDisk,
  compute_DiskAsyncPrimaryDisk_GetTypes,
} from "../types/compute_DiskAsyncPrimaryDisk";
import {
  compute_DiskDiskEncryptionKey,
  compute_DiskDiskEncryptionKey_GetTypes,
} from "../types/compute_DiskDiskEncryptionKey";

export interface DiskArgs {
  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  guestOsFeatures?: Array<compute_DiskGuestOsFeature>;

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
  image?: string;

  // Indicates whether or not the disk can be read/write attached to more than one instance.
  multiWriter?: boolean;

  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the `image` or
`snapshot` parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with `image` or `snapshot`,
the value must not be less than the size of the image
or the size of the snapshot.
~>--NOTE-- If you change the size, the provider updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add `lifecycle.prevent_destroy` in the config to prevent destroying
and recreating.
*/
  size?: number;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the
snapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:
- 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  snapshot?: string;

  /*
A nested object resource
Structure is documented below.
*/
  asyncPrimaryDisk?: compute_DiskAsyncPrimaryDisk;

  /*
Encrypts the disk using a customer-supplied encryption key.
After you encrypt a disk with a customer-supplied key, you must
provide the same key if you use the disk later (e.g. to create a disk
snapshot or an image, or to attach the disk to a virtual machine).
Customer-supplied encryption keys do not protect access to metadata of
the disk.
If you do not provide an encryption key when creating the disk, then
the disk will be encrypted using an automatically generated key and
you do not need to provide a key to use the disk later.
Structure is documented below.
*/
  diskEncryptionKey?: compute_DiskDiskEncryptionKey;

  // Any applicable license URI.
  licenses?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Indicates how much Throughput must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  provisionedThroughput?: number;

  /*
The customer-supplied encryption key of the source image. Required if
the source image is protected by a customer-supplied encryption key.
Structure is documented below.
*/
  sourceImageEncryptionKey?: compute_DiskSourceImageEncryptionKey;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  sourceSnapshotEncryptionKey?: compute_DiskSourceSnapshotEncryptionKey;

  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true
*/
  enableConfidentialCompute?: boolean;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  physicalBlockSizeBytes?: number;

  /*
Indicates how many IOPS must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  provisionedIops?: number;

  /*
The source disk used to create this disk. You can provide this as a partial or full URL to the resource.
For example, the following are valid values:
- https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
- https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
- projects/{project}/zones/{zone}/disks/{disk}
- projects/{project}/regions/{region}/disks/{disk}
- zones/{zone}/disks/{disk}
- regions/{region}/disks/{disk}
*/
  sourceDisk?: string;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  type?: string;

  // A reference to the zone where the disk resides.
  zone?: string;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  interface?: string;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
Resource policies applied to this disk for automatic snapshot creations.
~>--NOTE-- This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
`gcp.compute.DiskResourcePolicyAttachment`
to allow for updating the resource policy attached to the disk.
*/
  resourcePolicies?: Array<string>;
}
export class Disk extends Resource {
  // The unique identifier for the resource. This identifier is defined by the server.
  public diskId?: string;

  // Last attach timestamp in RFC3339 text format.
  public lastAttachTimestamp?: string;

  // Last detach timestamp in RFC3339 text format.
  public lastDetachTimestamp?: string;

  // Indicates whether or not the disk can be read/write attached to more than one instance.
  public multiWriter?: boolean;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the
snapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:
- 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  public snapshot?: string;

  /*
The customer-supplied encryption key of the source image. Required if
the source image is protected by a customer-supplied encryption key.
Structure is documented below.
*/
  public sourceImageEncryptionKey?: compute_DiskSourceImageEncryptionKey;

  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true
*/
  public enableConfidentialCompute?: boolean;

  /*
Indicates how much Throughput must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  public provisionedThroughput?: number;

  /*
The ID value of the disk used to create this image. This value may
be used to determine whether the image was taken from the current
or a previous instance of a given disk name.
*/
  public sourceDiskId?: string;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  public type?: string;

  /*
Links to the users of the disk (attached instances) in form:
project/zones/zone/instances/instance
*/
  public users?: Array<string>;

  /*
The source disk used to create this disk. You can provide this as a partial or full URL to the resource.
For example, the following are valid values:
- https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
- https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
- projects/{project}/zones/{zone}/disks/{disk}
- projects/{project}/regions/{region}/disks/{disk}
- zones/{zone}/disks/{disk}
- regions/{region}/disks/{disk}
*/
  public sourceDisk?: string;

  /*
The unique ID of the snapshot used to create this disk. This value
identifies the exact snapshot that was used to create this persistent
disk. For example, if you created the persistent disk from a snapshot
that was later deleted and recreated under the same name, the source
snapshot ID would identify the exact version of the snapshot that was
used.
*/
  public sourceSnapshotId?: string;

  /*
Encrypts the disk using a customer-supplied encryption key.
After you encrypt a disk with a customer-supplied key, you must
provide the same key if you use the disk later (e.g. to create a disk
snapshot or an image, or to attach the disk to a virtual machine).
Customer-supplied encryption keys do not protect access to metadata of
the disk.
If you do not provide an encryption key when creating the disk, then
the disk will be encrypted using an automatically generated key and
you do not need to provide a key to use the disk later.
Structure is documented below.
*/
  public diskEncryptionKey?: compute_DiskDiskEncryptionKey;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Any applicable license URI.
  public licenses?: Array<string>;

  /*
A nested object resource
Structure is documented below.
*/
  public asyncPrimaryDisk?: compute_DiskAsyncPrimaryDisk;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  public name?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  public guestOsFeatures?: Array<compute_DiskGuestOsFeature>;

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
  public image?: string;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  public interface?: string;

  // A reference to the zone where the disk resides.
  public zone?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Indicates how many IOPS must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  public provisionedIops?: number;

  /*
Resource policies applied to this disk for automatic snapshot creations.
~>--NOTE-- This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
`gcp.compute.DiskResourcePolicyAttachment`
to allow for updating the resource policy attached to the disk.
*/
  public resourcePolicies?: Array<string>;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The ID value of the image used to create this disk. This value
identifies the exact image that was used to create this persistent
disk. For example, if you created the persistent disk from an image
that was later deleted and recreated under the same name, the source
image ID would identify the exact version of the image that was used.
*/
  public sourceImageId?: string;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  public physicalBlockSizeBytes?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the `image` or
`snapshot` parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with `image` or `snapshot`,
the value must not be less than the size of the image
or the size of the snapshot.
~>--NOTE-- If you change the size, the provider updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add `lifecycle.prevent_destroy` in the config to prevent destroying
and recreating.
*/
  public size?: number;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public sourceSnapshotEncryptionKey?: compute_DiskSourceSnapshotEncryptionKey;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "sourceImageEncryptionKey",
        "The customer-supplied encryption key of the source image. Required if\nthe source image is protected by a customer-supplied encryption key.\nStructure is documented below.",
        compute_DiskSourceImageEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceSnapshotEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
        compute_DiskSourceSnapshotEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableConfidentialCompute",
        "Whether this disk is using confidential compute mode.\nNote: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "physicalBlockSizeBytes",
        "Physical block size of the persistent disk, in bytes. If not present\nin a request, a default value is used. Currently supported sizes\nare 4096 and 16384, other sizes may be added in the future.\nIf an unsupported value is requested, the error message will list\nthe supported values for the caller's project.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "image",
        "The image from which to initialize this disk. This can be\none of: the image's `self_link`, `projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`. If referred by family, the\nimages names must include the family name. If they don't, use the\n[gcp.compute.Image data source](https://www.terraform.io/docs/providers/google/d/compute_image.html).\nFor instance, the image `centos-6-v20180104` includes its family name `centos-6`.\nThese images can be referred by family name here.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiWriter",
        "Indicates whether or not the disk can be read/write attached to more than one instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "asyncPrimaryDisk",
        "A nested object resource\nStructure is documented below.",
        compute_DiskAsyncPrimaryDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "licenses",
        "Any applicable license URI.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "A reference to the zone where the disk resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourcePolicies",
        "Resource policies applied to this disk for automatic snapshot creations.\n~>**NOTE** This value does not support updating the\nresource policy, as resource policies can not be updated more than\none at a time. Use\n`gcp.compute.DiskResourcePolicyAttachment`\nto allow for updating the resource policy attached to the disk.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "provisionedThroughput",
        "Indicates how much Throughput must be provisioned for the disk.\nNote: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk\nallows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "provisionedIops",
        "Indicates how many IOPS must be provisioned for the disk.\nNote: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk\nallows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "URL of the disk type resource describing which disk type to use to\ncreate the disk. Provide this when creating the disk.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "size",
        "Size of the persistent disk, specified in GB. You can specify this\nfield when creating a persistent disk using the `image` or\n`snapshot` parameter, or specify it alone to create an empty\npersistent disk.\nIf you specify this field along with `image` or `snapshot`,\nthe value must not be less than the size of the image\nor the size of the snapshot.\n~>**NOTE** If you change the size, the provider updates the disk size\nif upsizing is detected but recreates the disk if downsizing is requested.\nYou can add `lifecycle.prevent_destroy` in the config to prevent destroying\nand recreating.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshot",
        "The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the\nsnapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:\n* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' *\n'projects/project/global/snapshots/snapshot' * 'global/snapshots/snapshot' * 'snapshot'",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "interface",
        "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.\n\n> **Warning:** `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this disk.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable disks.\nStructure is documented below.",
        compute_DiskGuestOsFeature_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "diskEncryptionKey",
        "Encrypts the disk using a customer-supplied encryption key.\nAfter you encrypt a disk with a customer-supplied key, you must\nprovide the same key if you use the disk later (e.g. to create a disk\nsnapshot or an image, or to attach the disk to a virtual machine).\nCustomer-supplied encryption keys do not protect access to metadata of\nthe disk.\nIf you do not provide an encryption key when creating the disk, then\nthe disk will be encrypted using an automatically generated key and\nyou do not need to provide a key to use the disk later.\nStructure is documented below.",
        compute_DiskDiskEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDisk",
        "The source disk used to create this disk. You can provide this as a partial or full URL to the resource.\nFor example, the following are valid values:\n* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}\n* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}\n* projects/{project}/zones/{zone}/disks/{disk}\n* projects/{project}/regions/{region}/disks/{disk}\n* zones/{zone}/disks/{disk}\n* regions/{region}/disks/{disk}",
        [],
        false,
        true,
      ),
    ];
  }
}
