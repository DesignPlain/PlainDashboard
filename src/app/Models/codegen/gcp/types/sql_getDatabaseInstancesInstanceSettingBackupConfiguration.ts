import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting,
  sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes,
} from "./sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting";

export interface sql_getDatabaseInstancesInstanceSettingBackupConfiguration {
  //
  backupRetentionSettings?: Array<sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting>;

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

export function sql_getDatabaseInstancesInstanceSettingBackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "transactionLogRetentionDays",
      "The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backupRetentionSettings",
      "",
      () =>
        sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "binaryLogEnabled",
      "True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "True if backup configuration is enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Location of the backup configuration.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "pointInTimeRecoveryEnabled",
      "True if Point-in-time recovery is enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "HH:MM format time indicating when backup configuration starts.",
      () => [],
      true,
      false,
    ),
  ];
}
