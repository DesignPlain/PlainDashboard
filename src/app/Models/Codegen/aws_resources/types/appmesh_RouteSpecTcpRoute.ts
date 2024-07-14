import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecTcpRouteAction,
  appmesh_RouteSpecTcpRouteAction_GetTypes,
} from "./appmesh_RouteSpecTcpRouteAction";
import {
  appmesh_RouteSpecTcpRouteMatch,
  appmesh_RouteSpecTcpRouteMatch_GetTypes,
} from "./appmesh_RouteSpecTcpRouteMatch";
import {
  appmesh_RouteSpecTcpRouteTimeout,
  appmesh_RouteSpecTcpRouteTimeout_GetTypes,
} from "./appmesh_RouteSpecTcpRouteTimeout";

export interface appmesh_RouteSpecTcpRoute {
  // Action to take if a match is determined.
  action?: appmesh_RouteSpecTcpRouteAction;

  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecTcpRouteMatch;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecTcpRouteTimeout;
}

export function appmesh_RouteSpecTcpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      appmesh_RouteSpecTcpRouteMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Types of timeouts.",
      appmesh_RouteSpecTcpRouteTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_RouteSpecTcpRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
