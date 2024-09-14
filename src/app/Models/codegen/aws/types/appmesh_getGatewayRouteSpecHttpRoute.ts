import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatch,
  appmesh_getGatewayRouteSpecHttpRouteMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatch";
import {
  appmesh_getGatewayRouteSpecHttpRouteAction,
  appmesh_getGatewayRouteSpecHttpRouteAction_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteAction";

export interface appmesh_getGatewayRouteSpecHttpRoute {
  //
  actions?: Array<appmesh_getGatewayRouteSpecHttpRouteAction>;

  //
  matches?: Array<appmesh_getGatewayRouteSpecHttpRouteMatch>;
}

export function appmesh_getGatewayRouteSpecHttpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
