import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alloydb_ClusterInitialUser,
  alloydb_ClusterInitialUser_GetTypes,
} from "../types/alloydb_ClusterInitialUser";
import {
  alloydb_ClusterNetworkConfig,
  alloydb_ClusterNetworkConfig_GetTypes,
} from "../types/alloydb_ClusterNetworkConfig";
import {
  alloydb_ClusterAutomatedBackupPolicy,
  alloydb_ClusterAutomatedBackupPolicy_GetTypes,
} from "../types/alloydb_ClusterAutomatedBackupPolicy";
import {
  alloydb_ClusterContinuousBackupConfig,
  alloydb_ClusterContinuousBackupConfig_GetTypes,
} from "../types/alloydb_ClusterContinuousBackupConfig";
import {
  alloydb_ClusterEncryptionConfig,
  alloydb_ClusterEncryptionConfig_GetTypes,
} from "../types/alloydb_ClusterEncryptionConfig";
import {
  alloydb_ClusterSecondaryConfig,
  alloydb_ClusterSecondaryConfig_GetTypes,
} from "../types/alloydb_ClusterSecondaryConfig";
import {
  alloydb_ClusterBackupSource,
  alloydb_ClusterBackupSource_GetTypes,
} from "../types/alloydb_ClusterBackupSource";
import {
  alloydb_ClusterContinuousBackupInfo,
  alloydb_ClusterContinuousBackupInfo_GetTypes,
} from "../types/alloydb_ClusterContinuousBackupInfo";
import {
  alloydb_ClusterEncryptionInfo,
  alloydb_ClusterEncryptionInfo_GetTypes,
} from "../types/alloydb_ClusterEncryptionInfo";
import {
  alloydb_ClusterRestoreBackupSource,
  alloydb_ClusterRestoreBackupSource_GetTypes,
} from "../types/alloydb_ClusterRestoreBackupSource";
import {
  alloydb_ClusterRestoreContinuousBackupSource,
  alloydb_ClusterRestoreContinuousBackupSource_GetTypes,
} from "../types/alloydb_ClusterRestoreContinuousBackupSource";
import {
  alloydb_ClusterMigrationSource,
  alloydb_ClusterMigrationSource_GetTypes,
} from "../types/alloydb_ClusterMigrationSource";

export interface ClusterArgs {
  /*
(Optional, Deprecated)
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".

> --Warning:-- `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.
Structure is documented below.
*/
  restoreBackupSource?: alloydb_ClusterRestoreBackupSource;

  /*
User-defined labels for the alloydb cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Metadata related to network configuration.
Structure is documented below.
*/
  networkConfig?: alloydb_ClusterNetworkConfig;

  /*
The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.
Structure is documented below.
*/
  restoreContinuousBackupSource?: alloydb_ClusterRestoreContinuousBackupSource;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
The type of cluster. If not set, defaults to PRIMARY.
Default value is `PRIMARY`.
Possible values are: `PRIMARY`, `SECONDARY`.
*/
  clusterType?: string;

  /*
The continuous backup config for this cluster.
If no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.
Structure is documented below.
*/
  continuousBackupConfig?: alloydb_ClusterContinuousBackupConfig;

  /*
Policy to determine if the cluster should be deleted forcefully.
Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
*/
  deletionPolicy?: string;

  // User-settable and human-readable display name for the Cluster.
  displayName?: string;

  // The ID of the alloydb cluster.
  clusterId?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  encryptionConfig?: alloydb_ClusterEncryptionConfig;

  /*
The location where the alloydb cluster should reside.


- - -
*/
  location?: string;

  /*
The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.
Structure is documented below.
*/
  automatedBackupPolicy?: alloydb_ClusterAutomatedBackupPolicy;

  // The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
  databaseVersion?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  etag?: string;

  /*
Initial user to setup during cluster creation.
Structure is documented below.
*/
  initialUser?: alloydb_ClusterInitialUser;

  /*
Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.
Structure is documented below.
*/
  secondaryConfig?: alloydb_ClusterSecondaryConfig;
}
export class Cluster extends Resource {
  /*
Cluster created from backup.
Structure is documented below.
*/
  public backupSources?: Array<alloydb_ClusterBackupSource>;

  /*
ContinuousBackupInfo describes the continuous backup properties of a cluster.
Structure is documented below.
*/
  public continuousBackupInfos?: Array<alloydb_ClusterContinuousBackupInfo>;

  // User-settable and human-readable display name for the Cluster.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  public encryptionConfig?: alloydb_ClusterEncryptionConfig;

  /*
The location where the alloydb cluster should reside.


- - -
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The continuous backup config for this cluster.
If no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.
Structure is documented below.
*/
  public continuousBackupConfig?: alloydb_ClusterContinuousBackupConfig;

  // The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
  public databaseVersion?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // For Resource freshness validation (https://google.aip.dev/154)
  public etag?: string;

  /*
Output only. Reconciling (https://google.aip.dev/128#reconciliation).
Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them.
This can happen due to user-triggered updates or system actions like failover or maintenance.
*/
  public reconciling?: boolean;

  /*
Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.
Structure is documented below.
*/
  public secondaryConfig?: alloydb_ClusterSecondaryConfig;

  /*
The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.
Structure is documented below.
*/
  public automatedBackupPolicy?: alloydb_ClusterAutomatedBackupPolicy;

  /*
Policy to determine if the cluster should be deleted forcefully.
Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
*/
  public deletionPolicy?: string;

  /*
(Output)
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
Structure is documented below.
*/
  public encryptionInfos?: Array<alloydb_ClusterEncryptionInfo>;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
The type of cluster. If not set, defaults to PRIMARY.
Default value is `PRIMARY`.
Possible values are: `PRIMARY`, `SECONDARY`.
*/
  public clusterType?: string;

  /*
Metadata related to network configuration.
Structure is documented below.
*/
  public networkConfig?: alloydb_ClusterNetworkConfig;

  // The ID of the alloydb cluster.
  public clusterId?: string;

  /*
Initial user to setup during cluster creation.
Structure is documented below.
*/
  public initialUser?: alloydb_ClusterInitialUser;

  /*
(Optional, Deprecated)
The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
"projects/{projectNumber}/global/networks/{network_id}".

> --Warning:-- `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.
*/
  public network?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.
Structure is documented below.
*/
  public restoreContinuousBackupSource?: alloydb_ClusterRestoreContinuousBackupSource;

  // Output only. The current serving state of the cluster.
  public state?: string;

  /*
Cluster created via DMS migration.
Structure is documented below.
*/
  public migrationSources?: Array<alloydb_ClusterMigrationSource>;

  // The name of the cluster resource.
  public name?: string;

  /*
The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.
Structure is documented below.
*/
  public restoreBackupSource?: alloydb_ClusterRestoreBackupSource;

  /*
User-defined labels for the alloydb cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The system-generated UID of the resource.
  public uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "continuousBackupConfig",
        "The continuous backup config for this cluster.\nIf no policy is provided then the default policy will be used. The default policy takes one backup a day and retains backups for 14 days.\nStructure is documented below.",
        alloydb_ClusterContinuousBackupConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User-settable and human-readable display name for the Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "initialUser",
        "Initial user to setup during cluster creation.\nStructure is documented below.",
        alloydb_ClusterInitialUser_GetTypes(),
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
        InputType.Map,
        "labels",
        "User-defined labels for the alloydb cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreContinuousBackupSource",
        "The source when restoring via point in time recovery (PITR). Conflicts with 'restore_backup_source', both can't be set together.\nStructure is documented below.",
        alloydb_ClusterRestoreContinuousBackupSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        'Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        'Policy to determine if the cluster should be deleted forcefully.\nDeleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.\nDeleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseVersion",
        "The database engine major version. This is an optional field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "etag",
        "For Resource freshness validation (https://google.aip.dev/154)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the alloydb cluster should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "automatedBackupPolicy",
        "The automated backup policy for this cluster. AutomatedBackupPolicy is disabled by default.\nStructure is documented below.",
        alloydb_ClusterAutomatedBackupPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreBackupSource",
        "The source when restoring from a backup. Conflicts with 'restore_continuous_backup_source', both can't be set together.\nStructure is documented below.",
        alloydb_ClusterRestoreBackupSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterType",
        "The type of cluster. If not set, defaults to PRIMARY.\nDefault value is `PRIMARY`.\nPossible values are: `PRIMARY`, `SECONDARY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterId",
        "The ID of the alloydb cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
        alloydb_ClusterEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        '(Optional, Deprecated)\nThe relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:\n"projects/{projectNumber}/global/networks/{network_id}".\n\n> **Warning:** `network` is deprecated and will be removed in a future major release. Instead, use `network_config` to define the network configuration.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Metadata related to network configuration.\nStructure is documented below.",
        alloydb_ClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "secondaryConfig",
        "Configuration of the secondary cluster for Cross Region Replication. This should be set if and only if the cluster is of type SECONDARY.\nStructure is documented below.",
        alloydb_ClusterSecondaryConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
