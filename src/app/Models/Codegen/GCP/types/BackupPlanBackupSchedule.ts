export interface BackupPlanBackupSchedule {
  /*
A standard cron string that defines a repeating schedule for
creating Backups via this BackupPlan.
If this is defined, then backupRetainDays must also be defined.
*/
  CronSchedule?: string;

  // This flag denotes whether automatic Backup creation is paused for this BackupPlan.
  Paused?: boolean;
}
