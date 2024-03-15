export interface getClusterSecurityPostureConfig {
  // Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED and BASIC.
  Mode?: string;

  // Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  VulnerabilityMode?: string;
}
