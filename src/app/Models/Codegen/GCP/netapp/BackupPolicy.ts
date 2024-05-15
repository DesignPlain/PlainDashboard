import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackupPolicyArgs {
  // Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  WeeklyBackupLimit?: number;

  // Number of daily backups to keep. Note that the minimum daily backup limit is 2.
  DailyBackupLimit?: number;

  // An optional description of this resource.
  Description?: string;

  // Name of the region for the policy to apply to.
  Location?: string;

  /*
The name of the backup policy. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
If enabled, make backups automatically according to the schedules.
This will be applied to all volumes that have this policy attached and enforced on volume level.
*/
  Enabled?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  MonthlyBackupLimit?: number;
}
export class BackupPolicy extends Resource {
  // The total number of volumes assigned by this backup policy.
  public AssignedVolumeCount?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
If enabled, make backups automatically according to the schedules.
This will be applied to all volumes that have this policy attached and enforced on volume level.
*/
  public Enabled?: boolean;

  // The state of the backup policy.
  public State?: string;

  // Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  public WeeklyBackupLimit?: number;

  // Name of the region for the policy to apply to.
  public Location?: string;

  // Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  public MonthlyBackupLimit?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Number of daily backups to keep. Note that the minimum daily backup limit is 2.
  public DailyBackupLimit?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Create time of the backup policy. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The name of the backup policy. Needs to be unique per location.


- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the backup policy. Needs to be unique per location.\n\n\n- - -",
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
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MonthlyBackupLimit",
        "Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "WeeklyBackupLimit",
        "Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.",
        [],
        true,
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
        InputType.Bool,
        "Enabled",
        "If enabled, make backups automatically according to the schedules.\nThis will be applied to all volumes that have this policy attached and enforced on volume level.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "DailyBackupLimit",
        "Number of daily backups to keep. Note that the minimum daily backup limit is 2.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the region for the policy to apply to.",
        [],
        true,
        true,
      ),
    ];
  }
}
