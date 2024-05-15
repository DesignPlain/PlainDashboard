import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout,
  Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout";

export interface Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicy {
  // Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  NumRetries?: number;

  /*
Specifies a non-zero timeout per retry attempt.
If not specified, will use the timeout set in HttpRouteAction. If timeout in HttpRouteAction is not set,
will use the largest timeout among all backend services associated with the route.
Structure is documented below.
*/
  PerTryTimeout?: Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout;

  /*
Specfies one or more conditions when this retry rule applies. Valid values are:
- 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
or if the backend service does not respond at all, example: disconnects, reset, read timeout,
- connection failure, and refused streams.
- gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures connecting to backend services,
for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
- refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
- unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable
*/
  RetryConditions?: Array<string>;
}

export function Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "NumRetries",
      "Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PerTryTimeout",
      "Specifies a non-zero timeout per retry attempt.\nIf not specified, will use the timeout set in HttpRouteAction. If timeout in HttpRouteAction is not set,\nwill use the largest timeout among all backend services associated with the route.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleRouteActionRetryPolicyPerTryTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RetryConditions",
      "Specfies one or more conditions when this retry rule applies. Valid values are:\n* 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,\nor if the backend service does not respond at all, example: disconnects, reset, read timeout,\n* connection failure, and refused streams.\n* gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.\n* connect-failure: Loadbalancer will retry on failures connecting to backend services,\nfor example due to connection timeouts.\n* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.\nCurrently the only retriable error supported is 409.\n* refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.\nThis reset type indicates that it is safe to retry.\n* cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled\n* deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded\n* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted\n* unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
