import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_BackupPlanRetentionPolicy {
  /*
Minimum age for a Backup created via this BackupPlan (in days).
Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.
*/
  BackupDeleteLockDays?: number;

  /*
The default maximum age of a Backup created via this BackupPlan.
This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 - the creation interval.]
*/
  BackupRetainDays?: number;

  /*
This flag denotes whether the retention policy of this BackupPlan is locked.
If set to True, no further update is allowed on this policy, including
the locked field itself.
*/
  Locked?: boolean;
}

export function Gkebackup_BackupPlanRetentionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "BackupDeleteLockDays",
      "Minimum age for a Backup created via this BackupPlan (in days).\nMust be an integer value between 0-90 (inclusive).\nA Backup created under this BackupPlan will not be deletable\nuntil it reaches Backup's (create time + backup_delete_lock_days).\nUpdating this field of a BackupPlan does not affect existing Backups.\nBackups created after a successful update will inherit this new value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BackupRetainDays",
      "The default maximum age of a Backup created via this BackupPlan.\nThis field MUST be an integer value >= 0 and <= 365. If specified,\na Backup created under this BackupPlan will be automatically deleted\nafter its age reaches (createTime + backupRetainDays).\nIf not specified, Backups created under this BackupPlan will NOT be\nsubject to automatic deletion. Updating this field does NOT affect\nexisting Backups under it. Backups created AFTER a successful update\nwill automatically pick up the new value.\nNOTE: backupRetainDays must be >= backupDeleteLockDays.\nIf cronSchedule is defined, then this must be <= 360 * the creation interval.]",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Locked",
      "This flag denotes whether the retention policy of this BackupPlan is locked.\nIf set to True, no further update is allowed on this policy, including\nthe locked field itself.",
      [],
      false,
      false,
    ),
  ];
}
