import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecListenerConnectionPoolHttp,
  appmesh_VirtualNodeSpecListenerConnectionPoolHttp_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerConnectionPoolHttp";
import {
  appmesh_VirtualNodeSpecListenerConnectionPoolTcp,
  appmesh_VirtualNodeSpecListenerConnectionPoolTcp_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerConnectionPoolTcp";
import {
  appmesh_VirtualNodeSpecListenerConnectionPoolGrpc,
  appmesh_VirtualNodeSpecListenerConnectionPoolGrpc_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerConnectionPoolGrpc";
import {
  appmesh_VirtualNodeSpecListenerConnectionPoolHttp2,
  appmesh_VirtualNodeSpecListenerConnectionPoolHttp2_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerConnectionPoolHttp2";

export interface appmesh_VirtualNodeSpecListenerConnectionPool {
  // Connection pool information for HTTP listeners.
  https?: Array<appmesh_VirtualNodeSpecListenerConnectionPoolHttp>;

  // Connection pool information for TCP listeners.
  tcps?: Array<appmesh_VirtualNodeSpecListenerConnectionPoolTcp>;

  // Connection pool information for gRPC listeners.
  grpc?: appmesh_VirtualNodeSpecListenerConnectionPoolGrpc;

  // Connection pool information for HTTP2 listeners.
  http2s?: Array<appmesh_VirtualNodeSpecListenerConnectionPoolHttp2>;
}

export function appmesh_VirtualNodeSpecListenerConnectionPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tcps",
      "Connection pool information for TCP listeners.",
      appmesh_VirtualNodeSpecListenerConnectionPoolTcp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "Connection pool information for gRPC listeners.",
      appmesh_VirtualNodeSpecListenerConnectionPoolGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2s",
      "Connection pool information for HTTP2 listeners.",
      appmesh_VirtualNodeSpecListenerConnectionPoolHttp2_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "https",
      "Connection pool information for HTTP listeners.",
      appmesh_VirtualNodeSpecListenerConnectionPoolHttp_GetTypes(),
      false,
      false,
    ),
  ];
}
