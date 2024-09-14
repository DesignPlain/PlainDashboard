import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_RouteSpecGrpcRouteAction,
  appmesh_RouteSpecGrpcRouteAction_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteAction";
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

export interface appmesh_RouteSpecGrpcRoute {
  // Action to take if a match is determined.
  action?: appmesh_RouteSpecGrpcRouteAction;

  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecGrpcRouteMatch;

  // Retry policy.
  retryPolicy?: appmesh_RouteSpecGrpcRouteRetryPolicy;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecGrpcRouteTimeout;
}

export function appmesh_RouteSpecGrpcRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      () => appmesh_RouteSpecGrpcRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      () => appmesh_RouteSpecGrpcRouteMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Retry policy.",
      () => appmesh_RouteSpecGrpcRouteRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Types of timeouts.",
      () => appmesh_RouteSpecGrpcRouteTimeout_GetTypes(),
      false,
      false,
    ),
  ];
}
