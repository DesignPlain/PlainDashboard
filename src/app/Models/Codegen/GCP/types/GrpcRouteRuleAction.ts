import { GrpcRouteRuleActionDestination } from "./GrpcRouteRuleActionDestination";
import { GrpcRouteRuleActionFaultInjectionPolicy } from "./GrpcRouteRuleActionFaultInjectionPolicy";
import { GrpcRouteRuleActionRetryPolicy } from "./GrpcRouteRuleActionRetryPolicy";

export interface GrpcRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<GrpcRouteRuleActionDestination>;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  FaultInjectionPolicy?: GrpcRouteRuleActionFaultInjectionPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: GrpcRouteRuleActionRetryPolicy;

  // Specifies the timeout for selected route.
  Timeout?: string;
}
