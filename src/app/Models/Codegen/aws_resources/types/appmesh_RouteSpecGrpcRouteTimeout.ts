import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecGrpcRouteTimeoutIdle,
  appmesh_RouteSpecGrpcRouteTimeoutIdle_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteTimeoutIdle";
import {
  appmesh_RouteSpecGrpcRouteTimeoutPerRequest,
  appmesh_RouteSpecGrpcRouteTimeoutPerRequest_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteTimeoutPerRequest";

export interface appmesh_RouteSpecGrpcRouteTimeout {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_RouteSpecGrpcRouteTimeoutIdle;

  // Per request timeout.
  perRequest?: appmesh_RouteSpecGrpcRouteTimeoutPerRequest;
}

export function appmesh_RouteSpecGrpcRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      appmesh_RouteSpecGrpcRouteTimeoutIdle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRequest",
      "Per request timeout.",
      appmesh_RouteSpecGrpcRouteTimeoutPerRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
