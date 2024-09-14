import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname,
  appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath,
  appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix,
  appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix";

export interface appmesh_getGatewayRouteSpecHttp2RouteActionRewrite {
  //
  hostnames?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname>;

  //
  paths?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath>;

  //
  prefixes?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix>;
}

export function appmesh_getGatewayRouteSpecHttp2RouteActionRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "hostnames",
      "",
      () =>
        appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      () => appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "prefixes",
      "",
      () => appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes(),
      true,
      false,
    ),
  ];
}
