import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecGrpcRouteMatch,
  appmesh_RouteSpecGrpcRouteMatch_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteMatch";
import {
  appmesh_RouteSpecGrpcRouteRetryPolicy,
  appmesh_RouteSpecGrpcRouteRetryPolicy_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteRetryPolicy";
import {
  appmesh_RouteSpecGrpcRouteTimeout,
  appmesh_RouteSpecGrpcRouteTimeout_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteTimeout";
import {
  appmesh_RouteSpecGrpcRouteAction,
  appmesh_RouteSpecGrpcRouteAction_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteAction";

export interface appmesh_RouteSpecGrpcRoute {
  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecGrpcRouteMatch;

  // Retry policy.
  retryPolicy?: appmesh_RouteSpecGrpcRouteRetryPolicy;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecGrpcRouteTimeout;

  // Action to take if a match is determined.
  action?: appmesh_RouteSpecGrpcRouteAction;
}

export function appmesh_RouteSpecGrpcRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      appmesh_RouteSpecGrpcRouteMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Retry policy.",
      appmesh_RouteSpecGrpcRouteRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Types of timeouts.",
      appmesh_RouteSpecGrpcRouteTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_RouteSpecGrpcRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
