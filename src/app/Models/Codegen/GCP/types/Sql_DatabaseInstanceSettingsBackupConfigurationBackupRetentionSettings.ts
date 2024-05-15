import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  // The unit that 'retained_backups' represents. Defaults to `COUNT`.
  RetentionUnit?: string;

  /*
Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit
is 'COUNT', we will retain this many backups.
*/
  RetainedBackups?: number;
}

export function Sql_DatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RetentionUnit",
      "The unit that 'retained_backups' represents. Defaults to `COUNT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RetainedBackups",
      "Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit\nis 'COUNT', we will retain this many backups.",
      [],
      true,
      false,
    ),
  ];
}
