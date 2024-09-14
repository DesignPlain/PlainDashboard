import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionRewrite,
  appmesh_GatewayRouteSpecHttp2RouteActionRewrite_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionRewrite";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionTarget,
  appmesh_GatewayRouteSpecHttp2RouteActionTarget_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionTarget";

export interface appmesh_GatewayRouteSpecHttp2RouteAction {
  // Gateway route action to rewrite.
  rewrite?: appmesh_GatewayRouteSpecHttp2RouteActionRewrite;

  // Target that traffic is routed to when a request matches the gateway route.
  target?: appmesh_GatewayRouteSpecHttp2RouteActionTarget;
}

export function appmesh_GatewayRouteSpecHttp2RouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rewrite",
      "Gateway route action to rewrite.",
      () => appmesh_GatewayRouteSpecHttp2RouteActionRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "target",
      "Target that traffic is routed to when a request matches the gateway route.",
      () => appmesh_GatewayRouteSpecHttp2RouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
