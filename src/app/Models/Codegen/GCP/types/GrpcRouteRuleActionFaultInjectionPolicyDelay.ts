export interface GrpcRouteRuleActionFaultInjectionPolicyDelay {
  // Specify a fixed delay before forwarding the request.
  FixedDelay?: string;

  // The percentage of traffic on which delay will be injected.
  Percentage?: number;
}
