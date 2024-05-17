import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigateway_ApiConfigGatewayConfigBackendConfig,
  Apigateway_ApiConfigGatewayConfigBackendConfig_GetTypes,
} from "./Apigateway_ApiConfigGatewayConfigBackendConfig";

export interface Apigateway_ApiConfigGatewayConfig {
  /*
Backend settings that are applied to all backends of the Gateway.
Structure is documented below.
*/
  BackendConfig?: Apigateway_ApiConfigGatewayConfigBackendConfig;
}

export function Apigateway_ApiConfigGatewayConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BackendConfig",
      "Backend settings that are applied to all backends of the Gateway.\nStructure is documented below.",
      Apigateway_ApiConfigGatewayConfigBackendConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
