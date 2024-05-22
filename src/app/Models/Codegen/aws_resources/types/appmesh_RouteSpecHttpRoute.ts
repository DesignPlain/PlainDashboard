import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttpRouteMatch,
  appmesh_RouteSpecHttpRouteMatch_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatch";
import {
  appmesh_RouteSpecHttpRouteRetryPolicy,
  appmesh_RouteSpecHttpRouteRetryPolicy_GetTypes,
} from "./appmesh_RouteSpecHttpRouteRetryPolicy";
import {
  appmesh_RouteSpecHttpRouteTimeout,
  appmesh_RouteSpecHttpRouteTimeout_GetTypes,
} from "./appmesh_RouteSpecHttpRouteTimeout";
import {
  appmesh_RouteSpecHttpRouteAction,
  appmesh_RouteSpecHttpRouteAction_GetTypes,
} from "./appmesh_RouteSpecHttpRouteAction";

export interface appmesh_RouteSpecHttpRoute {
  // Action to take if a match is determined.
  action?: appmesh_RouteSpecHttpRouteAction;

  // Criteria for determining an HTTP request match.
  match?: appmesh_RouteSpecHttpRouteMatch;

  // Retry policy.
  retryPolicy?: appmesh_RouteSpecHttpRouteRetryPolicy;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecHttpRouteTimeout;
}

export function appmesh_RouteSpecHttpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Types of timeouts.",
      appmesh_RouteSpecHttpRouteTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_RouteSpecHttpRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an HTTP request match.",
      appmesh_RouteSpecHttpRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Retry policy.",
      appmesh_RouteSpecHttpRouteRetryPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
