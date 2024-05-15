import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_BackupPlanBackupSchedule,
  Gkebackup_BackupPlanBackupSchedule_GetTypes,
} from "../types/Gkebackup_BackupPlanBackupSchedule";
import {
  Gkebackup_BackupPlanRetentionPolicy,
  Gkebackup_BackupPlanRetentionPolicy_GetTypes,
} from "../types/Gkebackup_BackupPlanRetentionPolicy";
import {
  Gkebackup_BackupPlanBackupConfig,
  Gkebackup_BackupPlanBackupConfig_GetTypes,
} from "../types/Gkebackup_BackupPlanBackupConfig";

export interface BackupPlanArgs {
  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  BackupSchedule?: Gkebackup_BackupPlanBackupSchedule;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  Deactivated?: boolean;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The region of the Backup Plan.


- - -
*/
  Location?: string;

  // The full name of the BackupPlan Resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  RetentionPolicy?: Gkebackup_BackupPlanRetentionPolicy;

  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  BackupConfig?: Gkebackup_BackupPlanBackupConfig;

  // The source cluster from which Backups will be created via this BackupPlan.
  Cluster?: string;

  // User specified descriptive string for this BackupPlan.
  Description?: string;
}
export class BackupPlan extends Resource {
  // The source cluster from which Backups will be created via this BackupPlan.
  public Cluster?: string;

  // The full name of the BackupPlan Resource.
  public Name?: string;

  // The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.
  public ProtectedPodCount?: number;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  public Deactivated?: boolean;

  /*
etag is used for optimistic concurrency control as a way to help prevent simultaneous
updates of a backup plan from overwriting each other. It is strongly suggested that
systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates
in order to avoid race conditions: An etag is returned in the response to backupPlans.get,
and systems are expected to put that etag in the request to backupPlans.patch or
backupPlans.delete to ensure that their change will be applied to the same version of the resource.
*/
  public Etag?: string;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The region of the Backup Plan.


- - -
*/
  public Location?: string;

  // User specified descriptive string for this BackupPlan.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Server generated, unique identifier of UUID format.
  public Uid?: string;

  /*
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  public RetentionPolicy?: Gkebackup_BackupPlanRetentionPolicy;

  // The State of the BackupPlan.
  public State?: string;

  // Detailed description of why BackupPlan is in its current state.
  public StateReason?: string;

  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  public BackupConfig?: Gkebackup_BackupPlanBackupConfig;

  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  public BackupSchedule?: Gkebackup_BackupPlanBackupSchedule;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "RetentionPolicy",
        "RetentionPolicy governs lifecycle of Backups created under this plan.\nStructure is documented below.",
        Gkebackup_BackupPlanRetentionPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BackupConfig",
        "Defines the configuration of Backups created via this BackupPlan.\nStructure is documented below.",
        Gkebackup_BackupPlanBackupConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Backup Plan.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
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
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The source cluster from which Backups will be created via this BackupPlan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User specified descriptive string for this BackupPlan.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BackupSchedule",
        "Defines a schedule for automatic Backup creation via this BackupPlan.\nStructure is documented below.",
        Gkebackup_BackupPlanBackupSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Deactivated",
        "This flag indicates whether this BackupPlan has been deactivated.\nSetting this field to True locks the BackupPlan such that no further updates will be allowed\n(except deletes), including the deactivated field itself. It also prevents any new Backups\nfrom being created via this BackupPlan (including scheduled Backups).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Description: A set of custom labels supplied by the user.\nA list of key->value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
