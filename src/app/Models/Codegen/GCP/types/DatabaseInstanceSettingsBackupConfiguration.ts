import { DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings } from "./DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings";

export interface DatabaseInstanceSettingsBackupConfiguration {
  // The number of days of transaction logs we retain for point in time restore, from 1-7. For PostgreSQL Enterprise Plus instances, the number of days of retained transaction logs can be set from 1 to 35.
  TransactionLogRetentionDays?: number;

  // Backup retention settings. The configuration is detailed below.
  BackupRetentionSettings?: DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;

  /*
True if binary logging is enabled.
Can only be used with MySQL.
*/
  BinaryLogEnabled?: boolean;

  // True if backup configuration is enabled.
  Enabled?: boolean;

  // The region where the backup will be stored
  Location?: string;

  // True if Point-in-time recovery is enabled. Will restart database if enabled after instance creation. Valid only for PostgreSQL and SQL Server instances.
  PointInTimeRecoveryEnabled?: boolean;

  /*
`HH:MM` format time indicating when backup
configuration starts.
*/
  StartTime?: string;
}
