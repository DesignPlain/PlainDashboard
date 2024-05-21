import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_BackupPlanBackupSchedule,
  gkebackup_BackupPlanBackupSchedule_GetTypes,
} from "../types/gkebackup_BackupPlanBackupSchedule";
import {
  gkebackup_BackupPlanBackupConfig,
  gkebackup_BackupPlanBackupConfig_GetTypes,
} from "../types/gkebackup_BackupPlanBackupConfig";
import {
  gkebackup_BackupPlanRetentionPolicy,
  gkebackup_BackupPlanRetentionPolicy_GetTypes,
} from "../types/gkebackup_BackupPlanRetentionPolicy";

export interface BackupPlanArgs {
  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The full name of the BackupPlan Resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  retentionPolicy?: gkebackup_BackupPlanRetentionPolicy;

  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  backupSchedule?: gkebackup_BackupPlanBackupSchedule;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  deactivated?: boolean;

  // User specified descriptive string for this BackupPlan.
  description?: string;

  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  backupConfig?: gkebackup_BackupPlanBackupConfig;

  // The source cluster from which Backups will be created via this BackupPlan.
  cluster?: string;

  /*
The region of the Backup Plan.


- - -
*/
  location?: string;
}
export class BackupPlan extends Resource {
  /*
The region of the Backup Plan.


- - -
*/
  public location?: string;

  // The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.
  public protectedPodCount?: number;

  /*
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  public retentionPolicy?: gkebackup_BackupPlanRetentionPolicy;

  // The State of the BackupPlan.
  public state?: string;

  // Detailed description of why BackupPlan is in its current state.
  public stateReason?: string;

  // Server generated, unique identifier of UUID format.
  public uid?: string;

  // The source cluster from which Backups will be created via this BackupPlan.
  public cluster?: string;

  // User specified descriptive string for this BackupPlan.
  public description?: string;

  /*
etag is used for optimistic concurrency control as a way to help prevent simultaneous
updates of a backup plan from overwriting each other. It is strongly suggested that
systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates
in order to avoid race conditions: An etag is returned in the response to backupPlans.get,
and systems are expected to put that etag in the request to backupPlans.patch or
backupPlans.delete to ensure that their change will be applied to the same version of the resource.
*/
  public etag?: string;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  public backupSchedule?: gkebackup_BackupPlanBackupSchedule;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  public backupConfig?: gkebackup_BackupPlanBackupConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The full name of the BackupPlan Resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  public deactivated?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "The region of the Backup Plan.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Description: A set of custom labels supplied by the user.\nA list of key->value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retentionPolicy",
        "RetentionPolicy governs lifecycle of Backups created under this plan.\nStructure is documented below.",
        gkebackup_BackupPlanRetentionPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User specified descriptive string for this BackupPlan.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "backupConfig",
        "Defines the configuration of Backups created via this BackupPlan.\nStructure is documented below.",
        gkebackup_BackupPlanBackupConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The source cluster from which Backups will be created via this BackupPlan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The full name of the BackupPlan Resource.",
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
        "backupSchedule",
        "Defines a schedule for automatic Backup creation via this BackupPlan.\nStructure is documented below.",
        gkebackup_BackupPlanBackupSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deactivated",
        "This flag indicates whether this BackupPlan has been deactivated.\nSetting this field to True locks the BackupPlan such that no further updates will be allowed\n(except deletes), including the deactivated field itself. It also prevents any new Backups\nfrom being created via this BackupPlan (including scheduled Backups).",
        [],
        false,
        false,
      ),
    ];
  }
}
