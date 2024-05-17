import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting {
  // Number of backups to retain.
  RetainedBackups?: number;

  // The unit that 'retainedBackups' represents. Defaults to COUNT
  RetentionUnit?: string;
}

export function Sql_getDatabaseInstancesInstanceSettingBackupConfigurationBackupRetentionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "RetainedBackups",
      "Number of backups to retain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RetentionUnit",
      "The unit that 'retainedBackups' represents. Defaults to COUNT",
      [],
      true,
      false,
    ),
  ];
}
