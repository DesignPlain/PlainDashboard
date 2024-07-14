import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionDiskSourceSnapshotEncryptionKey,
  compute_RegionDiskSourceSnapshotEncryptionKey_GetTypes,
} from "../types/compute_RegionDiskSourceSnapshotEncryptionKey";
import {
  compute_RegionDiskDiskEncryptionKey,
  compute_RegionDiskDiskEncryptionKey_GetTypes,
} from "../types/compute_RegionDiskDiskEncryptionKey";
import {
  compute_RegionDiskGuestOsFeature,
  compute_RegionDiskGuestOsFeature_GetTypes,
} from "../types/compute_RegionDiskGuestOsFeature";
import {
  compute_RegionDiskAsyncPrimaryDisk,
  compute_RegionDiskAsyncPrimaryDisk_GetTypes,
} from "../types/compute_RegionDiskAsyncPrimaryDisk";

export interface RegionDiskArgs {
  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
Labels to apply to this disk.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Any applicable license URI.
  licenses?: Array<string>;

  /*
Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
*/
  physicalBlockSizeBytes?: number;

  /*
URLs of the zones where the disk should be replicated to.


- - -
*/
  replicaZones?: Array<string>;

  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  type?: string;

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
  diskEncryptionKey?: compute_RegionDiskDiskEncryptionKey;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  interface?: string;

  /*
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For
example, the following are valid values: -
'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  snapshot?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  guestOsFeatures?: Array<compute_RegionDiskGuestOsFeature>;

  // A reference to the region where the disk resides.
  region?: string;

  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.
*/
  size?: number;

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
A nested object resource
Structure is documented below.
*/
  asyncPrimaryDisk?: compute_RegionDiskAsyncPrimaryDisk;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  sourceSnapshotEncryptionKey?: compute_RegionDiskSourceSnapshotEncryptionKey;
}
export class RegionDisk extends Resource {
  /*
URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
*/
  public type?: string;

  /*
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.

> --Warning:-- `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.
*/
  public interface?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.
If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.
*/
  public size?: number;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public sourceSnapshotEncryptionKey?: compute_RegionDiskSourceSnapshotEncryptionKey;

  // A reference to the region where the disk resides.
  public region?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable disks.
Structure is documented below.
*/
  public guestOsFeatures?: Array<compute_RegionDiskGuestOsFeature>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The ID value of the disk used to create this image. This value may
be used to determine whether the image was taken from the current
or a previous instance of a given disk name.
*/
  public sourceDiskId?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public asyncPrimaryDisk?: compute_RegionDiskAsyncPrimaryDisk;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

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
The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For
example, the following are valid values: -
'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' -
'projects/project/global/snapshots/snapshot' - 'global/snapshots/snapshot' - 'snapshot'
*/
  public snapshot?: string;

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
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
Links to the users of the disk (attached instances) in form:
project/zones/zone/instances/instance
*/
  public users?: Array<string>;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public labelFingerprint?: string;

  // Last attach timestamp in RFC3339 text format.
  public lastAttachTimestamp?: string;

  // Any applicable license URI.
  public licenses?: Array<string>;

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
  public diskEncryptionKey?: compute_RegionDiskDiskEncryptionKey;

  // Last detach timestamp in RFC3339 text format.
  public lastDetachTimestamp?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
URLs of the zones where the disk should be replicated to.


- - -
*/
  public replicaZones?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "snapshot",
        "The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For\nexample, the following are valid values: *\n'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot' *\n'projects/project/global/snapshots/snapshot' * 'global/snapshots/snapshot' * 'snapshot'",
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
        "interface",
        "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.\n\n> **Warning:** `interface` is deprecated and will be removed in a future major release. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "A reference to the region where the disk resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "size",
        "Size of the persistent disk, specified in GB. You can specify this\nfield when creating a persistent disk using the sourceImage or\nsourceSnapshot parameter, or specify it alone to create an empty\npersistent disk.\nIf you specify this field along with sourceImage or sourceSnapshot,\nthe value of sizeGb must not be less than the size of the sourceImage\nor the size of the snapshot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
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
        InputType.Array,
        "guestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable disks.\nStructure is documented below.",
        compute_RegionDiskGuestOsFeature_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "asyncPrimaryDisk",
        "A nested object resource\nStructure is documented below.",
        compute_RegionDiskAsyncPrimaryDisk_GetTypes(),
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
        InputType.Map,
        "labels",
        "Labels to apply to this disk.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replicaZones",
        "URLs of the zones where the disk should be replicated to.\n\n\n- - -",
        InputType_String_GetTypes(),
        true,
        true,
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
        InputType.Object,
        "diskEncryptionKey",
        "Encrypts the disk using a customer-supplied encryption key.\nAfter you encrypt a disk with a customer-supplied key, you must\nprovide the same key if you use the disk later (e.g. to create a disk\nsnapshot or an image, or to attach the disk to a virtual machine).\nCustomer-supplied encryption keys do not protect access to metadata of\nthe disk.\nIf you do not provide an encryption key when creating the disk, then\nthe disk will be encrypted using an automatically generated key and\nyou do not need to provide a key to use the disk later.\nStructure is documented below.",
        compute_RegionDiskDiskEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceSnapshotEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
        compute_RegionDiskSourceSnapshotEncryptionKey_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
