import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTimeoutGrpc,
  appmesh_VirtualNodeSpecListenerTimeoutGrpc_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutGrpc";
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttp,
  appmesh_VirtualNodeSpecListenerTimeoutHttp_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttp";
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttp2,
  appmesh_VirtualNodeSpecListenerTimeoutHttp2_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttp2";
import {
  appmesh_VirtualNodeSpecListenerTimeoutTcp,
  appmesh_VirtualNodeSpecListenerTimeoutTcp_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutTcp";

export interface appmesh_VirtualNodeSpecListenerTimeout {
  // Timeouts for gRPC listeners.
  grpc?: appmesh_VirtualNodeSpecListenerTimeoutGrpc;

  // Timeouts for HTTP listeners.
  http?: appmesh_VirtualNodeSpecListenerTimeoutHttp;

  // Timeouts for HTTP2 listeners.
  http2?: appmesh_VirtualNodeSpecListenerTimeoutHttp2;

  // Timeouts for TCP listeners.
  tcp?: appmesh_VirtualNodeSpecListenerTimeoutTcp;
}

export function appmesh_VirtualNodeSpecListenerTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tcp",
      "Timeouts for TCP listeners.",
      appmesh_VirtualNodeSpecListenerTimeoutTcp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "Timeouts for gRPC listeners.",
      appmesh_VirtualNodeSpecListenerTimeoutGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http",
      "Timeouts for HTTP listeners.",
      appmesh_VirtualNodeSpecListenerTimeoutHttp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http2",
      "Timeouts for HTTP2 listeners.",
      appmesh_VirtualNodeSpecListenerTimeoutHttp2_GetTypes(),
      false,
      false,
    ),
  ];
}
