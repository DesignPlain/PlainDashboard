import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting,
  Sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes,
} from "./Sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting";

export interface Sql_getDatabaseInstanceSettingBackupConfiguration {
  //
  BackupRetentionSettings?: Array<Sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting>;

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
}

export function Sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "HH:MM format time indicating when backup configuration starts.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TransactionLogRetentionDays",
      "The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BackupRetentionSettings",
      "",
      Sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "BinaryLogEnabled",
      "True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "True if backup configuration is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "Location of the backup configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PointInTimeRecoveryEnabled",
      "True if Point-in-time recovery is enabled.",
      [],
      true,
      false,
    ),
  ];
}
