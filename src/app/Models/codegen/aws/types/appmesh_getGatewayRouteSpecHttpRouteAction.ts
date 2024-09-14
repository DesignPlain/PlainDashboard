import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionRewrite,
  appmesh_getGatewayRouteSpecHttpRouteActionRewrite_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionRewrite";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionTarget,
  appmesh_getGatewayRouteSpecHttpRouteActionTarget_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionTarget";

export interface appmesh_getGatewayRouteSpecHttpRouteAction {
  //
  rewrites?: Array<appmesh_getGatewayRouteSpecHttpRouteActionRewrite>;

  //
  targets?: Array<appmesh_getGatewayRouteSpecHttpRouteActionTarget>;
}

export function appmesh_getGatewayRouteSpecHttpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rewrites",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteActionRewrite_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
