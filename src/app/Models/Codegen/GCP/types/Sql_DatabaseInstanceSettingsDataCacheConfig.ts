import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsDataCacheConfig {
  // Whether data cache is enabled for the instance. Defaults to `false`. Can be used with MYSQL and PostgreSQL only.
  DataCacheEnabled?: boolean;
}

export function Sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DataCacheEnabled",
      "Whether data cache is enabled for the instance. Defaults to `false`. Can be used with MYSQL and PostgreSQL only.",
      [],
      false,
      false,
    ),
  ];
}
