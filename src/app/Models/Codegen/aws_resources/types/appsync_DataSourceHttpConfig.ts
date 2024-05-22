import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appsync_DataSourceHttpConfigAuthorizationConfig,
  appsync_DataSourceHttpConfigAuthorizationConfig_GetTypes,
} from "./appsync_DataSourceHttpConfigAuthorizationConfig";

export interface appsync_DataSourceHttpConfig {
  // Authorization configuration in case the HTTP endpoint requires authorization. See Authorization Config.
  authorizationConfig?: appsync_DataSourceHttpConfigAuthorizationConfig;

  // HTTP URL.
  endpoint?: string;
}

export function appsync_DataSourceHttpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "authorizationConfig",
      "Authorization configuration in case the HTTP endpoint requires authorization. See Authorization Config.",
      appsync_DataSourceHttpConfigAuthorizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "HTTP URL.",
      [],
      true,
      false,
    ),
  ];
}
