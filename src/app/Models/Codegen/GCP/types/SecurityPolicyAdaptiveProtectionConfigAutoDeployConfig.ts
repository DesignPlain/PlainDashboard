export interface SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
  // Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.
  LoadThreshold?: number;

  // Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.
  ConfidenceThreshold?: number;

  // Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.
  ExpirationSec?: number;

  // Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.
  ImpactedBaselineThreshold?: number;
}
