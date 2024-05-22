import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionTarget,
  appmesh_getGatewayRouteSpecHttpRouteActionTarget_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionTarget";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionRewrite,
  appmesh_getGatewayRouteSpecHttpRouteActionRewrite_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionRewrite";

export interface appmesh_getGatewayRouteSpecHttpRouteAction {
  //
  targets?: Array<appmesh_getGatewayRouteSpecHttpRouteActionTarget>;

  //
  rewrites?: Array<appmesh_getGatewayRouteSpecHttpRouteActionRewrite>;
}

export function appmesh_getGatewayRouteSpecHttpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "",
      appmesh_getGatewayRouteSpecHttpRouteActionTarget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rewrites",
      "",
      appmesh_getGatewayRouteSpecHttpRouteActionRewrite_GetTypes(),
      true,
      false,
    ),
  ];
}
