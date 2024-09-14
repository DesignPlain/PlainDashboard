import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest,
  appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest";
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle,
  appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle";

export interface appmesh_VirtualNodeSpecListenerTimeoutHttp2 {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle;

  // Per request timeout.
  perRequest?: appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest;
}

export function appmesh_VirtualNodeSpecListenerTimeoutHttp2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      () => appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRequest",
      "Per request timeout.",
      () => appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
