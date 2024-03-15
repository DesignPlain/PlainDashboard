export interface SecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  // Number of HTTP(S) requests for calculating the threshold.
  Count?: number;

  // Interval over which the threshold is computed.
  IntervalSec?: number;
}
