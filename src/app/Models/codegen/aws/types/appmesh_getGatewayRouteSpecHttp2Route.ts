import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatch,
  appmesh_getGatewayRouteSpecHttp2RouteMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatch";
import {
  appmesh_getGatewayRouteSpecHttp2RouteAction,
  appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteAction";

export interface appmesh_getGatewayRouteSpecHttp2Route {
  //
  matches?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatch>;

  //
  actions?: Array<appmesh_getGatewayRouteSpecHttp2RouteAction>;
}

export function appmesh_getGatewayRouteSpecHttp2Route_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      () => appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      () => appmesh_getGatewayRouteSpecHttp2RouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
