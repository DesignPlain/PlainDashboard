export interface getDatabaseInstanceRestoreBackupContext {
  // The ID of the backup run to restore from.
  BackupRunId?: number;

  // The ID of the instance that the backup was taken from.
  InstanceId?: string;

  // The ID of the project in which the resource belongs.
  Project?: string;
}
