import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  /*
Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit
is 'COUNT', we will retain this many backups.
*/
  retainedBackups?: number;

  // The unit that 'retained_backups' represents. Defaults to `COUNT`.
  retentionUnit?: string;
}

export function sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "retentionUnit",
      "The unit that 'retained_backups' represents. Defaults to `COUNT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retainedBackups",
      "Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit\nis 'COUNT', we will retain this many backups.",
      [],
      true,
      false,
    ),
  ];
}
