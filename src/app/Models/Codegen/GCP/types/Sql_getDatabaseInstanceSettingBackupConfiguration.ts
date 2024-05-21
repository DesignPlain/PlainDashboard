import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting,
  sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes,
} from "./sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting";

export interface sql_getDatabaseInstanceSettingBackupConfiguration {
  //
  backupRetentionSettings?: Array<sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting>;

  // True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.
  binaryLogEnabled?: boolean;

  // True if backup configuration is enabled.
  enabled?: boolean;

  // Location of the backup configuration.
  location?: string;

  // True if Point-in-time recovery is enabled.
  pointInTimeRecoveryEnabled?: boolean;

  // HH:MM format time indicating when backup configuration starts.
  startTime?: string;

  // The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)
  transactionLogRetentionDays?: number;
}

export function sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "pointInTimeRecoveryEnabled",
      "True if Point-in-time recovery is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "HH:MM format time indicating when backup configuration starts.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transactionLogRetentionDays",
      "The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backupRetentionSettings",
      "",
      sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "binaryLogEnabled",
      "True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "True if backup configuration is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Location of the backup configuration.",
      [],
      true,
      false,
    ),
  ];
}
