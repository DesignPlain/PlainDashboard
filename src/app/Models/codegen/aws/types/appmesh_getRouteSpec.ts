import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecTcpRoute,
  appmesh_getRouteSpecTcpRoute_GetTypes,
} from "./appmesh_getRouteSpecTcpRoute";
import {
  appmesh_getRouteSpecGrpcRoute,
  appmesh_getRouteSpecGrpcRoute_GetTypes,
} from "./appmesh_getRouteSpecGrpcRoute";
import {
  appmesh_getRouteSpecHttp2Route,
  appmesh_getRouteSpecHttp2Route_GetTypes,
} from "./appmesh_getRouteSpecHttp2Route";
import {
  appmesh_getRouteSpecHttpRoute,
  appmesh_getRouteSpecHttpRoute_GetTypes,
} from "./appmesh_getRouteSpecHttpRoute";

export interface appmesh_getRouteSpec {
  //
  httpRoutes?: Array<appmesh_getRouteSpecHttpRoute>;

  //
  priority?: number;

  //
  tcpRoutes?: Array<appmesh_getRouteSpecTcpRoute>;

  //
  grpcRoutes?: Array<appmesh_getRouteSpecGrpcRoute>;

  //
  http2Routes?: Array<appmesh_getRouteSpecHttp2Route>;
}

export function appmesh_getRouteSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "priority", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "tcpRoutes",
      "",
      () => appmesh_getRouteSpecTcpRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grpcRoutes",
      "",
      () => appmesh_getRouteSpecGrpcRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2Routes",
      "",
      () => appmesh_getRouteSpecHttp2Route_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRoutes",
      "",
      () => appmesh_getRouteSpecHttpRoute_GetTypes(),
      true,
      false,
    ),
  ];
}
