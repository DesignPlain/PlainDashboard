import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings,
  Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes,
} from "./Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings";

export interface Sql_DatabaseInstanceSettingsBackupConfiguration {
  // Backup retention settings. The configuration is detailed below.
  BackupRetentionSettings?: Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;

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

  // The number of days of transaction logs we retain for point in time restore, from 1-7. For PostgreSQL Enterprise Plus instances, the number of days of retained transaction logs can be set from 1 to 35.
  TransactionLogRetentionDays?: number;
}

export function Sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BackupRetentionSettings",
      "Backup retention settings. The configuration is detailed below.",
      Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "BinaryLogEnabled",
      "True if binary logging is enabled.\nCan only be used with MySQL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "True if backup configuration is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The region where the backup will be stored",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PointInTimeRecoveryEnabled",
      "True if Point-in-time recovery is enabled. Will restart database if enabled after instance creation. Valid only for PostgreSQL and SQL Server instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "`HH:MM` format time indicating when backup\nconfiguration starts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TransactionLogRetentionDays",
      "The number of days of transaction logs we retain for point in time restore, from 1-7. For PostgreSQL Enterprise Plus instances, the number of days of retained transaction logs can be set from 1 to 35.",
      [],
      false,
      false,
    ),
  ];
}
