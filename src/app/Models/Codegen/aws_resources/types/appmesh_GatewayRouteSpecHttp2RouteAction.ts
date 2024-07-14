import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttp2RouteActionTarget,
  appmesh_GatewayRouteSpecHttp2RouteActionTarget_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionTarget";
import {
  appmesh_GatewayRouteSpecHttp2RouteActionRewrite,
  appmesh_GatewayRouteSpecHttp2RouteActionRewrite_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteActionRewrite";

export interface appmesh_GatewayRouteSpecHttp2RouteAction {
  // Target that traffic is routed to when a request matches the gateway route.
  target?: appmesh_GatewayRouteSpecHttp2RouteActionTarget;

  // Gateway route action to rewrite.
  rewrite?: appmesh_GatewayRouteSpecHttp2RouteActionRewrite;
}

export function appmesh_GatewayRouteSpecHttp2RouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "target",
      "Target that traffic is routed to when a request matches the gateway route.",
      appmesh_GatewayRouteSpecHttp2RouteActionTarget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rewrite",
      "Gateway route action to rewrite.",
      appmesh_GatewayRouteSpecHttp2RouteActionRewrite_GetTypes(),
      false,
      false,
    ),
  ];
}
