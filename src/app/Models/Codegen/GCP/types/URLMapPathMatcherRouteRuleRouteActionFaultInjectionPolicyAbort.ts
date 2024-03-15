export interface URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort {
  /*
The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive.
*/
  HttpStatus?: number;

  /*
The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  Percentage?: number;
}
