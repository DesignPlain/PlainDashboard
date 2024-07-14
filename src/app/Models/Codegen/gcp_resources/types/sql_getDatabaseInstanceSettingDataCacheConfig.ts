import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getDatabaseInstanceSettingDataCacheConfig {
  // Whether data cache is enabled for the instance.
  dataCacheEnabled?: boolean;
}

export function sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dataCacheEnabled",
      "Whether data cache is enabled for the instance.",
      [],
      true,
      false,
    ),
  ];
}
