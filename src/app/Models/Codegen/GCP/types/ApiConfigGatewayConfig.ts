import { ApiConfigGatewayConfigBackendConfig } from "./ApiConfigGatewayConfigBackendConfig";

export interface ApiConfigGatewayConfig {
  /*
Backend settings that are applied to all backends of the Gateway.
Structure is documented below.
*/
  BackendConfig?: ApiConfigGatewayConfigBackendConfig;
}
