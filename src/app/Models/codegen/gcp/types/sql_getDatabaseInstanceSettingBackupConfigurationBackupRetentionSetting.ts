import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting {
  // Number of backups to retain.
  retainedBackups?: number;

  // The unit that 'retainedBackups' represents. Defaults to COUNT
  retentionUnit?: string;
}

export function sql_getDatabaseInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "retainedBackups",
      "Number of backups to retain.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "retentionUnit",
      "The unit that 'retainedBackups' represents. Defaults to COUNT",
      () => [],
      true,
      false,
    ),
  ];
}
