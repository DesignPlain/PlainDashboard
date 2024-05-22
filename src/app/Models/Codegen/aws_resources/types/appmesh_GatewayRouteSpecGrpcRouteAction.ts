import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecGrpcRouteActionTarget,
  appmesh_GatewayRouteSpecGrpcRouteActionTarget_GetTypes,
} from "./appmesh_GatewayRouteSpecGrpcRouteActionTarget";

export interface appmesh_GatewayRouteSpecGrpcRouteAction {
  // Target that traffic is routed to when a request matches the gateway route.
  target?: appmesh_GatewayRouteSpecGrpcRouteActionTarget;
}

export function appmesh_GatewayRouteSpecGrpcRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "target",
      "Target that traffic is routed to when a request matches the gateway route.",
      appmesh_GatewayRouteSpecGrpcRouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
