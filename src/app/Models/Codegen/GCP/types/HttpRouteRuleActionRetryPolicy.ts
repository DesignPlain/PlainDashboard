export interface HttpRouteRuleActionRetryPolicy {
  // Specifies the allowed number of retries.
  NumRetries?: number;

  // Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  PerTryTimeout?: string;

  // Specifies one or more conditions when this retry policy applies.
  RetryConditions?: Array<string>;
}
