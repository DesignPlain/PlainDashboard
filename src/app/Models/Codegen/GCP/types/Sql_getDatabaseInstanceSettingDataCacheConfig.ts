import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingDataCacheConfig {
  // Whether data cache is enabled for the instance.
  DataCacheEnabled?: boolean;
}

export function Sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DataCacheEnabled",
      "Whether data cache is enabled for the instance.",
      [],
      true,
      false,
    ),
  ];
}
