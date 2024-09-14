import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface BackupPolicyArgs {
  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  monthlyBackupLimit?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  weeklyBackupLimit?: number;

  // Number of daily backups to keep. Note that the minimum daily backup limit is 2.
  dailyBackupLimit?: number;

  // An optional description of this resource.
  description?: string;

  /*
The name of the backup policy. Needs to be unique per location.


- - -
*/
  name?: string;

  /*
If enabled, make backups automatically according to the schedules.
This will be applied to all volumes that have this policy attached and enforced on volume level.
*/
  enabled?: boolean;

  // Name of the region for the policy to apply to.
  location?: string;
}
export class BackupPolicy extends DS_Resource {
  // Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  public monthlyBackupLimit?: number;

  /*
The name of the backup policy. Needs to be unique per location.


- - -
*/
  public name?: string;

  // The total number of volumes assigned by this backup policy.
  public assignedVolumeCount?: number;

  // Number of daily backups to keep. Note that the minimum daily backup limit is 2.
  public dailyBackupLimit?: number;

  // An optional description of this resource.
  public description?: string;

  /*
If enabled, make backups automatically according to the schedules.
This will be applied to all volumes that have this policy attached and enforced on volume level.
*/
  public enabled?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the region for the policy to apply to.
  public location?: string;

  // Create time of the backup policy. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The state of the backup policy.
  public state?: string;

  // Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
  public weeklyBackupLimit?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "If enabled, make backups automatically according to the schedules.\nThis will be applied to all volumes that have this policy attached and enforced on volume level.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Name of the region for the policy to apply to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "monthlyBackupLimit",
        "Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the backup policy. Needs to be unique per location.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "weeklyBackupLimit",
        "Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "dailyBackupLimit",
        "Number of daily backups to keep. Note that the minimum daily backup limit is 2.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
