import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttpRouteRetryPolicy,
  appmesh_getRouteSpecHttpRouteRetryPolicy_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteRetryPolicy";
import {
  appmesh_getRouteSpecHttpRouteTimeout,
  appmesh_getRouteSpecHttpRouteTimeout_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteTimeout";
import {
  appmesh_getRouteSpecHttpRouteAction,
  appmesh_getRouteSpecHttpRouteAction_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteAction";
import {
  appmesh_getRouteSpecHttpRouteMatch,
  appmesh_getRouteSpecHttpRouteMatch_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatch";

export interface appmesh_getRouteSpecHttpRoute {
  //
  retryPolicies?: Array<appmesh_getRouteSpecHttpRouteRetryPolicy>;

  //
  timeouts?: Array<appmesh_getRouteSpecHttpRouteTimeout>;

  //
  actions?: Array<appmesh_getRouteSpecHttpRouteAction>;

  //
  matches?: Array<appmesh_getRouteSpecHttpRouteMatch>;
}

export function appmesh_getRouteSpecHttpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "retryPolicies",
      "",
      appmesh_getRouteSpecHttpRouteRetryPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "timeouts",
      "",
      appmesh_getRouteSpecHttpRouteTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      appmesh_getRouteSpecHttpRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getRouteSpecHttpRouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
