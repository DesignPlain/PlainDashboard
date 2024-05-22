import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttp2Route,
  appmesh_GatewayRouteSpecHttp2Route_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2Route";
import {
  appmesh_GatewayRouteSpecHttpRoute,
  appmesh_GatewayRouteSpecHttpRoute_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRoute";
import {
  appmesh_GatewayRouteSpecGrpcRoute,
  appmesh_GatewayRouteSpecGrpcRoute_GetTypes,
} from "./appmesh_GatewayRouteSpecGrpcRoute";

export interface appmesh_GatewayRouteSpec {
  // Specification of a gRPC gateway route.
  grpcRoute?: appmesh_GatewayRouteSpecGrpcRoute;

  // Specification of an HTTP/2 gateway route.
  http2Route?: appmesh_GatewayRouteSpecHttp2Route;

  // Specification of an HTTP gateway route.
  httpRoute?: appmesh_GatewayRouteSpecHttpRoute;

  // Priority for the gateway route, between `0` and `1000`.
  priority?: number;
}

export function appmesh_GatewayRouteSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpRoute",
      "Specification of an HTTP gateway route.",
      appmesh_GatewayRouteSpecHttpRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority for the gateway route, between `0` and `1000`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpcRoute",
      "Specification of a gRPC gateway route.",
      appmesh_GatewayRouteSpecGrpcRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http2Route",
      "Specification of an HTTP/2 gateway route.",
      appmesh_GatewayRouteSpecHttp2Route_GetTypes(),
      false,
      false,
    ),
  ];
}
