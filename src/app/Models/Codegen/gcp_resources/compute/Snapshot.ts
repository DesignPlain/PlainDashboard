import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_SnapshotSnapshotEncryptionKey,
  compute_SnapshotSnapshotEncryptionKey_GetTypes,
} from "../types/compute_SnapshotSnapshotEncryptionKey";
import {
  compute_SnapshotSourceDiskEncryptionKey,
  compute_SnapshotSourceDiskEncryptionKey_GetTypes,
} from "../types/compute_SnapshotSourceDiskEncryptionKey";

export interface SnapshotArgs {
  /*
Name of the resource; provided by the client when the resource is
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
Encrypts the snapshot using a customer-supplied encryption key.
After you encrypt a snapshot using a customer-supplied key, you must
provide the same key if you use the snapshot later. For example, you
must provide the encryption key when you create a disk from the
encrypted snapshot in a future request.
Customer-supplied encryption keys do not protect access to metadata of
the snapshot.
If you do not provide an encryption key when creating the snapshot,
then the snapshot will be encrypted using an automatically generated
key and you do not need to provide a key to use the snapshot later.
Structure is documented below.
*/
  snapshotEncryptionKey?: compute_SnapshotSnapshotEncryptionKey;

  /*
A reference to the disk used to create this snapshot.


- - -
*/
  sourceDisk?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  sourceDiskEncryptionKey?: compute_SnapshotSourceDiskEncryptionKey;

  // Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
  storageLocations?: Array<string>;

  /*
Labels to apply to this Snapshot.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // An optional description of this resource.
  description?: string;

  // A reference to the zone where the disk is hosted.
  zone?: string;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.
*/
  chainName?: string;
}
export class Snapshot extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Encrypts the snapshot using a customer-supplied encryption key.
After you encrypt a snapshot using a customer-supplied key, you must
provide the same key if you use the snapshot later. For example, you
must provide the encryption key when you create a disk from the
encrypted snapshot in a future request.
Customer-supplied encryption keys do not protect access to metadata of
the snapshot.
If you do not provide an encryption key when creating the snapshot,
then the snapshot will be encrypted using an automatically generated
key and you do not need to provide a key to use the snapshot later.
Structure is documented below.
*/
  public snapshotEncryptionKey?: compute_SnapshotSnapshotEncryptionKey;

  /*
A size of the storage used by the snapshot. As snapshots share
storage, this number is expected to change with snapshot
creation/deletion.
*/
  public storageBytes?: number;

  // Size of the snapshot, specified in GB.
  public diskSizeGb?: number;

  // The unique identifier for the resource.
  public snapshotId?: number;

  /*
A list of public visible licenses that apply to this snapshot. This
can be because the original image had licenses attached (such as a
Windows image).  snapshotEncryptionKey nested object Encrypts the
snapshot using a customer-supplied encryption key.
*/
  public licenses?: Array<string>;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
A reference to the disk used to create this snapshot.


- - -
*/
  public sourceDisk?: string;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public sourceDiskEncryptionKey?: compute_SnapshotSourceDiskEncryptionKey;

  // A reference to the zone where the disk is hosted.
  public zone?: string;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.
*/
  public chainName?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  /*
The fingerprint used for optimistic locking of this resource. Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Labels to apply to this Snapshot.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
  public storageLocations?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "zone",
        "A reference to the zone where the disk is hosted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "storageLocations",
        "Cloud Storage bucket storage location of the snapshot (regional or multi-regional).",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this Snapshot.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "chainName",
        "Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and\ncomply with RFC1035. This is an uncommon option only for advanced\nservice owners who needs to create separate snapshot chains, for\nexample, for chargeback tracking.  When you describe your snapshot\nresource, this field is visible only if it has a non-empty value.",
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
        InputType.Object,
        "snapshotEncryptionKey",
        "Encrypts the snapshot using a customer-supplied encryption key.\nAfter you encrypt a snapshot using a customer-supplied key, you must\nprovide the same key if you use the snapshot later. For example, you\nmust provide the encryption key when you create a disk from the\nencrypted snapshot in a future request.\nCustomer-supplied encryption keys do not protect access to metadata of\nthe snapshot.\nIf you do not provide an encryption key when creating the snapshot,\nthen the snapshot will be encrypted using an automatically generated\nkey and you do not need to provide a key to use the snapshot later.\nStructure is documented below.",
        compute_SnapshotSnapshotEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDisk",
        "A reference to the disk used to create this snapshot.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceDiskEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
        compute_SnapshotSourceDiskEncryptionKey_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
