import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc,
  appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc";
import {
  appmesh_VirtualGatewaySpecListenerConnectionPoolHttp,
  appmesh_VirtualGatewaySpecListenerConnectionPoolHttp_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerConnectionPoolHttp";
import {
  appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2,
  appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2";

export interface appmesh_VirtualGatewaySpecListenerConnectionPool {
  // Connection pool information for gRPC listeners.
  grpc?: appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc;

  // Connection pool information for HTTP listeners.
  http?: appmesh_VirtualGatewaySpecListenerConnectionPoolHttp;

  // Connection pool information for HTTP2 listeners.
  http2?: appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2;
}

export function appmesh_VirtualGatewaySpecListenerConnectionPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "Connection pool information for gRPC listeners.",
      () => appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http",
      "Connection pool information for HTTP listeners.",
      () => appmesh_VirtualGatewaySpecListenerConnectionPoolHttp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http2",
      "Connection pool information for HTTP2 listeners.",
      () => appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes(),
      false,
      false,
    ),
  ];
}
