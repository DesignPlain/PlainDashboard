import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BackupPlanBackupSchedule } from "../types/BackupPlanBackupSchedule";
import { BackupPlanBackupConfig } from "../types/BackupPlanBackupConfig";
import { BackupPlanRetentionPolicy } from "../types/BackupPlanRetentionPolicy";

export interface BackupPlanArgs {
  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  BackupSchedule?: BackupPlanBackupSchedule;

  // The source cluster from which Backups will be created via this BackupPlan.
  Cluster?: string;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  Deactivated?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  BackupConfig?: BackupPlanBackupConfig;

  // User specified descriptive string for this BackupPlan.
  Description?: string;

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
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  RetentionPolicy?: BackupPlanRetentionPolicy;
}
export class BackupPlan extends Resource {
  /*
Defines the configuration of Backups created via this BackupPlan.
Structure is documented below.
*/
  public BackupConfig?: BackupPlanBackupConfig;

  // The source cluster from which Backups will be created via this BackupPlan.
  public Cluster?: string;

  // User specified descriptive string for this BackupPlan.
  public Description?: string;

  /*
The region of the Backup Plan.


- - -
*/
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The State of the BackupPlan.
  public State?: string;

  /*
Defines a schedule for automatic Backup creation via this BackupPlan.
Structure is documented below.
*/
  public BackupSchedule?: BackupPlanBackupSchedule;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
etag is used for optimistic concurrency control as a way to help prevent simultaneous
updates of a backup plan from overwriting each other. It is strongly suggested that
systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates
in order to avoid race conditions: An etag is returned in the response to backupPlans.get,
and systems are expected to put that etag in the request to backupPlans.patch or
backupPlans.delete to ensure that their change will be applied to the same version of the resource.
*/
  public Etag?: string;

  // The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.
  public ProtectedPodCount?: number;

  /*
This flag indicates whether this BackupPlan has been deactivated.
Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).
*/
  public Deactivated?: boolean;

  // The full name of the BackupPlan Resource.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Detailed description of why BackupPlan is in its current state.
  public StateReason?: string;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
RetentionPolicy governs lifecycle of Backups created under this plan.
Structure is documented below.
*/
  public RetentionPolicy?: BackupPlanRetentionPolicy;

  // Server generated, unique identifier of UUID format.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BackupSchedule",
        "Defines a schedule for automatic Backup creation via this BackupPlan.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The source cluster from which Backups will be created via this BackupPlan.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Deactivated",
        "This flag indicates whether this BackupPlan has been deactivated.\nSetting this field to True locks the BackupPlan such that no further updates will be allowed\n(except deletes), including the deactivated field itself. It also prevents any new Backups\nfrom being created via this BackupPlan (including scheduled Backups).",
      ),
      new DynamicUIProps(
        InputType.String,
        "BackupConfig",
        "Defines the configuration of Backups created via this BackupPlan.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User specified descriptive string for this BackupPlan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Description: A set of custom labels supplied by the user.\nA list of key->value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Backup Plan.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "RetentionPolicy",
        "RetentionPolicy governs lifecycle of Backups created under this plan.\nStructure is documented below.",
      ),
    ];
  }
}
