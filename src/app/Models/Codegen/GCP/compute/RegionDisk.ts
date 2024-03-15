import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionDiskGuestOsFeature } from "../types/RegionDiskGuestOsFeature";
import { RegionDiskSourceSnapshotEncryptionKey } from "../types/RegionDiskSourceSnapshotEncryptionKey";
import { RegionDiskAsyncPrimaryDisk } from "../types/RegionDiskAsyncPrimaryDisk";
import { RegionDiskDiskEncryptionKey } from "../types/RegionDiskDiskEncryptionKey";

export interface RegionDiskArgs {
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

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Any applicable license URI.
  Licenses?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  PhysicalBlockSizeBytes?: number;

  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.
*/
  Size?: number;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For
example, the following are valid values: -
'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  Snapshot?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the region where the disk resides.
  Region?: string;

  /*
URLs of the zones where the disk should be replicated to.


- - -
*/
  ReplicaZones?: Array<string>;

  /*
A nested object resource
Structure is documented below.
*/
  AsyncPrimaryDisk?: RegionDiskAsyncPrimaryDisk;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  Type?: string;

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
  DiskEncryptionKey?: RegionDiskDiskEncryptionKey;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  GuestOsFeatures?: Array<RegionDiskGuestOsFeature>;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  Interface?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  SourceSnapshotEncryptionKey?: RegionDiskSourceSnapshotEncryptionKey;
}
export class RegionDisk extends Resource {
  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.
*/
  public Size?: number;

  /*
Links to the users of the disk (attached instances) in form:
project/zones/zone/instances/instance
*/
  public Users?: Array<string>;

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

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Last detach timestamp in RFC3339 text format.
  public LastDetachTimestamp?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For
example, the following are valid values: -
'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  public Snapshot?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public SourceSnapshotEncryptionKey?: RegionDiskSourceSnapshotEncryptionKey;

  // Last attach timestamp in RFC3339 text format.
  public LastAttachTimestamp?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The unique ID of the snapshot used to create this disk. This value
identifies the exact snapshot that was used to create this persistent
disk. For example, if you created the persistent disk from a snapshot
that was later deleted and recreated under the same name, the source
snapshot ID would identify the exact version of the snapshot that was
used.
*/
  public SourceSnapshotId?: string;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  public Interface?: string;

  /*
The ID value of the disk used to create this image. This value may
be used to determine whether the image was taken from the current
or a previous instance of a given disk name.
*/
  public SourceDiskId?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  public GuestOsFeatures?: Array<RegionDiskGuestOsFeature>;

  // A reference to the region where the disk resides.
  public Region?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public AsyncPrimaryDisk?: RegionDiskAsyncPrimaryDisk;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  public PhysicalBlockSizeBytes?: number;

  // Any applicable license URI.
  public Licenses?: Array<string>;

  /*
URLs of the zones where the disk should be replicated to.


- - -
*/
  public ReplicaZones?: Array<string>;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  public Type?: string;

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
  public DiskEncryptionKey?: RegionDiskDiskEncryptionKey;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public LabelFingerprint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SourceDisk",
        "The source disk used to create this disk. You can provide this as a partial or full URL to the resource.\nFor example, the following are valid values:\n* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}\n* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}\n* projects/{project}/zones/{zone}/disks/{disk}\n* projects/{project}/regions/{region}/disks/{disk}\n* zones/{zone}/disks/{disk}\n* regions/{region}/disks/{disk}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Interface",
        "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.\n\n> **Warning:** `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceSnapshotEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Licenses",
        "Any applicable license URI.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Snapshot",
        "The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For\nexample, the following are valid values: *\n'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' *\n'projects/project/global/snapshots/snapshot' * 'global/snapshots/snapshot' * 'snapshot'",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiskEncryptionKey",
        "Encrypts the disk using a customer-supplied encryption key.\nAfter you encrypt a disk with a customer-supplied key, you must\nprovide the same key if you use the disk later (e.g. to create a disk\nsnapshot or an image, or to attach the disk to a virtual machine).\nCustomer-supplied encryption keys do not protect access to metadata of\nthe disk.\nIf you do not provide an encryption key when creating the disk, then\nthe disk will be encrypted using an automatically generated key and\nyou do not need to provide a key to use the disk later.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region where the disk resides.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ReplicaZones",
        "URLs of the zones where the disk should be replicated to.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "AsyncPrimaryDisk",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "URL of the disk type resource describing which disk type to use to\ncreate the disk. Provide this when creating the disk.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels to apply to this disk.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "PhysicalBlockSizeBytes",
        "Physical block size of the persistent disk, in bytes. If not present\nin a request, a default value is used. Currently supported sizes\nare 4096 and 16384, other sizes may be added in the future.\nIf an unsupported value is requested, the error message will list\nthe supported values for the caller's project.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Size",
        "Size of the persistent disk, specified in GB. You can specify this\nfield when creating a persistent disk using the sourceImage or\nsourceSnapshot parameter, or specify it alone to create an empty\npersistent disk.\nIf you specify this field along with sourceImage or sourceSnapshot,\nthe value of sizeGb must not be less than the size of the sourceImage\nor the size of the snapshot.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable disks.\nStructure is documented below.",
      ),
    ];
  }
}
