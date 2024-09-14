import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout,
  appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout";

export interface appmesh_RouteSpecHttp2RouteRetryPolicy {
  /*
List of HTTP retry events.
Valid values: `client-error` (HTTP status code 409), `gateway-error` (HTTP status codes 502, 503, and 504), `server-error` (HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511), `stream-error` (retry on refused stream).
*/
  httpRetryEvents?: Array<string>;

  // Maximum number of retries.
  maxRetries?: number;

  // Per-retry timeout.
  perRetryTimeout?: appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout;

  /*
List of TCP retry events. The only valid value is `connection-error`.

You must specify at least one value for `http_retry_events`, or at least one value for `tcp_retry_events`.
*/
  tcpRetryEvents?: Array<string>;
}

export function appmesh_RouteSpecHttp2RouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "List of HTTP retry events.\nValid values: `client-error` (HTTP status code 409), `gateway-error` (HTTP status codes 502, 503, and 504), `server-error` (HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511), `stream-error` (retry on refused stream).",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Maximum number of retries.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perRetryTimeout",
      "Per-retry timeout.",
      () => appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcpRetryEvents",
      "List of TCP retry events. The only valid value is `connection-error`.\n\nYou must specify at least one value for `http_retry_events`, or at least one value for `tcp_retry_events`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
