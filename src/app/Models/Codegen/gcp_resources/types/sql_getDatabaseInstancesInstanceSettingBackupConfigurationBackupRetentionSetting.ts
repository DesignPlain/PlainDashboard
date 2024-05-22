import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting {
  // Number of backups to retain.
  retainedBackups?: number;

  // The unit that 'retainedBackups' represents. Defaults to COUNT
  retentionUnit?: string;
}

export function sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "retentionUnit",
      "The unit that 'retainedBackups' represents. Defaults to COUNT",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retainedBackups",
      "Number of backups to retain.",
      [],
      true,
      false,
    ),
  ];
}
