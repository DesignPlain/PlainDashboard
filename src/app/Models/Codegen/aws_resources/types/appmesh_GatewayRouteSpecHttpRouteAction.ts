import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttpRouteActionRewrite,
  appmesh_GatewayRouteSpecHttpRouteActionRewrite_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionRewrite";
import {
  appmesh_GatewayRouteSpecHttpRouteActionTarget,
  appmesh_GatewayRouteSpecHttpRouteActionTarget_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionTarget";

export interface appmesh_GatewayRouteSpecHttpRouteAction {
  // Gateway route action to rewrite.
  rewrite?: appmesh_GatewayRouteSpecHttpRouteActionRewrite;

  // Target that traffic is routed to when a request matches the gateway route.
  target?: appmesh_GatewayRouteSpecHttpRouteActionTarget;
}

export function appmesh_GatewayRouteSpecHttpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rewrite",
      "Gateway route action to rewrite.",
      appmesh_GatewayRouteSpecHttpRouteActionRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "target",
      "Target that traffic is routed to when a request matches the gateway route.",
      appmesh_GatewayRouteSpecHttpRouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
