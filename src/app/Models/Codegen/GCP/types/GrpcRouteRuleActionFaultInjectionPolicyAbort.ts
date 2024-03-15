export interface GrpcRouteRuleActionFaultInjectionPolicyAbort {
  // The HTTP status code used to abort the request.
  HttpStatus?: number;

  // The percentage of traffic which will be aborted.
  Percentage?: number;
}
