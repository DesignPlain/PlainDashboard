export interface HttpRouteRuleActionFaultInjectionPolicyAbort {
  // The percentage of traffic which will be aborted.
  Percentage?: number;

  // The HTTP status code used to abort the request.
  HttpStatus?: number;
}
