import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_GatewayRouteSpecHttpRouteAction,
  appmesh_GatewayRouteSpecHttpRouteAction_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteAction";
import {
  appmesh_GatewayRouteSpecHttpRouteMatch,
  appmesh_GatewayRouteSpecHttpRouteMatch_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatch";

export interface appmesh_GatewayRouteSpecHttpRoute {
  // Action to take if a match is determined.
  action?: appmesh_GatewayRouteSpecHttpRouteAction;

  // Criteria for determining a request match.
  match?: appmesh_GatewayRouteSpecHttpRouteMatch;
}

export function appmesh_GatewayRouteSpecHttpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a request match.",
      () => appmesh_GatewayRouteSpecHttpRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      () => appmesh_GatewayRouteSpecHttpRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
