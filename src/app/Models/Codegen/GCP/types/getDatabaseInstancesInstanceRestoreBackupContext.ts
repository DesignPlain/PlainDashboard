export interface getDatabaseInstancesInstanceRestoreBackupContext {
  // The ID of the instance that the backup was taken from.
  InstanceId?: string;

  // The ID of the project in which the resources belong. If it is not provided, the provider project is used.
  Project?: string;

  // The ID of the backup run to restore from.
  BackupRunId?: number;
}
