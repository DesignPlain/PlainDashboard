import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigateway_ApiConfigGatewayConfigBackendConfig,
  apigateway_ApiConfigGatewayConfigBackendConfig_GetTypes,
} from "./apigateway_ApiConfigGatewayConfigBackendConfig";

export interface apigateway_ApiConfigGatewayConfig {
  /*
Backend settings that are applied to all backends of the Gateway.
Structure is documented below.
*/
  backendConfig?: apigateway_ApiConfigGatewayConfigBackendConfig;
}

export function apigateway_ApiConfigGatewayConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "backendConfig",
      "Backend settings that are applied to all backends of the Gateway.\nStructure is documented below.",
      () => apigateway_ApiConfigGatewayConfigBackendConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
