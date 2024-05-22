import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout,
  appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout";

export interface appmesh_RouteSpecHttpRouteRetryPolicy {
  /*
List of HTTP retry events.
Valid values: `client-error` (HTTP status code 409), `gateway-error` (HTTP status codes 502, 503, and 504), `server-error` (HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511), `stream-error` (retry on refused stream).
*/
  httpRetryEvents?: Array<string>;

  // Maximum number of retries.
  maxRetries?: number;

  // Per-retry timeout.
  perRetryTimeout?: appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout;

  // List of TCP retry events. The only valid value is `connection-error`.
  tcpRetryEvents?: Array<string>;
}

export function appmesh_RouteSpecHttpRouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tcpRetryEvents",
      "List of TCP retry events. The only valid value is `connection-error`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "List of HTTP retry events.\nValid values: `client-error` (HTTP status code 409), `gateway-error` (HTTP status codes 502, 503, and 504), `server-error` (HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511), `stream-error` (retry on refused stream).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Maximum number of retries.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRetryTimeout",
      "Per-retry timeout.",
      appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes(),
      true,
      false,
    ),
  ];
}
