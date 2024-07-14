import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecHttp2RouteAction,
  appmesh_RouteSpecHttp2RouteAction_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteAction";
import {
  appmesh_RouteSpecHttp2RouteMatch,
  appmesh_RouteSpecHttp2RouteMatch_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatch";
import {
  appmesh_RouteSpecHttp2RouteRetryPolicy,
  appmesh_RouteSpecHttp2RouteRetryPolicy_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteRetryPolicy";
import {
  appmesh_RouteSpecHttp2RouteTimeout,
  appmesh_RouteSpecHttp2RouteTimeout_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteTimeout";

export interface appmesh_RouteSpecHttp2Route {
  // Action to take if a match is determined.
  action?: appmesh_RouteSpecHttp2RouteAction;

  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecHttp2RouteMatch;

  // Retry policy.
  retryPolicy?: appmesh_RouteSpecHttp2RouteRetryPolicy;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecHttp2RouteTimeout;
}

export function appmesh_RouteSpecHttp2Route_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Retry policy.",
      appmesh_RouteSpecHttp2RouteRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Types of timeouts.",
      appmesh_RouteSpecHttp2RouteTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take if a match is determined.",
      appmesh_RouteSpecHttp2RouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      appmesh_RouteSpecHttp2RouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
