import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  netapp_VolumeExportPolicy,
  netapp_VolumeExportPolicy_GetTypes,
} from "../types/netapp_VolumeExportPolicy";
import {
  netapp_VolumeMountOption,
  netapp_VolumeMountOption_GetTypes,
} from "../types/netapp_VolumeMountOption";
import {
  netapp_VolumeSnapshotPolicy,
  netapp_VolumeSnapshotPolicy_GetTypes,
} from "../types/netapp_VolumeSnapshotPolicy";
import {
  netapp_VolumeRestoreParameters,
  netapp_VolumeRestoreParameters_GetTypes,
} from "../types/netapp_VolumeRestoreParameters";

export interface VolumeArgs {
  // An optional description of this resource.
  description?: string;

  // Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
  kerberosEnabled?: boolean;

  /*
The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.
Each value may be one of: `NFSV3`, `NFSV4`, `SMB`.
*/
  protocols?: Array<string>;

  /*
Snapshot policy defines the schedule for automatic snapshot creation.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
Structure is documented below.
*/
  snapshotPolicy?: netapp_VolumeSnapshotPolicy;

  // Capacity of the volume (in GiB).
  capacityGib?: string;

  // If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.
  snapshotDirectory?: boolean;

  // Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.
  storagePool?: string;

  // Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.
  unixPermissions?: string;

  /*
Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.
Possible values are: `NTFS`, `UNIX`.
*/
  securityStyle?: string;

  // Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.
  shareName?: string;

  /*
Settings for volumes with SMB access.
Each value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.
*/
  smbSettings?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Used to create this volume from a snapshot (= cloning) or an backup.
Structure is documented below.
*/
  restoreParameters?: netapp_VolumeRestoreParameters;

  /*
List of actions that are restricted on this volume.
Each value may be one of: `DELETE`.
*/
  restrictedActions?: Array<string>;

  /*
Policy to determine if the volume should be deleted forcefully.
Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
*/
  deletionPolicy?: string;

  /*
Export policy of the volume for NFSV3 and/or NFSV4.1 access.
Structure is documented below.
*/
  exportPolicy?: netapp_VolumeExportPolicy;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  location?: string;

  /*
The name of the volume. Needs to be unique per location.


- - -
*/
  name?: string;
}
export class Volume extends Resource {
  // Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
  public kerberosEnabled?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the Private Service Access allocated range. Inherited from storage pool.
  public psaRange?: string;

  // State details of the volume.
  public stateDetails?: string;

  // Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.
  public storagePool?: string;

  // Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Used to create this volume from a snapshot (= cloning) or an backup.
Structure is documented below.
*/
  public restoreParameters?: netapp_VolumeRestoreParameters;

  // State of the volume.
  public state?: string;

  // Reports the resource name of the Active Directory policy being used. Inherited from storage pool.
  public activeDirectory?: string;

  // Capacity of the volume (in GiB).
  public capacityGib?: string;

  /*
List of actions that are restricted on this volume.
Each value may be one of: `DELETE`.
*/
  public restrictedActions?: Array<string>;

  // Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.
  public shareName?: string;

  // Indicates whether the volume is part of a volume replication relationship.
  public hasReplication?: boolean;

  /*
The name of the volume. Needs to be unique per location.


- - -
*/
  public name?: string;

  // An optional description of this resource.
  public description?: string;

  /*
Export policy of the volume for NFSV3 and/or NFSV4.1 access.
Structure is documented below.
*/
  public exportPolicy?: netapp_VolumeExportPolicy;

  // Flag indicating if the volume is NFS LDAP enabled or not. Inherited from storage pool.
  public ldapEnabled?: boolean;

  /*
Reports mount instructions for this volume.
Structure is documented below.
*/
  public mountOptions?: Array<netapp_VolumeMountOption>;

  // Create time of the volume. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public createTime?: string;

  /*
The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.
Each value may be one of: `NFSV3`, `NFSV4`, `SMB`.
*/
  public protocols?: Array<string>;

  /*
Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.
Possible values are: `NTFS`, `UNIX`.
*/
  public securityStyle?: string;

  /*
Snapshot policy defines the schedule for automatic snapshot creation.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
Structure is documented below.
*/
  public snapshotPolicy?: netapp_VolumeSnapshotPolicy;

  // Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.
  public unixPermissions?: string;

  // Used capacity of the volume (in GiB). This is computed periodically and it does not represent the realtime usage.
  public usedGib?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Service level of the volume. Inherited from storage pool.
  public serviceLevel?: string;

  /*
Policy to determine if the volume should be deleted forcefully.
Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
*/
  public deletionPolicy?: string;

  // Reports the data-at-rest encryption type of the volume. Inherited from storage pool.
  public encryptionType?: string;

  // Reports the CMEK policy resurce name being used for volume encryption. Inherited from storage pool.
  public kmsConfig?: string;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`. Inherited from storage pool.
  public network?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Settings for volumes with SMB access.
Each value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.
*/
  public smbSettings?: Array<string>;

  // If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.
  public snapshotDirectory?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "protocols",
        "The protocol of the volume. Allowed combinations are `['NFSV3']`, `['NFSV4']`, `['SMB']`, `['NFSV3', 'NFSV4']`, `['SMB', 'NFSV3']` and `['SMB', 'NFSV4']`.\nEach value may be one of: `NFSV3`, `NFSV4`, `SMB`.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "shareName",
        "Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the volume. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "capacityGib",
        "Capacity of the volume (in GiB).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "Policy to determine if the volume should be deleted forcefully.\nVolumes may have nested snapshot resources. Deleting such a volume will fail.\nSetting this parameter to FORCE will delete volumes including nested snapshots.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "kerberosEnabled",
        "Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snapshotPolicy",
        "Snapshot policy defines the schedule for automatic snapshot creation.\nTo disable automatic snapshot creation you have to remove the whole snapshot_policy block.\nStructure is documented below.",
        netapp_VolumeSnapshotPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storagePool",
        "Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityStyle",
        "Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.\nUse NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol.\nPossible values are: `NTFS`, `UNIX`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "smbSettings",
        "Settings for volumes with SMB access.\nEach value may be one of: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "exportPolicy",
        "Export policy of the volume for NFSV3 and/or NFSV4.1 access.\nStructure is documented below.",
        netapp_VolumeExportPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "snapshotDirectory",
        'If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume\'s snapshots. Will enable "Previous Versions" support for SMB.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "unixPermissions",
        "Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.",
        [],
        false,
        false,
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
        "restoreParameters",
        "Used to create this volume from a snapshot (= cloning) or an backup.\nStructure is documented below.",
        netapp_VolumeRestoreParameters_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "restrictedActions",
        "List of actions that are restricted on this volume.\nEach value may be one of: `DELETE`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
