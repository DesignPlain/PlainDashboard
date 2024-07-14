import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteAction,
  appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteAction";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatch,
  appmesh_getGatewayRouteSpecHttp2RouteMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatch";

export interface appmesh_getGatewayRouteSpecHttp2Route {
  //
  actions?: Array<appmesh_getGatewayRouteSpecHttp2RouteAction>;

  //
  matches?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatch>;
}

export function appmesh_getGatewayRouteSpecHttp2Route_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
