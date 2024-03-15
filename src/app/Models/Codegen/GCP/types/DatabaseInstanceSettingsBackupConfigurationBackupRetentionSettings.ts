export interface DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  /*
Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit
is 'COUNT', we will retain this many backups.
*/
  RetainedBackups?: number;

  // The unit that 'retained_backups' represents. Defaults to `COUNT`.
  RetentionUnit?: string;
}
