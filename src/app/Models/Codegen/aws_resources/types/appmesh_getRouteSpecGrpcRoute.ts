import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecGrpcRouteAction,
  appmesh_getRouteSpecGrpcRouteAction_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteAction";
import {
  appmesh_getRouteSpecGrpcRouteMatch,
  appmesh_getRouteSpecGrpcRouteMatch_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteMatch";
import {
  appmesh_getRouteSpecGrpcRouteRetryPolicy,
  appmesh_getRouteSpecGrpcRouteRetryPolicy_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteRetryPolicy";
import {
  appmesh_getRouteSpecGrpcRouteTimeout,
  appmesh_getRouteSpecGrpcRouteTimeout_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteTimeout";

export interface appmesh_getRouteSpecGrpcRoute {
  //
  actions?: Array<appmesh_getRouteSpecGrpcRouteAction>;

  //
  matches?: Array<appmesh_getRouteSpecGrpcRouteMatch>;

  //
  retryPolicies?: Array<appmesh_getRouteSpecGrpcRouteRetryPolicy>;

  //
  timeouts?: Array<appmesh_getRouteSpecGrpcRouteTimeout>;
}

export function appmesh_getRouteSpecGrpcRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getRouteSpecGrpcRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "retryPolicies",
      "",
      appmesh_getRouteSpecGrpcRouteRetryPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "timeouts",
      "",
      appmesh_getRouteSpecGrpcRouteTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      appmesh_getRouteSpecGrpcRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
