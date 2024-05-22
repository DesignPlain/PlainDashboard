import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecTcpRouteTimeoutIdle,
  appmesh_RouteSpecTcpRouteTimeoutIdle_GetTypes,
} from "./appmesh_RouteSpecTcpRouteTimeoutIdle";

export interface appmesh_RouteSpecTcpRouteTimeout {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_RouteSpecTcpRouteTimeoutIdle;
}

export function appmesh_RouteSpecTcpRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      appmesh_RouteSpecTcpRouteTimeoutIdle_GetTypes(),
      false,
      false,
    ),
  ];
}
