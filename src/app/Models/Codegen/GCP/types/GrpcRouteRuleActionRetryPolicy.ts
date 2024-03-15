export interface GrpcRouteRuleActionRetryPolicy {
  /*
Specifies the allowed number of retries.

- - -
*/
  NumRetries?: number;

  /*
Specifies one or more conditions when this retry policy applies.
Each value may be one of: `connect-failure`, `refused-stream`, `cancelled`, `deadline-exceeded`, `resource-exhausted`, `unavailable`.
*/
  RetryConditions?: Array<string>;
}
