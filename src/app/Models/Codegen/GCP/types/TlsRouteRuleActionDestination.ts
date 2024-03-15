export interface TlsRouteRuleActionDestination {
  // The URL of a BackendService to route traffic to.
  ServiceName?: string;

  /*
Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

- - -
*/
  Weight?: number;
}
