import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttp2RouteMatch,
  appmesh_GatewayRouteSpecHttp2RouteMatch_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteMatch";
import {
  appmesh_GatewayRouteSpecHttp2RouteAction,
  appmesh_GatewayRouteSpecHttp2RouteAction_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteAction";

export interface appmesh_GatewayRouteSpecHttp2Route {
  // Action to take if a match is determined.
  action?: appmesh_GatewayRouteSpecHttp2RouteAction;

  // Criteria for determining a request match.
  match?: appmesh_GatewayRouteSpecHttp2RouteMatch;
}

export function appmesh_GatewayRouteSpecHttp2Route_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_GatewayRouteSpecHttp2RouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a request match.",
      appmesh_GatewayRouteSpecHttp2RouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
