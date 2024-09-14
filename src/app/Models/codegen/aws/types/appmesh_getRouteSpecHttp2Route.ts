import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecHttp2RouteRetryPolicy,
  appmesh_getRouteSpecHttp2RouteRetryPolicy_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteRetryPolicy";
import {
  appmesh_getRouteSpecHttp2RouteTimeout,
  appmesh_getRouteSpecHttp2RouteTimeout_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteTimeout";
import {
  appmesh_getRouteSpecHttp2RouteAction,
  appmesh_getRouteSpecHttp2RouteAction_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteAction";
import {
  appmesh_getRouteSpecHttp2RouteMatch,
  appmesh_getRouteSpecHttp2RouteMatch_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatch";

export interface appmesh_getRouteSpecHttp2Route {
  //
  actions?: Array<appmesh_getRouteSpecHttp2RouteAction>;

  //
  matches?: Array<appmesh_getRouteSpecHttp2RouteMatch>;

  //
  retryPolicies?: Array<appmesh_getRouteSpecHttp2RouteRetryPolicy>;

  //
  timeouts?: Array<appmesh_getRouteSpecHttp2RouteTimeout>;
}

export function appmesh_getRouteSpecHttp2Route_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      () => appmesh_getRouteSpecHttp2RouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "retryPolicies",
      "",
      () => appmesh_getRouteSpecHttp2RouteRetryPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "timeouts",
      "",
      () => appmesh_getRouteSpecHttp2RouteTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      () => appmesh_getRouteSpecHttp2RouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
