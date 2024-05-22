import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout,
  appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout";

export interface appmesh_getRouteSpecHttp2RouteRetryPolicy {
  //
  maxRetries?: number;

  //
  perRetryTimeouts?: Array<appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout>;

  //
  tcpRetryEvents?: Array<string>;

  //
  httpRetryEvents?: Array<string>;
}

export function appmesh_getRouteSpecHttp2RouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "perRetryTimeouts",
      "",
      appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcpRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "maxRetries", "", [], true, false),
  ];
}
