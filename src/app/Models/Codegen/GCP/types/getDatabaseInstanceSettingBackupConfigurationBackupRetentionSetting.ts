export interface getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting {
  // Number of backups to retain.
  RetainedBackups?: number;

  // The unit that 'retainedBackups' represents. Defaults to COUNT
  RetentionUnit?: string;
}
