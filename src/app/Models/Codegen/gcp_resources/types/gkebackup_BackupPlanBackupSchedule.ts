import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkebackup_BackupPlanBackupSchedule {
  /*
A standard cron string that defines a repeating schedule for
creating Backups via this BackupPlan.
If this is defined, then backupRetainDays must also be defined.
*/
  cronSchedule?: string;

  // This flag denotes whether automatic Backup creation is paused for this BackupPlan.
  paused?: boolean;
}

export function gkebackup_BackupPlanBackupSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cronSchedule",
      "A standard cron string that defines a repeating schedule for\ncreating Backups via this BackupPlan.\nIf this is defined, then backupRetainDays must also be defined.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "paused",
      "This flag denotes whether automatic Backup creation is paused for this BackupPlan.",
      [],
      false,
      false,
    ),
  ];
}
