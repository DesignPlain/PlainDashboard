import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchHostname,
  appmesh_getGatewayRouteSpecHttp2RouteMatchHostname_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchHostname";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchPath,
  appmesh_getGatewayRouteSpecHttp2RouteMatchPath_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchPath";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter,
  appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeader,
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeader_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchHeader";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatch {
  //
  prefix?: string;

  //
  queryParameters?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter>;

  //
  headers?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchHeader>;

  //
  hostnames?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchHostname>;

  //
  paths?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchPath>;

  //
  port?: number;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hostnames",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchHostname_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes(),
      true,
      false,
    ),
  ];
}
