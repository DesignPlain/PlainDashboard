import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DiskDiskEncryptionKey } from "../types/DiskDiskEncryptionKey";
import { DiskSourceSnapshotEncryptionKey } from "../types/DiskSourceSnapshotEncryptionKey";
import { DiskAsyncPrimaryDisk } from "../types/DiskAsyncPrimaryDisk";
import { DiskSourceImageEncryptionKey } from "../types/DiskSourceImageEncryptionKey";
import { DiskGuestOsFeature } from "../types/DiskGuestOsFeature";

export interface DiskArgs {
  // A reference to the zone where the disk resides.
  Zone?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

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
  DiskEncryptionKey?: DiskDiskEncryptionKey;

  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true
*/
  EnableConfidentialCompute?: boolean;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Indicates how much Throughput must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  ProvisionedThroughput?: number;

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
  Size?: number;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  SourceSnapshotEncryptionKey?: DiskSourceSnapshotEncryptionKey;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  Interface?: string;

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
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Indicates how many IOPS must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  ProvisionedIops?: number;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  Type?: string;

  /*
A nested object resource
Structure is documented below.
*/
  AsyncPrimaryDisk?: DiskAsyncPrimaryDisk;

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

  // Indicates whether or not the disk can be read/write attached to more than one instance.
  MultiWriter?: boolean;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  PhysicalBlockSizeBytes?: number;

  /*
Resource policies applied to this disk for automatic snapshot creations.
~>--NOTE-- This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
`gcp.compute.DiskResourcePolicyAttachment`
to allow for updating the resource policy attached to the disk.
*/
  ResourcePolicies?: Array<string>;

  /*
The customer-supplied encryption key of the source image. Required if
the source image is protected by a customer-supplied encryption key.
Structure is documented below.
*/
  SourceImageEncryptionKey?: DiskSourceImageEncryptionKey;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  GuestOsFeatures?: Array<DiskGuestOsFeature>;

  // Any applicable license URI.
  Licenses?: Array<string>;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the
snapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:
- 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  Snapshot?: string;

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
  SourceDisk?: string;
}
export class Disk extends Resource {
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
  public Size?: number;

  // Last detach timestamp in RFC3339 text format.
  public LastDetachTimestamp?: string;

  // Indicates whether or not the disk can be read/write attached to more than one instance.
  public MultiWriter?: boolean;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  public PhysicalBlockSizeBytes?: number;

  /*
The ID value of the disk used to create this image. This value may
be used to determine whether the image was taken from the current
or a previous instance of a given disk name.
*/
  public SourceDiskId?: string;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  public Type?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Indicates how many IOPS must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  public ProvisionedIops?: number;

  // The URI of the created resource.
  public SelfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
The unique ID of the snapshot used to create this disk. This value
identifies the exact snapshot that was used to create this persistent
disk. For example, if you created the persistent disk from a snapshot
that was later deleted and recreated under the same name, the source
snapshot ID would identify the exact version of the snapshot that was
used.
*/
  public SourceSnapshotId?: string;

  // Any applicable license URI.
  public Licenses?: Array<string>;

  /*
Indicates how much Throughput must be provisioned for the disk.
Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
*/
  public ProvisionedThroughput?: number;

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
  public SourceDisk?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public DiskId?: string;

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
  public Image?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public SourceSnapshotEncryptionKey?: DiskSourceSnapshotEncryptionKey;

  // A reference to the zone where the disk resides.
  public Zone?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public LabelFingerprint?: string;

  // Last attach timestamp in RFC3339 text format.
  public LastAttachTimestamp?: string;

  /*
The ID value of the image used to create this disk. This value
identifies the exact image that was used to create this persistent
disk. For example, if you created the persistent disk from an image
that was later deleted and recreated under the same name, the source
image ID would identify the exact version of the image that was used.
*/
  public SourceImageId?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public AsyncPrimaryDisk?: DiskAsyncPrimaryDisk;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  public GuestOsFeatures?: Array<DiskGuestOsFeature>;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

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
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

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
  public DiskEncryptionKey?: DiskDiskEncryptionKey;

  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true
*/
  public EnableConfidentialCompute?: boolean;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  public Interface?: string;

  /*
The customer-supplied encryption key of the source image. Required if
the source image is protected by a customer-supplied encryption key.
Structure is documented below.
*/
  public SourceImageEncryptionKey?: DiskSourceImageEncryptionKey;

  /*
Links to the users of the disk (attached instances) in form:
project/zones/zone/instances/instance
*/
  public Users?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource policies applied to this disk for automatic snapshot creations.
~>--NOTE-- This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
`gcp.compute.DiskResourcePolicyAttachment`
to allow for updating the resource policy attached to the disk.
*/
  public ResourcePolicies?: Array<string>;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the
snapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:
- 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  public Snapshot?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ResourcePolicies",
        "Resource policies applied to this disk for automatic snapshot creations.\n~>**NOTE** This value does not support updating the\nresource policy, as resource policies can not be updated more than\none at a time. Use\n`gcp.compute.DiskResourcePolicyAttachment`\nto allow for updating the resource policy attached to the disk.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceDisk",
        "The source disk used to create this disk. You can provide this as a partial or full URL to the resource.\nFor example, the following are valid values:\n* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}\n* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}\n* projects/{project}/zones/{zone}/disks/{disk}\n* projects/{project}/regions/{region}/disks/{disk}\n* zones/{zone}/disks/{disk}\n* regions/{region}/disks/{disk}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels to apply to this disk.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ProvisionedIops",
        "Indicates how many IOPS must be provisioned for the disk.\nNote: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk\nallows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it",
      ),
      new DynamicUIProps(
        InputType.Number,
        "PhysicalBlockSizeBytes",
        "Physical block size of the persistent disk, in bytes. If not present\nin a request, a default value is used. Currently supported sizes\nare 4096 and 16384, other sizes may be added in the future.\nIf an unsupported value is requested, the error message will list\nthe supported values for the caller's project.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable disks.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "A reference to the zone where the disk resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiskEncryptionKey",
        "Encrypts the disk using a customer-supplied encryption key.\nAfter you encrypt a disk with a customer-supplied key, you must\nprovide the same key if you use the disk later (e.g. to create a disk\nsnapshot or an image, or to attach the disk to a virtual machine).\nCustomer-supplied encryption keys do not protect access to metadata of\nthe disk.\nIf you do not provide an encryption key when creating the disk, then\nthe disk will be encrypted using an automatically generated key and\nyou do not need to provide a key to use the disk later.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AsyncPrimaryDisk",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Image",
        "The image from which to initialize this disk. This can be\none of: the image's `self_link`, `projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`. If referred by family, the\nimages names must include the family name. If they don't, use the\n[gcp.compute.Image data source](https://www.terraform.io/docs/providers/google/d/compute_image.html).\nFor instance, the image `centos-6-v20180104` includes its family name `centos-6`.\nThese images can be referred by family name here.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "MultiWriter",
        "Indicates whether or not the disk can be read/write attached to more than one instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ProvisionedThroughput",
        "Indicates how much Throughput must be provisioned for the disk.\nNote: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk\nallows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Size",
        "Size of the persistent disk, specified in GB. You can specify this\nfield when creating a persistent disk using the `image` or\n`snapshot` parameter, or specify it alone to create an empty\npersistent disk.\nIf you specify this field along with `image` or `snapshot`,\nthe value must not be less than the size of the image\nor the size of the snapshot.\n~>**NOTE** If you change the size, the provider updates the disk size\nif upsizing is detected but recreates the disk if downsizing is requested.\nYou can add `lifecycle.prevent_destroy` in the config to prevent destroying\nand recreating.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceSnapshotEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Interface",
        "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.\n\n> **Warning:** `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "URL of the disk type resource describing which disk type to use to\ncreate the disk. Provide this when creating the disk.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceImageEncryptionKey",
        "The customer-supplied encryption key of the source image. Required if\nthe source image is protected by a customer-supplied encryption key.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableConfidentialCompute",
        "Whether this disk is using confidential compute mode.\nNote: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true",
      ),
      new DynamicUIProps(
        InputType.String,
        "Snapshot",
        "The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. If the\nsnapshot is in another project than this disk, you must supply a full URL. For example, the following are valid values:\n* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' *\n'projects/project/global/snapshots/snapshot' * 'global/snapshots/snapshot' * 'snapshot'",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Licenses",
        "Any applicable license URI.",
      ),
    ];
  }
}
