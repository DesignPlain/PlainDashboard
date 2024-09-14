import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkebackup_BackupPlanBackupSchedule {
  // This flag denotes whether automatic Backup creation is paused for this BackupPlan.
  paused?: boolean;

  /*
A standard cron string that defines a repeating schedule for
creating Backups via this BackupPlan.
If this is defined, then backupRetainDays must also be defined.
*/
  cronSchedule?: string;
}

export function gkebackup_BackupPlanBackupSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "paused",
      "This flag denotes whether automatic Backup creation is paused for this BackupPlan.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cronSchedule",
      "A standard cron string that defines a repeating schedule for\ncreating Backups via this BackupPlan.\nIf this is defined, then backupRetainDays must also be defined.",
      () => [],
      false,
      false,
    ),
  ];
}
