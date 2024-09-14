import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout,
  appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout";

export interface appmesh_getRouteSpecHttpRouteRetryPolicy {
  //
  tcpRetryEvents?: Array<string>;

  //
  httpRetryEvents?: Array<string>;

  //
  maxRetries?: number;

  //
  perRetryTimeouts?: Array<appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout>;
}

export function appmesh_getRouteSpecHttpRouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tcpRetryEvents",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perRetryTimeouts",
      "",
      () => appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes(),
      true,
      false,
    ),
  ];
}
