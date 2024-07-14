import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecHttpRouteTimeoutIdle,
  appmesh_RouteSpecHttpRouteTimeoutIdle_GetTypes,
} from "./appmesh_RouteSpecHttpRouteTimeoutIdle";
import {
  appmesh_RouteSpecHttpRouteTimeoutPerRequest,
  appmesh_RouteSpecHttpRouteTimeoutPerRequest_GetTypes,
} from "./appmesh_RouteSpecHttpRouteTimeoutPerRequest";

export interface appmesh_RouteSpecHttpRouteTimeout {
  // Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.
  idle?: appmesh_RouteSpecHttpRouteTimeoutIdle;

  // Per request timeout.
  perRequest?: appmesh_RouteSpecHttpRouteTimeoutPerRequest;
}

export function appmesh_RouteSpecHttpRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "idle",
      "Idle timeout. An idle timeout bounds the amount of time that a connection may be idle.",
      appmesh_RouteSpecHttpRouteTimeoutIdle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRequest",
      "Per request timeout.",
      appmesh_RouteSpecHttpRouteTimeoutPerRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
