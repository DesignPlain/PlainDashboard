import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout,
  appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout";

export interface appmesh_getRouteSpecHttpRouteRetryPolicy {
  //
  httpRetryEvents?: Array<string>;

  //
  maxRetries?: number;

  //
  perRetryTimeouts?: Array<appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout>;

  //
  tcpRetryEvents?: Array<string>;
}

export function appmesh_getRouteSpecHttpRouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "maxRetries", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "perRetryTimeouts",
      "",
      appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes(),
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
  ];
}
