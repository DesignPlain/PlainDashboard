import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appsync_DataSourceHttpConfigAuthorizationConfig,
  appsync_DataSourceHttpConfigAuthorizationConfig_GetTypes,
} from "./appsync_DataSourceHttpConfigAuthorizationConfig";

export interface appsync_DataSourceHttpConfig {
  // HTTP URL.
  endpoint?: string;

  // Authorization configuration in case the HTTP endpoint requires authorization. See `authorization_config` Block for details.
  authorizationConfig?: appsync_DataSourceHttpConfigAuthorizationConfig;
}

export function appsync_DataSourceHttpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "authorizationConfig",
      "Authorization configuration in case the HTTP endpoint requires authorization. See `authorization_config` Block for details.",
      () => appsync_DataSourceHttpConfigAuthorizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "HTTP URL.",
      () => [],
      true,
      false,
    ),
  ];
}
