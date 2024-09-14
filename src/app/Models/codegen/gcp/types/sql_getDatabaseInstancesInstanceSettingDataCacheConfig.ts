import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstancesInstanceSettingDataCacheConfig {
  // Whether data cache is enabled for the instance.
  dataCacheEnabled?: boolean;
}

export function sql_getDatabaseInstancesInstanceSettingDataCacheConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dataCacheEnabled",
      "Whether data cache is enabled for the instance.",
      () => [],
      true,
      false,
    ),
  ];
}
