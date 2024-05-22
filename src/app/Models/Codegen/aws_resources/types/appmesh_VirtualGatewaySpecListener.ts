import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecListenerHealthCheck,
  appmesh_VirtualGatewaySpecListenerHealthCheck_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerHealthCheck";
import {
  appmesh_VirtualGatewaySpecListenerPortMapping,
  appmesh_VirtualGatewaySpecListenerPortMapping_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerPortMapping";
import {
  appmesh_VirtualGatewaySpecListenerTls,
  appmesh_VirtualGatewaySpecListenerTls_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTls";
import {
  appmesh_VirtualGatewaySpecListenerConnectionPool,
  appmesh_VirtualGatewaySpecListenerConnectionPool_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerConnectionPool";

export interface appmesh_VirtualGatewaySpecListener {
  // Health check information for the listener.
  healthCheck?: appmesh_VirtualGatewaySpecListenerHealthCheck;

  // Port mapping information for the listener.
  portMapping?: appmesh_VirtualGatewaySpecListenerPortMapping;

  // Transport Layer Security (TLS) properties for the listener
  tls?: appmesh_VirtualGatewaySpecListenerTls;

  // Connection pool information for the listener.
  connectionPool?: appmesh_VirtualGatewaySpecListenerConnectionPool;
}

export function appmesh_VirtualGatewaySpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "healthCheck",
      "Health check information for the listener.",
      appmesh_VirtualGatewaySpecListenerHealthCheck_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "portMapping",
      "Port mapping information for the listener.",
      appmesh_VirtualGatewaySpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tls",
      "Transport Layer Security (TLS) properties for the listener",
      appmesh_VirtualGatewaySpecListenerTls_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "connectionPool",
      "Connection pool information for the listener.",
      appmesh_VirtualGatewaySpecListenerConnectionPool_GetTypes(),
      false,
      false,
    ),
  ];
}
