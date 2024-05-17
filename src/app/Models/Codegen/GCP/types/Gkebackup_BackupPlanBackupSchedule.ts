import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_BackupPlanBackupSchedule {
  /*
A standard cron string that defines a repeating schedule for
creating Backups via this BackupPlan.
If this is defined, then backupRetainDays must also be defined.
*/
  CronSchedule?: string;

  // This flag denotes whether automatic Backup creation is paused for this BackupPlan.
  Paused?: boolean;
}

export function Gkebackup_BackupPlanBackupSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CronSchedule",
      "A standard cron string that defines a repeating schedule for\ncreating Backups via this BackupPlan.\nIf this is defined, then backupRetainDays must also be defined.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Paused",
      "This flag denotes whether automatic Backup creation is paused for this BackupPlan.",
      [],
      false,
      false,
    ),
  ];
}
