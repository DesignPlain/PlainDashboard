export interface DatabaseInstanceRestoreBackupContext {
  // The ID of the backup run to restore from.
  BackupRunId?: number;

  /*
The ID of the instance that the backup was taken from. If left empty,
this instance's ID will be used.
*/
  InstanceId?: string;

  // The full project ID of the source instance.`
  Project?: string;
}
