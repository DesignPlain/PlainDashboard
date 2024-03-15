export interface SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig {
  // Rate limit key name applicable only for the following key types:
  EnforceOnKeyName?: string;

  // Determines the key to enforce the `rate_limit_threshold` on. If not specified, defaults to `ALL`.
  EnforceOnKeyType?: string;
}
