import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsActiveDirectoryConfig {
  /*
The domain name for the active directory (e.g., mydomain.com).
Can only be used with SQL Server.
*/
  Domain?: string;
}

export function Sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "The domain name for the active directory (e.g., mydomain.com).\nCan only be used with SQL Server.",
      [],
      true,
      false,
    ),
  ];
}
