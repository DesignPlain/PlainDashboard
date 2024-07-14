import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionTarget,
  appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionTarget";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionRewrite,
  appmesh_getGatewayRouteSpecHttp2RouteActionRewrite_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionRewrite";

export interface appmesh_getGatewayRouteSpecHttp2RouteAction {
  //
  targets?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionTarget>;

  //
  rewrites?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionRewrite>;
}

export function appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rewrites",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteActionRewrite_GetTypes(),
      true,
      false,
    ),
  ];
}
