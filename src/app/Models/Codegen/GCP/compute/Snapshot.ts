import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SnapshotSourceDiskEncryptionKey,
  Compute_SnapshotSourceDiskEncryptionKey_GetTypes,
} from "../types/Compute_SnapshotSourceDiskEncryptionKey";
import {
  Compute_SnapshotSnapshotEncryptionKey,
  Compute_SnapshotSnapshotEncryptionKey_GetTypes,
} from "../types/Compute_SnapshotSnapshotEncryptionKey";

export interface SnapshotArgs {
  /*
Labels to apply to this Snapshot.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  SourceDiskEncryptionKey?: Compute_SnapshotSourceDiskEncryptionKey;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.
*/
  ChainName?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

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
  SnapshotEncryptionKey?: Compute_SnapshotSnapshotEncryptionKey;

  /*
A reference to the disk used to create this snapshot.


- - -
*/
  SourceDisk?: string;

  // Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
  StorageLocations?: Array<string>;

  // A reference to the zone where the disk is hosted.
  Zone?: string;

  // An optional description of this resource.
  Description?: string;
}
export class Snapshot extends Resource {
  /*
The customer-supplied encryption key of the source snapshot. Required
if the source snapshot is protected by a customer-supplied encryption
key.
Structure is documented below.
*/
  public SourceDiskEncryptionKey?: Compute_SnapshotSourceDiskEncryptionKey;

  // Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
  public StorageLocations?: Array<string>;

  /*
A list of public visible licenses that apply to this snapshot. This
can be because the original image had licenses attached (such as a
Windows image).  snapshotEncryptionKey nested object Encrypts the
snapshot using a customer-supplied encryption key.
*/
  public Licenses?: Array<string>;

  /*
Name of the resource; provided by the client when the resource is
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

  /*
A reference to the disk used to create this snapshot.


- - -
*/
  public SourceDisk?: string;

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
  public SnapshotEncryptionKey?: Compute_SnapshotSnapshotEncryptionKey;

  // A reference to the zone where the disk is hosted.
  public Zone?: string;

  /*
The fingerprint used for optimistic locking of this resource. Used
internally during updates.
*/
  public LabelFingerprint?: string;

  /*
Labels to apply to this Snapshot.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
A size of the storage used by the snapshot. As snapshots share
storage, this number is expected to change with snapshot
creation/deletion.
*/
  public StorageBytes?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The unique identifier for the resource.
  public SnapshotId?: number;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.
*/
  public ChainName?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  // Size of the snapshot, specified in GB.
  public DiskSizeGb?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "A reference to the zone where the disk is hosted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels to apply to this Snapshot.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ChainName",
        "Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and\ncomply with RFC1035. This is an uncommon option only for advanced\nservice owners who needs to create separate snapshot chains, for\nexample, for chargeback tracking.  When you describe your snapshot\nresource, this field is visible only if it has a non-empty value.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SnapshotEncryptionKey",
        "Encrypts the snapshot using a customer-supplied encryption key.\nAfter you encrypt a snapshot using a customer-supplied key, you must\nprovide the same key if you use the snapshot later. For example, you\nmust provide the encryption key when you create a disk from the\nencrypted snapshot in a future request.\nCustomer-supplied encryption keys do not protect access to metadata of\nthe snapshot.\nIf you do not provide an encryption key when creating the snapshot,\nthen the snapshot will be encrypted using an automatically generated\nkey and you do not need to provide a key to use the snapshot later.\nStructure is documented below.",
        Compute_SnapshotSnapshotEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceDisk",
        "A reference to the disk used to create this snapshot.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "StorageLocations",
        "Cloud Storage bucket storage location of the snapshot (regional or multi-regional).",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SourceDiskEncryptionKey",
        "The customer-supplied encryption key of the source snapshot. Required\nif the source snapshot is protected by a customer-supplied encryption\nkey.\nStructure is documented below.",
        Compute_SnapshotSourceDiskEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
