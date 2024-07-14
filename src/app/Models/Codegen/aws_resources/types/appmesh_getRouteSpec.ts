import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2Route,
  appmesh_getRouteSpecHttp2Route_GetTypes,
} from "./appmesh_getRouteSpecHttp2Route";
import {
  appmesh_getRouteSpecHttpRoute,
  appmesh_getRouteSpecHttpRoute_GetTypes,
} from "./appmesh_getRouteSpecHttpRoute";
import {
  appmesh_getRouteSpecTcpRoute,
  appmesh_getRouteSpecTcpRoute_GetTypes,
} from "./appmesh_getRouteSpecTcpRoute";
import {
  appmesh_getRouteSpecGrpcRoute,
  appmesh_getRouteSpecGrpcRoute_GetTypes,
} from "./appmesh_getRouteSpecGrpcRoute";

export interface appmesh_getRouteSpec {
  //
  grpcRoutes?: Array<appmesh_getRouteSpecGrpcRoute>;

  //
  http2Routes?: Array<appmesh_getRouteSpecHttp2Route>;

  //
  httpRoutes?: Array<appmesh_getRouteSpecHttpRoute>;

  //
  priority?: number;

  //
  tcpRoutes?: Array<appmesh_getRouteSpecTcpRoute>;
}

export function appmesh_getRouteSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "grpcRoutes",
      "",
      appmesh_getRouteSpecGrpcRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2Routes",
      "",
      appmesh_getRouteSpecHttp2Route_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRoutes",
      "",
      appmesh_getRouteSpecHttpRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "priority", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "tcpRoutes",
      "",
      appmesh_getRouteSpecTcpRoute_GetTypes(),
      true,
      false,
    ),
  ];
}
