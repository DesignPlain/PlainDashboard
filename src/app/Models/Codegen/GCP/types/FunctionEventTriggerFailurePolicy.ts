export interface FunctionEventTriggerFailurePolicy {
  // Whether the function should be retried on failure. Defaults to `false`.
  Retry?: boolean;
}
