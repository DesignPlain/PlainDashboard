import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest,
  appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest";
import {
  appmesh_VirtualNodeSpecListenerTimeoutHttpIdle,
  appmesh_VirtualNodeSpecListenerTimeoutHttpIdle_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTimeoutHttpIdle";

export interface appmesh_VirtualNodeSpecListenerTimeoutHttp {
  // Per request timeout.
  perRequest?: appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest;

  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_VirtualNodeSpecListenerTimeoutHttpIdle;
}

export function appmesh_VirtualNodeSpecListenerTimeoutHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "perRequest",
      "Per request timeout.",
      appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      appmesh_VirtualNodeSpecListenerTimeoutHttpIdle_GetTypes(),
      false,
      false,
    ),
  ];
}
