import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingActiveDirectoryConfig {
  // Domain name of the Active Directory for SQL Server (e.g., mydomain.com).
  Domain?: string;
}

export function Sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "Domain name of the Active Directory for SQL Server (e.g., mydomain.com).",
      [],
      true,
      false,
    ),
  ];
}
