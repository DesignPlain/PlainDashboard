import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname,
  appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionRewritePath,
  appmesh_GatewayRouteSpecHttp2RouteActionRewritePath_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionRewritePath";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix,
  appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix";

export interface appmesh_GatewayRouteSpecHttp2RouteActionRewrite {
  // Exact path to rewrite.
  path?: appmesh_GatewayRouteSpecHttp2RouteActionRewritePath;

  // Specified beginning characters to rewrite.
  prefix?: appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix;

  // Host name to rewrite.
  hostname?: appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Exact path to rewrite.",
      () => appmesh_GatewayRouteSpecHttp2RouteActionRewritePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "prefix",
      "Specified beginning characters to rewrite.",
      () => appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostname",
      "Host name to rewrite.",
      () => appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes(),
      false,
      false,
    ),
  ];
}
