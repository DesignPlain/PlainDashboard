import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_ClusterBackupSource,
  Alloydb_ClusterBackupSource_GetTypes,
} from "../types/Alloydb_ClusterBackupSource";
import {
  Alloydb_ClusterRestoreBackupSource,
  Alloydb_ClusterRestoreBackupSource_GetTypes,
} from "../types/Alloydb_ClusterRestoreBackupSource";
import {
  Alloydb_ClusterSecondaryConfig,
  Alloydb_ClusterSecondaryConfig_GetTypes,
} from "../types/Alloydb_ClusterSecondaryConfig";
import {
  Alloydb_ClusterContinuousBackupInfo,
  Alloydb_ClusterContinuousBackupInfo_GetTypes,
} from "../types/Alloydb_ClusterContinuousBackupInfo";
import {
  Alloydb_ClusterEncryptionInfo,
  Alloydb_ClusterEncryptionInfo_GetTypes,
} from "../types/Alloydb_ClusterEncryptionInfo";
import {
  Alloydb_ClusterAutomatedBackupPolicy,
  Alloydb_ClusterAutomatedBackupPolicy_GetTypes,
} from "../types/Alloydb_ClusterAutomatedBackupPolicy";
import {
  Alloydb_ClusterEncryptionConfig,
  Alloydb_ClusterEncryptionConfig_GetTypes,
} from "../types/Alloydb_ClusterEncryptionConfig";
import {
  Alloydb_ClusterMigrationSource,
  Alloydb_ClusterMigrationSource_GetTypes,
} from "../types/Alloydb_ClusterMigrationSource";
import {
  Alloydb_ClusterNetworkConfig,
  Alloydb_ClusterNetworkConfig_GetTypes,
} from "../types/Alloydb_ClusterNetworkConfig";
import {
  Alloydb_ClusterContinuousBackupConfig,
  Alloydb_ClusterContinuousBackupConfig_GetTypes,
} from "../types/Alloydb_ClusterContinuousBackupConfig";
import {
  Alloydb_ClusterRestoreContinuousBackupSource,
  Alloydb_ClusterRestoreContinuousBackupSource_GetTypes,
} from "../types/Alloydb_ClusterRestoreContinuousBackupSource";
import {
  Alloydb_ClusterInitialUser,
  Alloydb_ClusterInitialUser_GetTypes,
} from "../types/Alloydb_ClusterInitialUser";

export interface ClusterArgs {
  /*
Metadata related to network configuration.
Structure is documented below.
*/
  NetworkConfig?: Alloydb_ClusterNetworkConfig;

  /*
The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.
Structure is documented below.
*/
  RestoreBackupSource?: Alloydb_ClusterRestoreBackupSource;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
The continuous backup config for this cluster.
If no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.
Structure is documented below.
*/
  ContinuousBackupConfig?: Alloydb_ClusterContinuousBackupConfig;

  // The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
  DatabaseVersion?: string;

  /*
Policy to determine if the cluster should be deleted forcefully.
Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
*/
  DeletionPolicy?: string;

  // User-settable and human-readable display name for the Cluster.
  DisplayName?: string;

  /*
The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.
Structure is documented below.
*/
  RestoreContinuousBackupSource?: Alloydb_ClusterRestoreContinuousBackupSource;

  /*
Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.
Structure is documented below.
*/
  SecondaryConfig?: Alloydb_ClusterSecondaryConfig;

  // The ID of the alloydb cluster.
  ClusterId?: string;

  /*
The type of cluster. If not set, defaults to PRIMARY.
Default value is `PRIMARY`.
Possible values are: `PRIMARY`, `SECONDARY`.
*/
  ClusterType?: string;

  /*
Initial user to setup during cluster creation.
Structure is documented below.
*/
  InitialUser?: Alloydb_ClusterInitialUser;

  /*
The location where the alloydb cluster should reside.


- - -
*/
  Location?: string;

  /*
(Optional, Deprecated)
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".

> --Warning:-- `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.
Structure is documented below.
*/
  AutomatedBackupPolicy?: Alloydb_ClusterAutomatedBackupPolicy;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: Alloydb_ClusterEncryptionConfig;

  // For Resource freshness validation (https://google.aip.dev/154)
  Etag?: string;

  /*
User-defined labels for the alloydb cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Cluster extends Resource {
  // Output only. The current serving state of the cluster.
  public State?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Metadata related to network configuration.
Structure is documented below.
*/
  public NetworkConfig?: Alloydb_ClusterNetworkConfig;

  /*
The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.
Structure is documented below.
*/
  public RestoreBackupSource?: Alloydb_ClusterRestoreBackupSource;

  /*
Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.
Structure is documented below.
*/
  public SecondaryConfig?: Alloydb_ClusterSecondaryConfig;

  /*
The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.
Structure is documented below.
*/
  public AutomatedBackupPolicy?: Alloydb_ClusterAutomatedBackupPolicy;

  /*
ContinuousBackupInfo describes the continuous backup properties of a cluster.
Structure is documented below.
*/
  public ContinuousBackupInfos?: Array<Alloydb_ClusterContinuousBackupInfo>;

  /*
(Output)
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
Structure is documented below.
*/
  public EncryptionInfos?: Array<Alloydb_ClusterEncryptionInfo>;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
  public DatabaseVersion?: string;

  // User-settable and human-readable display name for the Cluster.
  public DisplayName?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  public EncryptionConfig?: Alloydb_ClusterEncryptionConfig;

  /*
Initial user to setup during cluster creation.
Structure is documented below.
*/
  public InitialUser?: Alloydb_ClusterInitialUser;

  /*
Cluster created via DMS migration.
Structure is documented below.
*/
  public MigrationSources?: Array<Alloydb_ClusterMigrationSource>;

  /*
The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.
Structure is documented below.
*/
  public RestoreContinuousBackupSource?: Alloydb_ClusterRestoreContinuousBackupSource;

  /*
The continuous backup config for this cluster.
If no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.
Structure is documented below.
*/
  public ContinuousBackupConfig?: Alloydb_ClusterContinuousBackupConfig;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
User-defined labels for the alloydb cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The system-generated UID of the resource.
  public Uid?: string;

  /*
(Optional, Deprecated)
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".

> --Warning:-- `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.
*/
  public Network?: string;

  /*
Output only. Reconciling (https://google.aip.dev/128#reconciliation).
Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them.
This can happen due to user-triggered updates or system actions like failover or maintenance.
*/
  public Reconciling?: boolean;

  /*
Cluster created from backup.
Structure is documented below.
*/
  public BackupSources?: Array<Alloydb_ClusterBackupSource>;

  // The ID of the alloydb cluster.
  public ClusterId?: string;

  /*
Policy to determine if the cluster should be deleted forcefully.
Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
*/
  public DeletionPolicy?: string;

  /*
The location where the alloydb cluster should reside.


- - -
*/
  public Location?: string;

  // The name of the cluster resource.
  public Name?: string;

  /*
The type of cluster. If not set, defaults to PRIMARY.
Default value is `PRIMARY`.
Possible values are: `PRIMARY`, `SECONDARY`.
*/
  public ClusterType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Etag",
        "For Resource freshness validation (https://google.aip.dev/154)",
        [],
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
        InputType.Map,
        "Labels",
        "User-defined labels for the alloydb cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Metadata related to network configuration.\nStructure is documented below.",
        Alloydb_ClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        'Policy to determine if the cluster should be deleted forcefully.\nDeleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.\nDeleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SecondaryConfig",
        "Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.\nStructure is documented below.",
        Alloydb_ClusterSecondaryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterId",
        "The ID of the alloydb cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the alloydb cluster should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        '(Optional, Deprecated)\nThe relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:\n"projects/{projectNumber}/global/networks/{network_id}".\n\n> **Warning:** `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutomatedBackupPolicy",
        "The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.\nStructure is documented below.",
        Alloydb_ClusterAutomatedBackupPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionConfig",
        "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
        Alloydb_ClusterEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        'Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseVersion",
        "The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-settable and human-readable display name for the Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestoreContinuousBackupSource",
        "The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.\nStructure is documented below.",
        Alloydb_ClusterRestoreContinuousBackupSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterType",
        "The type of cluster. If not set, defaults to PRIMARY.\nDefault value is `PRIMARY`.\nPossible values are: `PRIMARY`, `SECONDARY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InitialUser",
        "Initial user to setup during cluster creation.\nStructure is documented below.",
        Alloydb_ClusterInitialUser_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestoreBackupSource",
        "The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.\nStructure is documented below.",
        Alloydb_ClusterRestoreBackupSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ContinuousBackupConfig",
        "The continuous backup config for this cluster.\nIf no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.\nStructure is documented below.",
        Alloydb_ClusterContinuousBackupConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
