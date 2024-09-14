import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings,
  sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes,
} from "./sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings";

export interface sql_DatabaseInstanceSettingsBackupConfiguration {
  /*
`HH:MM` format time indicating when backup
configuration starts.
*/
  startTime?: string;

  // The number of days of transaction logs we retain for point in time restore, from 1-7. For PostgreSQL Enterprise Plus instances, the number of days of retained transaction logs can be set from 1 to 35.
  transactionLogRetentionDays?: number;

  // Backup retention settings. The configuration is detailed below.
  backupRetentionSettings?: sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;

  /*
True if binary logging is enabled.
Can only be used with MySQL.
*/
  binaryLogEnabled?: boolean;

  // True if backup configuration is enabled.
  enabled?: boolean;

  // The region where the backup will be stored
  location?: string;

  // True if Point-in-time recovery is enabled. Will restart database if enabled after instance creation. Valid only for PostgreSQL and SQL Server instances.
  pointInTimeRecoveryEnabled?: boolean;
}

export function sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "The region where the backup will be stored",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "pointInTimeRecoveryEnabled",
      "True if Point-in-time recovery is enabled. Will restart database if enabled after instance creation. Valid only for PostgreSQL and SQL Server instances.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "`HH:MM` format time indicating when backup\nconfiguration starts.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transactionLogRetentionDays",
      "The number of days of transaction logs we retain for point in time restore, from 1-7. For PostgreSQL Enterprise Plus instances, the number of days of retained transaction logs can be set from 1 to 35.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "backupRetentionSettings",
      "Backup retention settings. The configuration is detailed below.",
      () =>
        sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "binaryLogEnabled",
      "True if binary logging is enabled.\nCan only be used with MySQL.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "True if backup configuration is enabled.",
      () => [],
      false,
      false,
    ),
  ];
}
