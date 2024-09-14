import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout";

export interface compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy {
  /*
Specifies one or more conditions when this retry policy applies.
Valid values are listed below. Only the following codes are supported when the URL map is bound to target gRPC proxy that has validateForProxyless field set to true: cancelled, deadline-exceeded, internal, resource-exhausted, unavailable.
- 5xx : retry is attempted if the instance or endpoint responds with any 5xx response code, or if the instance or endpoint does not respond at all. For example, disconnects, reset, read timeout, connection failure, and refused streams.
- gateway-error : Similar to 5xx, but only applies to response codes 502, 503 or 504.
- connect-failure : a retry is attempted on failures connecting to the instance or endpoint. For example, connection timeouts.
- retriable-4xx : a retry is attempted if the instance or endpoint responds with a 4xx response code. The only error that you can retry is error code 409.
- refused-stream : a retry is attempted if the instance or endpoint resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled : a retry is attempted if the gRPC status code in the response header is set to cancelled.
- deadline-exceeded : a retry is attempted if the gRPC status code in the response header is set to deadline-exceeded.
- internal :  a retry is attempted if the gRPC status code in the response header is set to internal.
- resource-exhausted : a retry is attempted if the gRPC status code in the response header is set to resource-exhausted.
- unavailable : a retry is attempted if the gRPC status code in the response header is set to unavailable.
*/
  retryConditions?: Array<string>;

  // Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  numRetries?: number;

  /*
Specifies a non-zero timeout per retry attempt.
If not specified, will use the timeout set in HttpRouteAction. If timeout in HttpRouteAction is not set,
will use the largest timeout among all backend services associated with the route.
Structure is documented below.
*/
  perTryTimeout?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout;
}

export function compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "retryConditions",
      "Specifies one or more conditions when this retry policy applies.\nValid values are listed below. Only the following codes are supported when the URL map is bound to target gRPC proxy that has validateForProxyless field set to true: cancelled, deadline-exceeded, internal, resource-exhausted, unavailable.\n- 5xx : retry is attempted if the instance or endpoint responds with any 5xx response code, or if the instance or endpoint does not respond at all. For example, disconnects, reset, read timeout, connection failure, and refused streams.\n- gateway-error : Similar to 5xx, but only applies to response codes 502, 503 or 504.\n- connect-failure : a retry is attempted on failures connecting to the instance or endpoint. For example, connection timeouts.\n- retriable-4xx : a retry is attempted if the instance or endpoint responds with a 4xx response code. The only error that you can retry is error code 409.\n- refused-stream : a retry is attempted if the instance or endpoint resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry.\n- cancelled : a retry is attempted if the gRPC status code in the response header is set to cancelled.\n- deadline-exceeded : a retry is attempted if the gRPC status code in the response header is set to deadline-exceeded.\n- internal :  a retry is attempted if the gRPC status code in the response header is set to internal.\n- resource-exhausted : a retry is attempted if the gRPC status code in the response header is set to resource-exhausted.\n- unavailable : a retry is attempted if the gRPC status code in the response header is set to unavailable.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "perTryTimeout",
      "Specifies a non-zero timeout per retry attempt.\nIf not specified, will use the timeout set in HttpRouteAction. If timeout in HttpRouteAction is not set,\nwill use the largest timeout among all backend services associated with the route.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout_GetTypes(),
      false,
      false,
    ),
  ];
}
