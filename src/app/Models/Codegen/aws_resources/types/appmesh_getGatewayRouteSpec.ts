import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecGrpcRoute,
  appmesh_getGatewayRouteSpecGrpcRoute_GetTypes,
} from "./appmesh_getGatewayRouteSpecGrpcRoute";
import {
  appmesh_getGatewayRouteSpecHttp2Route,
  appmesh_getGatewayRouteSpecHttp2Route_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2Route";
import {
  appmesh_getGatewayRouteSpecHttpRoute,
  appmesh_getGatewayRouteSpecHttpRoute_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRoute";

export interface appmesh_getGatewayRouteSpec {
  //
  grpcRoutes?: Array<appmesh_getGatewayRouteSpecGrpcRoute>;

  //
  http2Routes?: Array<appmesh_getGatewayRouteSpecHttp2Route>;

  //
  httpRoutes?: Array<appmesh_getGatewayRouteSpecHttpRoute>;

  //
  priority?: number;
}

export function appmesh_getGatewayRouteSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "grpcRoutes",
      "",
      appmesh_getGatewayRouteSpecGrpcRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2Routes",
      "",
      appmesh_getGatewayRouteSpecHttp2Route_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRoutes",
      "",
      appmesh_getGatewayRouteSpecHttpRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "priority", "", [], true, false),
  ];
}
