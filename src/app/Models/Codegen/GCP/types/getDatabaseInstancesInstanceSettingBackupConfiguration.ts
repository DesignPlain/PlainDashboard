import { getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting } from "./getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting";

export interface getDatabaseInstancesInstanceSettingBackupConfiguration {
  // True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.
  BinaryLogEnabled?: boolean;

  // True if backup configuration is enabled.
  Enabled?: boolean;

  // Location of the backup configuration.
  Location?: string;

  // True if Point-in-time recovery is enabled.
  PointInTimeRecoveryEnabled?: boolean;

  // HH:MM format time indicating when backup configuration starts.
  StartTime?: string;

  // The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)
  TransactionLogRetentionDays?: number;

  //
  BackupRetentionSettings?: Array<getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting>;
}
