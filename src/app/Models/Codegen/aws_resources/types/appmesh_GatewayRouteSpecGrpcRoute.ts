import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecGrpcRouteMatch,
  appmesh_GatewayRouteSpecGrpcRouteMatch_GetTypes,
} from "./appmesh_GatewayRouteSpecGrpcRouteMatch";
import {
  appmesh_GatewayRouteSpecGrpcRouteAction,
  appmesh_GatewayRouteSpecGrpcRouteAction_GetTypes,
} from "./appmesh_GatewayRouteSpecGrpcRouteAction";

export interface appmesh_GatewayRouteSpecGrpcRoute {
  // Criteria for determining a request match.
  match?: appmesh_GatewayRouteSpecGrpcRouteMatch;

  // Action to take if a match is determined.
  action?: appmesh_GatewayRouteSpecGrpcRouteAction;
}

export function appmesh_GatewayRouteSpecGrpcRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a request match.",
      appmesh_GatewayRouteSpecGrpcRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_GatewayRouteSpecGrpcRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
