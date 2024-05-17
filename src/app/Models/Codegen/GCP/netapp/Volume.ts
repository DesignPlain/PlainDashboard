import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Netapp_VolumeSnapshotPolicy,
  Netapp_VolumeSnapshotPolicy_GetTypes,
} from "../types/Netapp_VolumeSnapshotPolicy";
import {
  Netapp_VolumeMountOption,
  Netapp_VolumeMountOption_GetTypes,
} from "../types/Netapp_VolumeMountOption";
import {
  Netapp_VolumeExportPolicy,
  Netapp_VolumeExportPolicy_GetTypes,
} from "../types/Netapp_VolumeExportPolicy";
import {
  Netapp_VolumeRestoreParameters,
  Netapp_VolumeRestoreParameters_GetTypes,
} from "../types/Netapp_VolumeRestoreParameters";

export interface VolumeArgs {
  // Capacity of the volume (in GiB).
  CapacityGib?: string;

  /*
The name of the volume. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
List of actions that are restricted on this volume.
Each value may be one of: `DELETE`.
*/
  RestrictedActions?: Array<string>;

  // If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.
  SnapshotDirectory?: boolean;

  // Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.
  UnixPermissions?: string;

  // Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.
  StoragePool?: string;

  /*
Policy to determine if the volume should be deleted forcefully.
Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
*/
  DeletionPolicy?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.
Possible values are: `NTFS`, `UNIX`.
*/
  SecurityStyle?: string;

  // Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.
  ShareName?: string;

  /*
Export policy of the volume for NFSV3 and/or NFSV4.1 access.
Structure is documented below.
*/
  ExportPolicy?: Netapp_VolumeExportPolicy;

  // Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
  KerberosEnabled?: boolean;

  /*
Used to create this volume from a snapshot (= cloning) or an backup.
Structure is documented below.
*/
  RestoreParameters?: Netapp_VolumeRestoreParameters;

  /*
Snapshot policy defines the schedule for automatic snapshot creation.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
Structure is documented below.
*/
  SnapshotPolicy?: Netapp_VolumeSnapshotPolicy;

  // An optional description of this resource.
  Description?: string;

  /*
The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.
Each value may be one of: `NFSV3`, `NFSV4`, `SMB`.
*/
  Protocols?: Array<string>;

  /*
Settings for volumes with SMB access.
Each value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.
*/
  SmbSettings?: Array<string>;
}
export class Volume extends Resource {
  /*
Policy to determine if the volume should be deleted forcefully.
Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
*/
  public DeletionPolicy?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Settings for volumes with SMB access.
Each value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.
*/
  public SmbSettings?: Array<string>;

  // Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.
  public UnixPermissions?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Snapshot policy defines the schedule for automatic snapshot creation.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
Structure is documented below.
*/
  public SnapshotPolicy?: Netapp_VolumeSnapshotPolicy;

  // State of the volume.
  public State?: string;

  // Used capacity of the volume (in GiB). This is computed periodically and it does not represent the realtime usage.
  public UsedGib?: string;

  // State details of the volume.
  public StateDetails?: string;

  // Capacity of the volume (in GiB).
  public CapacityGib?: string;

  /*
The name of the volume. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.
Possible values are: `NTFS`, `UNIX`.
*/
  public SecurityStyle?: string;

  // Service level of the volume. Inherited from storage pool.
  public ServiceLevel?: string;

  // If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.
  public SnapshotDirectory?: boolean;

  // Create time of the volume. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  /*
Export policy of the volume for NFSV3 and/or NFSV4.1 access.
Structure is documented below.
*/
  public ExportPolicy?: Netapp_VolumeExportPolicy;

  // Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  public Location?: string;

  /*
Used to create this volume from a snapshot (= cloning) or an backup.
Structure is documented below.
*/
  public RestoreParameters?: Netapp_VolumeRestoreParameters;

  // Reports the data-at-rest encryption type of the volume. Inherited from storage pool.
  public EncryptionType?: string;

  // Indicates whether the volume is part of a volume replication relationship.
  public HasReplication?: boolean;

  /*
Reports mount instructions for this volume.
Structure is documented below.
*/
  public MountOptions?: Array<Netapp_VolumeMountOption>;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`. Inherited from storage pool.
  public Network?: string;

  /*
List of actions that are restricted on this volume.
Each value may be one of: `DELETE`.
*/
  public RestrictedActions?: Array<string>;

  // Reports the CMEK policy resurce name being used for volume encryption. Inherited from storage pool.
  public KmsConfig?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Flag indicating if the volume is NFS LDAP enabled or not. Inherited from storage pool.
  public LdapEnabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Name of the Private Service Access allocated range. Inherited from storage pool.
  public PsaRange?: string;

  // Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.
  public StoragePool?: string;

  // Reports the resource name of the Active Directory policy being used. Inherited from storage pool.
  public ActiveDirectory?: string;

  // An optional description of this resource.
  public Description?: string;

  // Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
  public KerberosEnabled?: boolean;

  /*
The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.
Each value may be one of: `NFSV3`, `NFSV4`, `SMB`.
*/
  public Protocols?: Array<string>;

  // Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.
  public ShareName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "UnixPermissions",
        "Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StoragePool",
        "Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ShareName",
        "Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "SnapshotDirectory",
        'If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume\'s snapshots. Will enable "Previous Versions" support for SMB.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "Policy to determine if the volume should be deleted forcefully.\nVolumes may have nested snapshot resources. Deleting such a volume will fail.\nSetting this parameter to FORCE will delete volumes including nested snapshots.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ExportPolicy",
        "Export policy of the volume for NFSV3 and/or NFSV4.1 access.\nStructure is documented below.",
        Netapp_VolumeExportPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "KerberosEnabled",
        "Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestoreParameters",
        "Used to create this volume from a snapshot (= cloning) or an backup.\nStructure is documented below.",
        Netapp_VolumeRestoreParameters_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Protocols",
        "The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.\nEach value may be one of: `NFSV3`, `NFSV4`, `SMB`.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SmbSettings",
        "Settings for volumes with SMB access.\nEach value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "RestrictedActions",
        "List of actions that are restricted on this volume.\nEach value may be one of: `DELETE`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityStyle",
        "Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.\nUse NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.\nPossible values are: `NTFS`, `UNIX`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SnapshotPolicy",
        "Snapshot policy defines the schedule for automatic snapshot creation.\nTo disable automatic snapshot creation you have to remove the whole snapshot_policy block.\nStructure is documented below.",
        Netapp_VolumeSnapshotPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the volume. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CapacityGib",
        "Capacity of the volume (in GiB).",
        [],
        true,
        false,
      ),
    ];
  }
}
