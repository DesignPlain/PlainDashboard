import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle,
  appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle";
import {
  appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest,
  appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest";

export interface appmesh_VirtualNodeSpecListenerTimeoutGrpc {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle;

  // Per request timeout.
  perRequest?: appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest;
}

export function appmesh_VirtualNodeSpecListenerTimeoutGrpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      () => appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRequest",
      "Per request timeout.",
      () => appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
